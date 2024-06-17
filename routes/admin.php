<?php

use App\Http\Controllers\Admin\AdminMateriController;
use App\Http\Controllers\Admin\EditMemberController;
use App\Http\Middleware\CheckRole;
use Illuminate\Support\Facades\Route;

Route::namespace('App\Http\Controllers\Admin')->group(function () {
    Route::middleware(['auth', 'verified',CheckRole::class])->group(function () {
        Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
            Route::get('/list-bulan', 'AdminMateriController@index')->name('list-materi');
            Route::get('/list-materi/{month_Materi}', 'AdminMateriController@show');
             Route::resource('/edit-materi',AdminMateriController::class);
             Route::resource('/edit-member', EditMemberController::class)->names([
                'index' => 'edit-member.index'
            ]);
        });
    });
});
