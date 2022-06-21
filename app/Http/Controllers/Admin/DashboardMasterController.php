<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardMasterController extends Controller
{
    //
    public function allCount()
    {
        $numOfCustomers = User::count();
        $numOfProducts = Product::count();
        $numOfProductCategory = Category::count();
        $numOfBrands = Brand::count();
        $numOfOrders = Order::count();

        return response()->json([
            'numOfCustomers' => $numOfCustomers,
            'numOfProducts' => $numOfProducts,
            'numOfProductCategory' => $numOfProductCategory,
            'numOfBrands' => $numOfBrands,
            'numOfOrders' => $numOfOrders,
        ]);
    }
}
