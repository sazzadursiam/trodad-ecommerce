<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BannerController extends Controller
{
    public function index()
    {
        $allBanners = Banner::orderBy('id', 'desc')->get();

        // Send data to the API
        return response()->json([
            'allBanners' => $allBanners,
        ]);
    }

    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'title' => 'nullable',
                    'btnLink' => 'required',
                    'image' => 'required|image|mimes:jpeg,png,jpg,gif',
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
            $model = new Banner();
            $model->title = $request->title;
            $model->btnLink = $request->btnLink;

            //image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $new_name = time() . '.' . $request->image->getClientOriginalExtension();
                $path = '/Images/Banners/';
                $image->move(public_path($path), $new_name);
                $model->image = $path . $new_name;
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
        $viewBanner = Banner::find($id);

        if ($viewBanner) {
            return response()->json([
                'viewBanner' => $viewBanner,
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
        $editBanner = Banner::find($id);

        if ($editBanner) {
            return response()->json([
                'editBanner' => $editBanner,
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
        $model = Banner::find($id);

        if ($model) {

            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'title' => 'nullable',
                    'btnLink' => 'required',
                    'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
                ]
            );
            // validation error
            if ($validator->fails()) {

                return response()->json([
                    'status' => '400',
                    'errors' => $validator->errors(),
                ]);
            }

            $model->title = $request->title;
            $model->btnLink = $request->btnLink;

            //image upload
            if ($request->hasFile('image')) {
                //remove old image form folder if new image comes
                if ($model->image != null || $model->image != "") {
                    $image_file = public_path($model->image);
                    if (file_exists($image_file)) {
                        unlink($image_file);
                    }
                }
                $image = $request->file('image');
                $new_name = time() . '.' . $request->image->getClientOriginalExtension();
                $path = '/Images/Banners/';
                $image->move(public_path($path), $new_name);
                $model->image = $path . $new_name;
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
        $model = Banner::find($id);

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
}
