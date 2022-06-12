<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
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

    public function filterNewProduct($filterText)
    {
        // return $filterText;
        $products = "";
        if ($filterText == 'new') {
            $products = Product::where('isNew', 1)->get();
        } else if ($filterText == 'new-price') {
            $products = Product::where('isNewPrice', 1)->get();
        }
        return response()->json([
            'products' => $products,
        ]);
    }

    public function filterTabs()
    {
        // echo "hi";
        $tabs = Category::where('parrentCatId', 0)->orderBy('name', 'asc')->get();
        return response()->json([
            'tabs' => $tabs,
        ]);
    }

    public function filterTabProduct($categoryId)
    {
        $tabProducts = Product::where('categoryId', $categoryId)->orderBy('name', 'asc')->get();
        return response()->json([
            'tabProducts' => $tabProducts,
        ]);
    }
}
