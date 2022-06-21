<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    //
    public function allCustomer()
    {
        $allCustomers = User::orderBy('id', 'desc')->get();
        return response()->json([
            'allCustomers' => $allCustomers,
        ]);
    }
}
