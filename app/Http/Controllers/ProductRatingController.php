<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductRating;
use Illuminate\Http\Request;

class ProductRatingController extends Controller
{
    //
    public function productRatingStore(Request $request)
    {
        $model = new ProductRating();
        $model->productId = $request->productId;
        $model->rating = $request->rating;
        $model->ratingUserEmail = $request->ratingUserEmail;
        $model->ratingComments = $request->ratingComments;
        $model->ratingUser = $request->ratingUser;
        $model->save();

        return response()->json([
            'status' => 200,
            'message' => 'Review Save Successful.',
            'model' => $model,
        ]);
    }

    public function productRatingShow($productId)
    {

        $productRattings = ProductRating::where('productId', $productId)->where('status', 1)->orderBy('id', 'desc')->get();
        $sumOfRatting = $productRattings->sum('rating');
        return response()->json([
            'status' => 200,
            'productRattings' => $productRattings,
            'sumOfRatting' => $sumOfRatting,
        ]);
    }
    public function newProductRating()
    {
        $newProductRatings = ProductRating::orderBy('id', 'desc')->where('status', 0)->get();
        return response()->json([
            'status' => 200,
            'newProductRatings' => $newProductRatings,
        ]);
    }
    public function allProductRating()
    {
        $allProductRating = ProductRating::orderBy('id', 'desc')->where('status', 1)->get();
        return response()->json([
            'status' => 200,
            'allProductRating' => $allProductRating,
        ]);
    }
    public function productRatingUpdateStatus($id, $status)
    {
        $model = ProductRating::find($id);
        $model->status = 1;
        $model->save();
        // save total rating
        $productId = $model->productId;
        $RatingModel = ProductRating::where('productId', $productId)->get();
        $totalRating = $RatingModel->count();
        $sumOfRating = $RatingModel->sum('rating');
        $avgRating = $sumOfRating / $totalRating;

        $productModel = Product::find($productId);
        $productModel->totalRating = $totalRating;
        $productModel->avgRating = $avgRating;
        $productModel->save();

        return response()->json([
            'status' => 200,
            'message' => 'Rating Approved.',
            'allProductRating' => $model,
        ]);
    }
    public function productRatingdelete($id)
    {
        $model = ProductRating::find($id);

        $model->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Delete Successful.',
        ]);
    }
}
