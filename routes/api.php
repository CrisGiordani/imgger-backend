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


        // Delete

    
    // Images

        // List Personal (pagination 20)


        // List Public (pagination 20)


        // Upload


        // Delete

});