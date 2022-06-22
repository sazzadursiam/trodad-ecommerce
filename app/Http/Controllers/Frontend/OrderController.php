<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\AddToCart;
use App\Models\Order;
use App\Models\OrderDetails;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function viewUserOrders($userId)
    {
        $usersOrders = Order::with('orderDetails')->where('customerId', $userId)->orderBy('id', 'desc')->get();

        return response()->json([
            'usersOrders' => $usersOrders,
        ]);
    }
    public function viewAllOrders()
    {
        $allOrders = Order::with('orderDetails')->orderBy('id', 'desc')->get();

        return response()->json([
            'allOrders' => $allOrders,
        ]);
    }

    public function viewUserOrdersDetails($orderId)
    {
        $userOrdersDetails = Order::with('orderDetails')->where('id', $orderId)->first();
        $products = Product::get();

        $ordersDetails = DB::table('order_details')
            ->select('orders.id as orderId', 'orders.name', 'orders.email', 'orders.city', 'orders.postCode', 'orders.streetAddress', 'orders.country', 'orders.created_at as orderDate', 'orders.paymentStatus', 'orders.paymentType', 'orders.orderStatus', 'orders.totalAmount', 'order_details.price',  'products.name as productName', 'order_details.qty')
            ->leftJoin('orders', 'orders.id', '=', 'order_details.orderId')
            ->leftJoin('products', 'products.id', '=', 'order_details.productId')
            ->where(['orders.id' => $orderId])
            ->get();
        $orders = DB::table('orders')
            ->select('orders.id as orderId', 'orders.name', 'orders.email', 'orders.city', 'orders.postCode', 'orders.streetAddress', 'orders.country', 'orders.created_at as orderDate', 'orders.paymentStatus', 'orders.paymentType', 'orders.orderStatus', 'orders.totalAmount')
            ->where(['orders.id' => $orderId])
            ->first();


        return response()->json([
            'ordersDetails' => $ordersDetails,
            'orders' => $orders,
        ]);
    }
    public function orderStatusUpdate(Request $request, $orderId)
    {
        $model = Order::find($orderId);
        $model->orderStatus = $request->orderStatus;
        $model->save();
        return response()->json([
            'status' => 200,
            'orderStatusMessage' => 'Order Status Update Successful.',
        ]);
    }
    public function paymentStatusUpdate(Request $request, $orderId)
    {
        $model = Order::find($orderId);
        $model->paymentStatus = $request->paymentStatus;
        $model->save();
        return response()->json([
            'status' => 200,
            'paymentStatusMessage' => 'Payment Status Update Successful.',
        ]);
    }
}
