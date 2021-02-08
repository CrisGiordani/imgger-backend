<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Public Routes

// Users

    // Create
    Route::post('users', 'Api\\UserController@store');

// Authentication

    // Login
    Route::post('auth/login', 'Api\\AuthController@login');

// Private Routes
Route::group(['middleware' => ['apiJwt']], function() {

    // Authentication

        // Me
        Route::get('auth/me', 'Api\\AuthController@me');

        // Logout
        Route::post('auth/logout', 'Api\\AuthController@logout');

    // Users

        // List
        Route::get('users', 'Api\\UserController@index');

        // Edit 
        Route::put('users', 'Api\\UserController@update');

        // Delete

    
    // Images

        // List Personal Images
        Route::get('images', 'Api\\ImageController@list');

        // Upload
        Route::post('images', 'Api\\UploadController@upload');

        // Delete
        Route::delete('images/{id}', 'Api\\ImageController@delete');
});
