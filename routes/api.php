<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DashboardMasterController;
use App\Http\Controllers\Admin\Journal\CategoryController as JournalCategoryController;
use App\Http\Controllers\Admin\Product\CategoryController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\Frontend\AddToCartController;
use App\Http\Controllers\Frontend\CustomerAuth\CustomerAuthController;
use App\Http\Controllers\Frontend\MasterController;
use App\Http\Controllers\Frontend\OrderController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Frontend Routes
|--------------------------------------------------------------------------
*/

/* ===================== Auth Start ===================== */

Route::post('/customer/registration/store', [CustomerAuthController::class, 'registration']);
Route::post('/customer/login/process', [CustomerAuthController::class, 'customerLogin']);
Route::post('/admin/login/process', [AdminAuthController::class, 'adminLogin']);

/* ===================== Auth End ===================== */

// Brands 
Route::get('/index-master-get', [MasterController::class, 'masterGet']);
Route::get('/brands/{slug}', [MasterController::class, 'getSingleBrand']);
// Product category 
// Route::get('/product-categories', [MasterController::class, 'getAllProductCaregories']);
Route::get('/product-categories/{slug}', [MasterController::class, 'getSingleProductCategory']);

Route::get('/product/{filterText}', [MasterController::class, 'filterNewProduct']);

Route::get('/tabs', [MasterController::class, 'filterTabs']);

Route::get('/product/tab/{id}', [MasterController::class, 'filterTabProduct']);


/*
|--------------------------------------------------------------------------
| PRODUCT
|--------------------------------------------------------------------------
*/
Route::get('/all-product', [MasterController::class, 'getAllProduct']);

Route::get('/products/single-details/{slug}', [MasterController::class, 'getSingleProductDetails']);

Route::get('/products/category/{categoryId}/{slug}', [MasterController::class, 'getAllCategoryProduct']);

Route::get('/products/category/{categoryId}/{categorySlug}/{subCategoryId}/{subCategorySlug}', [MasterController::class, 'getAllSubCategoryProduct']);

Route::get('/brands/{brandId}/{brandSlug}/products', [MasterController::class, 'getAllSBrandProduct']);

/*
|--------------------------------------------------------------------------
| Cart
|--------------------------------------------------------------------------
*/
Route::post('/add-to-cart/save', [AddToCartController::class, 'addToCartStore']);
Route::get('/add-to-cart/view/{userID}', [AddToCartController::class, 'addToCartView']);
Route::get('/add-to-cart/user/update/{userID}/{tempUserId}', [AddToCartController::class, 'addToCartUpdateId']);
Route::get('/add-to-cart/qty/update/{id}/{qty}', [AddToCartController::class, 'addToCartUpdateQty']);
Route::delete('/add-to-cart/qty/delete/{id}', [AddToCartController::class, 'addToCartDeleteQty']);

/*
|--------------------------------------------------------------------------
| Orders
|--------------------------------------------------------------------------
*/
Route::post('/users/orders/store', [OrderController::class, 'storeOrders']);
Route::get('/users/orders/{userId}/view', [OrderController::class, 'viewUserOrders']);
Route::get('/users/orders/order-details/{orderId}', [OrderController::class, 'viewUserOrdersDetails']);


//auth test route 
Route::group(['middleware' => 'customer_auth'], function () {
    Route::get('/user/dashboard', [TestController::class, 'authTest']);
});
Route::group(['middleware' => 'admin_auth'], function () {
    Route::get('/admin/dashboard', [TestController::class, 'adminAuthTest']);
});

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
        Route::get('/product-attr-add/{id}', [ProductController::class, 'moreAttr']);

        Route::get('/get-cat-brand', [ProductController::class, 'getCatBrand']);
    });


    /*
    |--------------------------------------------------------------------------
    | Banner Routes
    |--------------------------------------------------------------------------
    */
    Route::group(['prefix' => '/banners-image'], function () {
        Route::get('/', [BannerController::class, 'index']);
        Route::post('/store', [BannerController::class, 'store']);
        Route::get('/view/{id}', [BannerController::class, 'show']);
        Route::get('/edit/{id}', [BannerController::class, 'edit']);
        Route::put('/update/{id}', [BannerController::class, 'update']);
        Route::delete('/delete/{id}', [BannerController::class, 'destroy']);
    });
    //order
    Route::get('/all-orders', [OrderController::class, 'viewAllOrders']);
    Route::get('/all-orders/order-details/{orderId}', [OrderController::class, 'viewUserOrdersDetails']);
    Route::put('/order/order-status/update/{orderId}', [OrderController::class, 'orderStatusUpdate']);
    Route::put('/order/payment-status/update/{orderId}', [OrderController::class, 'paymentStatusUpdate']);
    //customer
    Route::get('/all-customers', [CustomerController::class, 'allCustomer']);
    //dashboard count element
    Route::get('/all-counts', [DashboardMasterController::class, 'allCount']);



    // get sub-category
    Route::post('/get-sub-categories/{id}', [CategoryController::class, 'getSubCategories']);
    //test route
    Route::post('/test', [TestController::class, 'index']);

    /*
    |--------------------------------------------------------------------------
    | Journal Routes
    |--------------------------------------------------------------------------
    */
    Route::group(['prefix' => '/journal'], function () {
        Route::get('/', [JournalCategoryController::class, 'index']);
        Route::post('/store', [JournalCategoryController::class, 'store']);
        Route::get('/view/{id}', [JournalCategoryController::class, 'show']);
        Route::get('/edit/{id}', [JournalCategoryController::class, 'edit']);
        Route::put('/update/{id}', [JournalCategoryController::class, 'update']);
        Route::delete('/delete/{id}', [JournalCategoryController::class, 'destroy']);
    });



    //
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
