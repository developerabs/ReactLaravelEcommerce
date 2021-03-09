<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/SendVisitorDetails',[VisitorController::class,'SendVisitorDetails']);
Route::post('/SendContactDetails',[ContactController::class,'SendContactDetails']);

Route::get('/SendCategoryDetails',[CategoryController::class,'SendCategoryDetails']);
Route::get('/ProductListByRemark/{remark}',[ProductListController::class,'ProductListByRemark']);
Route::get('/ProductListByCategory/{Category}',[ProductListController::class,'ProductListByCategory']);
Route::get('/ProductListBySubCategory/{Category}/{SubCategory}',[ProductListController::class,'ProductListBySubCategory']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
