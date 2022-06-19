<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\AddToCart;
use App\Models\Order;
use App\Models\OrderDetails;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function storeOrders(Request $request)
    {
        $model = new Order();
        $model->name = $request->name;
        $model->email = $request->email;
        $model->country = $request->country;
        $model->streetAddress = $request->streetAddress;
        $model->apartmentAddress = $request->apartmentAddress;
        $model->city = $request->city;
        $model->district = $request->district;
        $model->postcode = $request->postcode;
        $model->phone = $request->phone;
        $model->customerId = $request->userId;
        $model->orderStatus = 0;
        $model->paymentType = $request->paymentType;
        $model->paymentStatus = $request->paymentStatus;
        $model->totalAmount = $request->totalAmount;
        $model->save();
        $orderId = $model->id;

        if ($orderId) {
            $cartDetails = AddToCart::with('Products')->where('userId', $request->userId)->get();
            foreach ($cartDetails as $row) {
                $orderDetails = new OrderDetails();
                $orderDetails->orderId = $orderId;
                $orderDetails->productId = $row->products['id'];
                $orderDetails->packSize = $row->packSize;
                $orderDetails->qty = $row->qty;
                $orderDetails->unitPrice = $row->unitPrice;
                $orderDetails->price = $row->price;
                $orderDetails->save();
            }
        }
        $cartData = AddToCart::where('userId', $request->userId)->delete();
        // $cartDetails->delete();





        return response()->json([
            'message' => "Order Placed Successful.",

        ]);
    }
}
