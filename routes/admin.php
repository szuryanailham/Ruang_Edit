<?php

use App\Http\Controllers\Admin\AdminMateriController;
use Illuminate\Support\Facades\Route;

Route::namespace('App\Http\Controllers\Admin')->group(function () {
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
            Route::get('/list-bulan', 'AdminMateriController@index');
            Route::get('/list-materi/{month_Materi}', 'AdminMateriController@show');
             Route::resource('/edit-materi',AdminMateriController::class);
        });
    });
});
