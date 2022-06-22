<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\JournalCategory;
use App\Models\JournalPost;
use Illuminate\Http\Request;

class JournalController extends Controller
{
    //
    public function allJournalPosts()
    {
        $allJournalPosts = JournalPost::with('journalCategories')->orderBy('id', 'desc')
            ->paginate(24);

        $allJournalCategories = JournalCategory::get();
        // Send data to the API
        return response()->json([
            'allJournalPosts' => $allJournalPosts,
            'allJournalCategories' => $allJournalCategories,
        ]);
    }
    public function singleJournalPost($id)
    {
        $singleJournalPost = JournalPost::with('journalCategories')->find($id);

        if ($singleJournalPost) {
            return response()->json([
                'singleJournalPost' => $singleJournalPost,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found.',
            ]);
        }
    }
    public function categoryJournalPost($categoryId)
    {
        $categoryJournalPosts = JournalPost::with('journalCategories')->where('categoryId', $categoryId)->paginate(24);

        if ($categoryJournalPosts) {
            return response()->json([
                'categoryJournalPosts' => $categoryJournalPosts,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found.',
            ]);
        }
    }
}
