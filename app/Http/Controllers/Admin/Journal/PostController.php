<?php

namespace App\Http\Controllers\Admin\Journal;

use App\Http\Controllers\Controller;
use App\Models\JournalCategory;
use App\Models\JournalPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $allJournalPosts = JournalPost::with('journalCategories')->orderBy('id', 'desc')
            ->get();

        $allJournalCategories = JournalCategory::get();
        // Send data to the API
        return response()->json([
            'allJournalPosts' => $allJournalPosts,
            'allJournalCategories' => $allJournalCategories,
        ]);
    }

    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'title' => 'required',
                    'categoryId' => 'required',
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

            //Insert data into database
            $model = new JournalPost();

            $model->title = $request->title;

            $slug = Str::slug($request->title);
            //check slug
            $checkSlug = JournalPost::where('slug', $slug)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->slug = $slug;

            $model->categoryId = $request->categoryId;
            $model->shortDescription = $request->shortDescription;
            $model->description = $request->description;

            //image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $new_name = time() . '.' . $request->image->getClientOriginalExtension();
                $path = '/Images/Journals/';
                $image->move(public_path($path), $new_name);
                $model->image = $path . $new_name;
            }

            if ($model->save()) {
                $postCountModel = JournalCategory::find($request->categoryId);
                $postCountModel->postCount = $postCountModel->postCount + 1;
                $postCountModel->save();
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
        $viewJournalPost = JournalPost::with('journalCategories')->find($id);

        if ($viewJournalPost) {
            return response()->json([
                'viewJournalPost' => $viewJournalPost,
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
        $editJournalPost = JournalPost::with('journalCategories')->find($id);;

        if ($editJournalPost) {
            return response()->json([
                'editJournalPost' => $editJournalPost,
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
        $model = JournalPost::find($id);

        if ($model) {

            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'title' => 'required',
                    'categoryId' => 'required',
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

            $slug = Str::slug($request->title);
            //check slug
            $checkSlug = JournalPost::where('slug', $slug)->where('id', '!=', $id)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->slug = $slug;

            $model->categoryId = $request->categoryId;
            $model->shortDescription = $request->shortDescription;
            $model->description = $request->description;


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
                $path = '/Images/Journals/';
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
        $model = JournalPost::find($id);

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
