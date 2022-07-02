<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Shipping;
use Illuminate\Http\Request;

class MasterController extends Controller
{
    // Get all brands info
    public function masterGet()
    {
        $allBrands = Brand::orderBy('brandName', 'asc')->where('status', 1)->get();

        $allProductCaregories = Category::with(['subCategory' => function ($query) {
            // Query the name field in subcaegory
            $query->where('status', 1);
        }])->where('status', 1)->where('parrentCatId', 0)->get();

        $allBanners = Banner::get();

        $allProductsMaster = Product::with('ProductCategory', 'ProductSubCategory', 'ProductBrand')->orderBy('id', 'desc')->take(8)->get();



        return response()->json([
            'allBrands' => $allBrands,
            'allProductCaregories' => $allProductCaregories,
            'allBanners' => $allBanners,
            'allProductsMaster' => $allProductsMaster,
        ]);
    }

    public function getSingleProductDetails($slug)
    {
        $singleProductDetails = Product::with('ProductCategory', 'ProductSubCategory', 'ProductBrand')->where('slug', $slug)->first();

        $categoryId = $singleProductDetails->categoryId;

        $relatedProducts = Product::with('ProductCategory', 'ProductSubCategory', 'ProductBrand')->where('categoryId', $categoryId)->get();

        $shippingInfo = Shipping::first();

        return response()->json([
            'singleProductDetails' => $singleProductDetails,
            'relatedProducts' => $relatedProducts,
            'shippingInfo' => $shippingInfo,
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

    public function getAllCategoryProduct($categoryId, $categorySlug)
    {
        $categoryProducts = Product::where('categoryId', $categoryId)->with('ProductCategory', 'ProductSubCategory', 'ProductBrand')->paginate(24);
        return response()->json([
            'categoryProducts' => $categoryProducts,
        ]);
    }
    public function getAllSubCategoryProduct($categoryId, $categorySlug, $subCategoryId, $subCategorySlug)
    {
        $subCategoryProducts = Product::where('categoryId', $categoryId)->where('subCategoryId', $subCategoryId)->with('ProductCategory', 'ProductSubCategory', 'ProductBrand')->paginate(24);
        return response()->json([
            'subCategoryProducts' => $subCategoryProducts,
        ]);
    }
    public function getAllSBrandProduct($brandId, $brandSlug)
    {
        $brandProducts = Product::where('brandId', $brandId)->with('ProductCategory', 'ProductSubCategory', 'ProductBrand')->paginate(24);
        return response()->json([
            'brandProducts' => $brandProducts,
        ]);
    }


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
        $tabs = Category::where('parrentCatId', 0)->get();
        return response()->json([
            'tabs' => $tabs,
        ]);
    }

    public function filterTabProduct($categoryId)
    {
        $tabProducts = Product::where('categoryId', $categoryId)->take(8)->get();
        return response()->json([
            'tabProducts' => $tabProducts,
        ]);
    }

    public function getAllProduct()
    {
        $allProducts = Product::select('id', 'name', 'slug', 'image')->get();

        return response()->json([
            'allProducts' => $allProducts,
        ]);
    }
}
