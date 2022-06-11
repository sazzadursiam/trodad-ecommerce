<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {
        $allProductCategory = Category::with('subCategory', 'parentCategory')->orderBy('id', 'desc')->get();

        $allParrentCategory = Category::where('parrentCatId', 0)->where('status', 1)->orderBy('name', 'ASC')->get();

        // Send data to the API
        return response()->json([
            'allProductCategory' => $allProductCategory,
            'allParrentCategory' => $allParrentCategory,
        ]);
    }

    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'name' => 'required|unique:categories',
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
            $model = new Category();
            $model->name = $request->name;

            $slug = Str::slug($request->name);
            //check slug
            $checkSlug = Category::where('slug', $slug)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->slug = $slug;

            $model->shortDesc = $request->shortDesc;

            if ($request->parrentCatId == !"" || $request->parrentCatId == !null) {
                $parrentCatId = $request->parrentCatId;
            } else {
                $parrentCatId = 0;
            }
            $model->parrentCatId = $parrentCatId;

            if ($model->save()) {
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
        $viewCategory = Category::with('subCategory', 'parentCategory')->find($id);

        if ($viewCategory) {
            return response()->json([
                'viewCategory' => $viewCategory,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found.',
            ]);
        }
    }

    public function edit($id)
    {
        $editCategory = Category::find($id);

        if ($editCategory) {
            return response()->json([
                'editCategory' => $editCategory,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found.',
            ]);
        }
    }


    public function update(Request $request, $id)
    {
        $model = Category::find($id);

        if ($model) {

            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'name' => 'required|unique:categories,name,' . $id,
                ]
            );
            // validation error
            if ($validator->fails()) {

                return response()->json([
                    'status' => '400',
                    'errors' => $validator->errors(),
                ]);
            }

            $model->name = $request->name;

            $slug = Str::slug($request->name);
            //check slug
            $checkSlug = Category::where('slug', $slug)->where('id', '!=', $id)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->slug = $slug;

            $model->shortDesc = $request->shortDesc;

            if (
                $request->parrentCatId == !"" || $request->parrentCatId == !null
            ) {
                $parrentCatId = $request->parrentCatId;
            } else {
                $parrentCatId = 0;
            }
            $model->parrentCatId = $parrentCatId;

            $model->save();

            return response()->json([
                'status' => 200,
                'message' => 'Updated Successful.',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found.',
            ]);
        }
    }

    public function destroy($id)
    {
        $model = Category::find($id);

        if ($model) {
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

    public function statusUpdate($id, $status)
    {
        $model = Category::find($id);
        if ($status == 1) {
            $status = 0;
        } else if ($status == 0) {
            $status = 1;
        }
        $model->status = $status;
        $model->save();
        return response()->json([
            'status' => 200,
            'message' => 'Status Updated Successful',
        ]);
    }
}
