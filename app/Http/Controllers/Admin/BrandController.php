<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    public function index()
    {
        $allBrands = Brand::orderBy('id', 'desc')
            ->get();

        // Send data to the API
        return response()->json([
            'allBrands' => $allBrands,
        ]);
    }

    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'brandName' => 'required',
                    'brandImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
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
            $model = new Brand();
            $model->brandName = $request->brandName;

            $slug = Str::slug($request->brandName);
            //check slug
            $checkSlug = Brand::where('slug', $slug)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->slug = $slug;
            $model->shortDesc = $request->shortDesc;

            //image upload
            if ($request->hasFile('brandImage')) {
                $brandImage = $request->file('brandImage');
                $new_name = time() . '.' . $request->brandImage->getClientOriginalExtension();
                $path = '/Images/Brands/';
                $brandImage->move(public_path($path), $new_name);
                $model->brandImage = $path . $new_name;
            }

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
        $viewBrand = Brand::find($id);

        if ($viewBrand) {
            return response()->json([
                'viewBrand' => $viewBrand,
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
        $editBrand = Brand::find($id);

        if ($editBrand) {
            return response()->json([
                'editBrand' => $editBrand,
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
        $model = Brand::find($id);

        if ($model) {

            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'brandName' => 'required',
                    'brandImage' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                ]
            );
            // validation error
            if ($validator->fails()) {

                return response()->json([
                    'status' => '400',
                    'errors' => $validator->errors(),
                ]);
            }

            $model->brandName = $request->brandName;

            $slug = Str::slug($request->brandName);
            //check slug
            $checkSlug = Brand::where('slug', $slug)->where('id', '!=', $id)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->slug = $slug;

            $model->shortDesc = $request->shortDesc;

            //image upload
            if ($request->hasFile('brandImage')) {
                //remove old image form folder if new image comes
                if ($model->brandImage != null || $model->brandImage != "") {
                    $image_file = public_path($model->brandImage);
                    if (file_exists($image_file)) {
                        unlink($image_file);
                    }
                }
                $brandImage = $request->file('brandImage');
                $new_name = time() . '.' . $request->brandImage->getClientOriginalExtension();
                $path = '/Images/Brands/';
                $brandImage->move(public_path($path), $new_name);
                $model->brandImage = $path . $new_name;
            }

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
        $model = Brand::find($id);

        if ($model) {
            //remove old image form folder if new image comes
            if ($model->brandImage != null || $model->brandImage != "") {
                $image_file = public_path($model->brandImage);
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

    public function statusUpdate($id, $status)
    {
        $model = Brand::find($id);
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
