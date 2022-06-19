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
                    'password' => 'required|min:4|max:12',
                    'confirm_password' => 'required|same:password|min:4|max:12',
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
}
