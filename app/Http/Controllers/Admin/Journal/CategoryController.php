<?php

namespace App\Http\Controllers\Admin\Journal;

use App\Http\Controllers\Controller;
use App\Models\JournalCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {
        $allJournalCategory = JournalCategory::orderBy('id', 'desc')->get();
        // Send data to the API
        return response()->json([
            'allJournalCategory' => $allJournalCategory,
        ]);
    }

    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'categoryName' => 'required',
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
            $model = new JournalCategory();
            $model->categoryName = $request->categoryName;

            $slug = Str::slug($request->categoryName);
            //check slug
            $checkSlug = JournalCategory::where('categoryslug', $slug)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->categoryslug = $slug;


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
        $viewJournal = JournalCategory::find($id);

        if ($viewJournal) {
            return response()->json([
                'viewJournal' => $viewJournal,
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
        $editJournalCategory = JournalCategory::find($id);

        if ($editJournalCategory) {
            return response()->json([
                'editJournalCategory' => $editJournalCategory,
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
        $model = JournalCategory::find($id);

        if ($model) {

            //Validation
            $validator = Validator::make(
                $request->all(),
                [
                    'categoryName' => 'required'
                ]
            );
            // validation error
            if ($validator->fails()) {

                return response()->json([
                    'status' => '400',
                    'errors' => $validator->errors(),
                ]);
            }

            $model->categoryName = $request->categoryName;

            $slug = Str::slug($request->categoryName);
            //check slug
            $checkSlug = JournalCategory::where('categoryslug', $slug)->where('id', '!=', $id)->count();

            if ($checkSlug > 0) {
                $slug = time() . '-' . $slug;
            }

            $model->categoryslug = $slug;

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
        $model = JournalCategory::find($id);

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
}
