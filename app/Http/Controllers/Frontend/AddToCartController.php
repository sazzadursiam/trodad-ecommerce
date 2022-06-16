<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\AddToCart;
use App\Models\Product;
use Illuminate\Http\Request;

class AddToCartController extends Controller
{
    public function addToCartStore(Request $request)
    {
        $model = new AddToCart();

        $checkProduct = AddToCart::where('userId', $request->userId)->where('productId', $request->productId)->count();

        // if ($checkProduct == 0) {
        $model->userId = $request->userId;
        $model->userType = $request->userType;
        $model->productId = $request->productId;

        //condition
        $model->qty = $request->qty;

        $colNO = $request->selectedPackSize;
        $packSize = "packSize" . $colNO;
        $variantPrice = "variantPrice" . $colNO;
        $unitPrice = "unitPrice" . $colNO;

        $product = Product::where('id', $request->productId)->first();
        $P_SIZE = $product->$packSize;
        $PRICE = $product->$variantPrice;
        $UNIT_PRICE = $product->$unitPrice;


        $model->packSize = $P_SIZE;
        $model->price = $PRICE;
        $model->unitPrice = $UNIT_PRICE;

        $model->save();
        // }

        $products = AddToCart::where('userId', $request->userId)->get();
        $cartProductQuantity = $products->count();
        $cartTotal = $products->sum('price');

        return response()->json([
            'message' => 'Product Add To Cart Succerssful.',
            'status' => 200,
            'cartData' => $model,
            'cartProductQuantity' => $cartProductQuantity,
            'cartTotal' => $cartTotal,
        ]);
    }
}
