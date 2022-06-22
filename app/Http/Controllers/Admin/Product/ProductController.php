<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAttr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    //
    public function index()
    {
        $allProducts = Product::with('ProductCategory', 'ProductSubCategory', 'ProductBrand')->orderBy('id', 'desc')->get();
        return response()->json([
            'allProducts' => $allProducts
        ]);
    }

    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'name' => 'required',
                    'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                ]
            );
            // validation error
            if ($validator->fails()) {

                return response()->json([
                    'status' => '400',
                    'errors' => $validator->errors(),
                ]);
            }


            //Insert data into database
            $product = new Product();
            $product->name = $request->name;

            $slug = Str::slug($request->name);
            //check slug
            $checkSlug = Product::where('slug', $slug)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $product->slug = $slug;

            $product->brandId = $request->brandId;
            $product->categoryId = $request->categoryId;
            $product->subCategoryId = $request->subCategoryId;

            $product->shortDescription = $request->shortDescription;
            $product->description = $request->description;

            $product->price = $request->price;

            $product->discount1 = $request->discount1;
            $product->discount2 = $request->discount2;
            $product->discount3 = $request->discount3;
            $product->discount4 = $request->discount4;
            $product->discount5 = $request->discount5;

            $product->packSize1 = $request->packSize1;
            $product->packSize2 = $request->packSize2;
            $product->packSize3 = $request->packSize3;
            $product->packSize4 = $request->packSize4;
            $product->packSize5 = $request->packSize5;


            $product->unitPrice1 = $request->unitPrice1;
            $product->unitPrice2 = $request->unitPrice2;
            $product->unitPrice3 = $request->unitPrice3;
            $product->unitPrice4 = $request->unitPrice4;
            $product->unitPrice5 = $request->unitPrice5;

            $product->variantPrice1 = $request->variantPrice1;
            $product->variantPrice2 = $request->variantPrice2;
            $product->variantPrice3 = $request->variantPrice3;
            $product->variantPrice4 = $request->variantPrice4;
            $product->variantPrice5 = $request->variantPrice5;

            $product->oldPrice1 = $request->oldPrice1;
            $product->oldPrice2 = $request->oldPrice2;
            $product->oldPrice3 = $request->oldPrice3;
            $product->oldPrice4 = $request->oldPrice4;
            $product->oldPrice5 = $request->oldPrice5;

            $product->flagText1 = $request->flagText1;
            $product->flagText2 = $request->flagText2;
            $product->flagText3 = $request->flagText3;
            $product->flagText4 = $request->flagText4;
            $product->flagText5 = $request->flagText5;

            $product->isNew = $request->isNew;
            $product->isNewPrice = $request->isNewPrice;

            $product->sku = 'Art ' . time();



            //image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $new_name = time() . '.' . $request->image->getClientOriginalExtension();
                $path = '/Images/Products/';
                $image->move(public_path($path), $new_name);
                $product->image = $path . $new_name;
            }
            $product->save();

            return response()->json([
                'status' => 200,
                'message' => 'Inserted Successful.',
                'product' => $product,
            ]);
        }
    }

    public function moreAttr($proId)
    {
        $productInfo = Product::with('ProductAttrs')->find($proId);
        return response()->json([
            'productInfo' => $productInfo
        ]);
    }

    public function show($id)
    {
        $viewProduct = Product::find($id);
        return response()->json([
            'viewProduct' => $viewProduct
        ]);
    }

    public function update(Request $request, $id)
    {

        //Validation
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]
        );
        // validation error
        if ($validator->fails()) {

            return response()->json([
                'status' => '400',
                'errors' => $validator->errors(),
            ]);
        }


        //Insert data into database
        $product =  Product::find($id);

        $product->name = $request->name;

        $slug = Str::slug($request->name);
        //check slug
        $checkSlug = Product::where('slug', $slug)->where('id', '!=', $id)->count();

        if ($checkSlug > 0) {
            $slug = time() . '-' . $slug;
        }

        $product->slug = $slug;

        $product->brandId = $request->brandId;
        $product->categoryId = $request->categoryId;
        $product->subCategoryId = $request->subCategoryId;

        $product->shortDescription = $request->shortDescription;
        $product->description = $request->description;

        $product->price = $request->price;

        $product->discount1 = $request->discount1;
        $product->discount2 = $request->discount2;
        $product->discount3 = $request->discount3;
        $product->discount4 = $request->discount4;
        $product->discount5 = $request->discount5;

        $product->packSize1 = $request->packSize1;
        $product->packSize2 = $request->packSize2;
        $product->packSize3 = $request->packSize3;
        $product->packSize4 = $request->packSize4;
        $product->packSize5 = $request->packSize5;


        $product->unitPrice1 = $request->unitPrice1;
        $product->unitPrice2 = $request->unitPrice2;
        $product->unitPrice3 = $request->unitPrice3;
        $product->unitPrice4 = $request->unitPrice4;
        $product->unitPrice5 = $request->unitPrice5;

        $product->variantPrice1 = $request->variantPrice1;
        $product->variantPrice2 = $request->variantPrice2;
        $product->variantPrice3 = $request->variantPrice3;
        $product->variantPrice4 = $request->variantPrice4;
        $product->variantPrice5 = $request->variantPrice5;

        $product->oldPrice1 = $request->oldPrice1;
        $product->oldPrice2 = $request->oldPrice2;
        $product->oldPrice3 = $request->oldPrice3;
        $product->oldPrice4 = $request->oldPrice4;
        $product->oldPrice5 = $request->oldPrice5;

        $product->flagText1 = $request->flagText1;
        $product->flagText2 = $request->flagText2;
        $product->flagText3 = $request->flagText3;
        $product->flagText4 = $request->flagText4;
        $product->flagText5 = $request->flagText5;

        $product->isNew = $request->isNew;
        $product->isNewPrice = $request->isNewPrice;

        $product->sku = 'Art ' . time();



        //image upload
        if ($request->hasFile('image')) {

            //remove old image form folder if new image comes
            if ($product->image != null || $product->image != "") {
                $image_file = public_path($product->image);
                if (file_exists($image_file)) {
                    unlink($image_file);
                }
            }
            $image = $request->file('image');
            $new_name = time() . '.' . $request->image->getClientOriginalExtension();
            $path = '/Images/Products/';
            $image->move(public_path($path), $new_name);
            $product->image = $path . $new_name;
        }
        $product->save();

        return response()->json([
            'status' => 200,
            'message' => 'Update Successful.',
            'product' => $product,
        ]);
    }

    public function edit($id)
    {
        $allMainCategory = Category::where('parrentCatId', 0)->get();
        $allBrands = Brand::get();
        $editProduct = Product::find($id);
        $parrentCatId = $editProduct->categoryId;
        $subCategory = Category::where('parrentCatId', '!=', 0)->where('parrentCatId', $parrentCatId)->get();
        return response()->json([
            'editProduct' => $editProduct,
            'allMainCategory' => $allMainCategory,
            'subCategory' => $subCategory,
            'allBrands' => $allBrands,
        ]);
    }

    public function destroy($id)
    {
        $model = Product::find($id);

        if ($model) {
            //remove old image form folder if new image comes
            if ($model->image != null || $model->image != "") {
                $image_file = public_path($model->image);
                if (file_exists($image_file)) {
                    unlink($image_file);
                }
            }
            $model->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Deleted Successful',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found.',
            ]);
        }
    }



    public function getCatBrand()
    {
        $getCategories = Category::where('status', 1)->where('parrentCatId', 0)->orderBy('name', 'asc')->get();
        $getSubCategories = Category::where('status', 1)->where('parrentCatId', '!=', 0)->orderBy('name', 'asc')->get();
        $getBrands = Brand::where('status', 1)->orderBy('brandName', 'asc')->get();

        return response()->json([
            'getCategories' => $getCategories,
            'getSubCategories' => $getSubCategories,
            'getBrands' => $getBrands,
        ]);
    }
}
