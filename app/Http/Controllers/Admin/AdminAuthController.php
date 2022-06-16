<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminAuthController extends Controller
{
    //login
    public function adminLogin(Request $request)
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
            $admin = Admin::where('email', $request->email)->first();
            if ($admin) {
                $check_pass = Hash::check($request->password, $admin->password);
                if ($check_pass) {

                    if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password])) {
                        return response()->json([
                            'status' => 1,
                            'message' => 'Login Successful',
                            'loggedInAdmin' => Auth::guard('admin')->user(),
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
