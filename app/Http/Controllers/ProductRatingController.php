<?php

namespace App\Http\Controllers;

use App\Models\ProductRating;
use Illuminate\Http\Request;

class ProductRatingController extends Controller
{
    //
    public function productRatingStore(Request $request)
    {
        // return response()->json([
        //     'message' => $request->all(),

        // ]);

        $model = new ProductRating();
        $model->productId = $request->productId;
        $model->rating = $request->rating;
        $model->ratingTitle = $request->ratingTitle;
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
