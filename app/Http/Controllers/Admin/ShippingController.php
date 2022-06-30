<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Illuminate\Http\Request;

class ShippingController extends Controller
{
    //
    public function edit()
    {
        $editShippingInfo = Shipping::find(1);
        return response()->json([
            'status' => 200,
            'editShippingInfo' => $editShippingInfo,
        ]);
    }
    public function update(Request $request, $id)
    {
        $model = Shipping::find($id);
        $model->shippingMethod = $request->shippingMethod;
        $model->shippingPrice = $request->shippingPrice;
        $model->save();
        return response()->json([
            'status' => 200,
            'data' => $model,
        ]);
    }
}
