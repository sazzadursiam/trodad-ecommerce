<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    //
    public function index(Request $request)
    {
        $type = gettype($request->test);
        return response()->json([
            'data' => $request->all(),
            'type' => $type,
        ]);
    }
    public function adminAuthTest()
    {
        echo 'hi';
    }
}
