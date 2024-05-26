<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::namespace('App\Http\Controllers\User')->group(function () {

       
    Route::get('/', 'HomeController@index');


    Route::get('/mentor', 'HomeController@mentor');

    
    Route::get('/class', 'HomeController@course');
    
    Route::get('/events', 'HomeController@event');
    Route::get('/wabiner', 'HomeController@wabiner');
    Route::get('/about', 'HomeController@about');

    Route::get('/detailMentor', 'HomeController@detailMentor');

    Route::get('/detailCourse', 'HomeController@detailCourse');

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', 'MonthMateriController@index')->name('dashboard');
        Route::get('/dashboard/list-Materi/{month_Materi}', 'MonthMateriController@show');
        Route::get('/dashboard/detail-Materi/{list_Materi}', 'ListMateriController@index');
    });
});
