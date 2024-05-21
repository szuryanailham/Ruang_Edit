<?php

use App\Http\Controllers\MonthMateriController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard/list-edit',[MonthMateriController::class,'listMateriAdmin']);
    Route::get('/dashboard/list-edit/materi/{month_Materi}',[MonthMateriController::class,'showAdmin']);
});



