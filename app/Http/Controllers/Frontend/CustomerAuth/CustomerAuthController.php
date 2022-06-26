<?php

namespace App\Http\Controllers\Frontend\CustomerAuth;

use App\Http\Controllers\Controller;
use App\Models\AddToCart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CustomerAuthController extends Controller
{
    // Customer Registration
    public function registration(Request $request)
    {

        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'name' => 'required',
                    'email' => 'required|email|unique:users',
                    'phone' => 'nullable',
                    'password' => 'required|min:4|max:18',
                    'confirm_password' => 'required|same:password|min:4|max:18',
                ]
            );
            // validation error
            if ($validator->fails()) {

                return response()->json([
                    'status' => '400',
                    'errors' => $validator->errors(),
                ]);
            }

            //Insert data into database
            $model = new User();
            $model->name = $request->name;
            $model->email = $request->email;
            $model->phone = $request->phone;
            $model->password = Hash::make($request->password);;



            if ($model->save()) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Registration Successful....!',
                    'customerData' => $model,
                ]);
            } else {
                return response()->json([
                    'status' => 400,
                    'message' => 'Registration Failed....!'
                ]);
            }
        }
    }

    //login
    public function customerLogin(Request $request)
    {
        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'email' => 'required|email',
                    'password' => 'required',
                ]
            );
            // validation error
            if ($validator->fails()) {

                return response()->json([
                    'status' => '400',
                    'errors' => $validator->errors(),
                ]);
            }
            $customer = User::where('email', $request->email)->first();
            if ($customer) {
                $check_pass = Hash::check($request->password, $customer->password);
                if ($check_pass) {

                    if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                        $products = AddToCart::where('userId', Auth::user()->id)->get();
                        $cartProductQuantity = $products->count();
                        $cartTotal = $products->sum('price');

                        return response()->json([
                            'status' => 1,
                            'message' => 'Login Successful',
                            'loggedInUser' => Auth::user(),
                            'cartProductQuantity' => $cartProductQuantity,
                            'cartTotal' => $cartTotal,
                        ]);
                    } else {
                        return response()->json([
                            'status' => 400,
                            'message' => 'Worng Email Or Password',
                        ]);
                    }
                } else {
                    return response()->json([
                        'status' => 400,
                        'message' => 'Wrong Password....',
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 400,
                    'message' => 'Account Not Found....',
                ]);
            }
        }
    }

    public function userData($userId)
    {
        $userInfo = User::find($userId);

        return response()->json([
            'userInfo' => $userInfo,
        ]);
    }
    public function userUpdateProfile(Request $request, $userId)
    {
        $model = User::find($userId);
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'password' => 'nullable|min:4|max:18',
                'confirm_password' => 'nullable|same:password|min:4|max:18',
            ]
        );
        // validation error
        if ($validator->fails()) {

            return response()->json([
                'status' => '400',
                'errors' => $validator->errors(),
            ]);
        }
        $model->name = $request->name;
        //image upload
        if ($request->hasFile('profileImage')) {
            //remove old image form folder if new image comes
            if ($model->profileImage != null || $model->profileImage != "") {
                $image_file = public_path($model->profileImage);
                if (file_exists($image_file)) {
                    unlink($image_file);
                }
            }
            $profileImage = $request->file('profileImage');
            $new_name = time() . '.' . $request->profileImage->getClientOriginalExtension();
            $path = '/Images/user/profile/';
            $profileImage->move(public_path($path), $new_name);
            $model->profileImage = $path . $new_name;
        }

        if ($request->current_password != null || $request->current_password != "") {
            $current_pass = $model->password;
            if (Hash::check($request->current_password, $current_pass)) {
                // The passwords match...
                $model->password = Hash::make($request->password);
            } else {

                return response()->json([
                    'status' => 400,
                    'currentPassError' => 'Password Dose Not Match.',
                ]);
            }
        }

        $model->save();

        return response()->json([
            'status' => 200,
            'message' => 'Profile Update Successful.',
            'userInfo' => $model,
        ]);
    }
    public function userUpdateAddress(Request $request, $userId)
    {
        $model = User::find($userId);
        $model->

        $model->save();

        return response()->json([
            'status' => 200,
            'message' => 'Update Successful.',
            'userInfo' => $model,
        ]);
    }
}
