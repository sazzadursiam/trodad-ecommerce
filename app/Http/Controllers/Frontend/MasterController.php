<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;

class MasterController extends Controller
{
    // Get all brands info
    public function masterGet()
    {
        $allBrands = Brand::orderBy('brandName', 'asc')->where('status', 1)->get();

        $allProductCaregories = Category::with('subCategory')->where('status', 1)->where('parrentCatId', 0)->orderBy('name', 'asc')->get();

        return response()->json([
            'allBrands' => $allBrands,
            'allProductCaregories' => $allProductCaregories,
        ]);
    }
    // Get Single Brand  info
    public function getSingleBrand($slug)
    {
        $singleBrand = Brand::where('slug', $slug)->where('status', 1)->first();

        return response()->json([
            'singleBrand' => $singleBrand,
        ]);
    }

    // Get all Product categories info
    // public function getAllProductCaregories()
    // {
    //     $allProductCaregories = Category::with('subCategory')->where('status', 1)->where('parrentCatId', 0)->orderBy('name', 'asc')->get();

    //     return response()->json([
    //         'allProductCaregories' => $allProductCaregories,
    //     ]);
    // }
    // Get Single Brand  info
    public function getSingleProductCategory($slug)
    {
        $singleProductCategory = Category::where('slug', $slug)->where('status', 1)->first();

        return response()->json([
            'singleProductCategory' => $singleProductCategory,
        ]);
    }
}
