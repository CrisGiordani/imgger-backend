<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public Routes //

// Users
    // Create
    Route::post('users', 'Api\\UserController@store');
  
// Authentication
    // Login
    Route::post('auth/login', 'Api\\AuthController@login');


// Private Routes //
Route::group(['middleware' => ['jwt.verify']], function() {

    // Authentication
        // Me
        Route::get('auth/me', 'Api\\AuthController@me');
        // Logout
        Route::post('auth/logout', 'Api\\AuthController@logout');

    // Users

        // Show 
        Route::get('user/{id}', 'Api\\UserController@show');

        // Edit 
        Route::put('users', 'Api\\UserController@update');

        // Delete
        ////////////////////////////////////
    
    // Images

        // List Personal Images
        Route::get('images/{id}', 'Api\\ImageController@list');

         // List All Images
         Route::get('images', 'Api\\ImageController@listAll');

        // Upload
        Route::post('images', 'Api\\UploadController@upload');

        // Delete
        Route::delete('images/{id}', 'Api\\ImageController@delete');
        
    // Admin

        // List Users
        Route::get('admin/users', 'Api\\AdminController@indexUser');

        // Update User
        Route::put('admin/user/{id}', 'Api\\AdminController@updateUser');

        // Delete User
        Route::delete('admin/user/{id}', 'Api\\AdminController@destroyUser');

        // List Imagens
        Route::get('admin/images', 'Api\\AdminController@indexImages');
        

});
