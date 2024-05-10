<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

Route::namespace('App\Http\Controllers\User')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });

    Route::get('/mentor', function () {
        return Inertia::render('MentorPage');
    });

    Route::get('/course', function () {
        return Inertia::render('CoursePage');
    });
});
?>