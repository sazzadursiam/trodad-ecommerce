<?php

use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\Product\CategoryController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\Frontend\MasterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Frontend Routes
|--------------------------------------------------------------------------
*/

// Brands 
Route::get('/index-master-get', [MasterController::class, 'masterGet']);
Route::get('/brands/{slug}', [MasterController::class, 'getSingleBrand']);
// Product category 
// Route::get('/product-categories', [MasterController::class, 'getAllProductCaregories']);
Route::get('/product-categories/{slug}', [MasterController::class, 'getSingleProductCategory']);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => '/admin'], function () {

    /*
    |--------------------------------------------------------------------------
    | Brands Routes
    |--------------------------------------------------------------------------
    */
    Route::group(['prefix' => '/brands'], function () {
        Route::get('/', [BrandController::class, 'index']);
        Route::post('/store', [BrandController::class, 'store']);
        Route::get('/view/{id}', [BrandController::class, 'show']);
        Route::get('/edit/{id}', [BrandController::class, 'edit']);
        Route::get('/status-update/{id}/{status}', [BrandController::class, 'statusUpdate']);
        Route::put('/update/{id}', [BrandController::class, 'update']);
        Route::delete('/delete/{id}', [BrandController::class, 'destroy']);
    });

    /*
    |--------------------------------------------------------------------------
    | Product Category Routes
    |--------------------------------------------------------------------------
    */
    Route::group(['prefix' => '/product-categories'], function () {
        Route::get('/', [CategoryController::class, 'index']);
        Route::post('/store', [CategoryController::class, 'store']);
        Route::get('/view/{id}', [CategoryController::class, 'show']);
        Route::get('/edit/{id}', [CategoryController::class, 'edit']);
        Route::get('/status-update/{id}/{status}', [CategoryController::class, 'statusUpdate']);
        Route::put('/update/{id}', [CategoryController::class, 'update']);
        Route::delete('/delete/{id}', [CategoryController::class, 'destroy']);
    });
    /*
    |--------------------------------------------------------------------------
    | Product Routes
    |--------------------------------------------------------------------------
    */
    Route::group(['prefix' => '/products'], function () {
        Route::get('/', [ProductController::class, 'index']);
        Route::post('/store', [ProductController::class, 'store']);
        Route::get('/view/{id}', [ProductController::class, 'show']);
        Route::get('/edit/{id}', [ProductController::class, 'edit']);
        // Route::get('/status-update/{id}/{status}', [ProductController::class, 'statusUpdate']);
        Route::put('/update/{id}', [ProductController::class, 'update']);
        Route::delete('/delete/{id}', [ProductController::class, 'destroy']);

        Route::get('/get-cat-brand', [ProductController::class, 'getCatBrand']);
    });


    //
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
