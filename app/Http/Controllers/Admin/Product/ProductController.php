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
        $allProducts = Product::orderBy('id', 'desc')->get();
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

            $product->shortDescription = $request->shortDescription;
            $product->description = $request->description;

            //image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $new_name = time() . '.' . $request->image->getClientOriginalExtension();
                $path = '/Images/Products/';
                $image->move(public_path($path), $new_name);
                $product->image = $path . $new_name;
            }



            if ($product->save()) {

                $productId = $product->id;

                //
                $productAttr = new ProductAttr();
                $productAttr->productId = $productId;
                $productAttr->sku = 'Art - ' . uniqid();
                $productAttr->packSize = $request->productAttr->packSize;
                $productAttr->unitPrice = $request->productAttr->unitPrice;
                $productAttr->price = $request->productAttr->price;
                $productAttr->oldPrice = $request->productAttr->oldPrice;
                $productAttr->flagText = $request->productAttr->flagText;
                $productAttr->isNew = $request->productAttr->isNew;
                $productAttr->isNewPrice = $request->productAttr->isNewPrice;
                $productAttr->save();


                return response()->json([
                    'status' => 200,
                    'message' => 'Inserted Successful.'
                ]);
            } else {
                return response()->json([
                    'status' => 400,
                    'message' => 'Inserted Failed.'
                ]);
            }
        }
    }

    public function show($id)
    {
        $viewProduct = Product::find($id);
        return response()->json([
            'viewProduct' => $viewProduct
        ]);
    }

    public function edit($id)
    {
        $editProduct = Product::find($id);
        return response()->json([
            'editProduct' => $editProduct
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
        $getCategories = Category::where('status', 1)->orderBy('name', 'asc')->get();
        $getBrands = Brand::where('status', 1)->orderBy('brandName', 'asc')->get();

        return response()->json([
            'getCategories' => $getCategories,
            'getBrands' => $getBrands,
        ]);
    }
}
