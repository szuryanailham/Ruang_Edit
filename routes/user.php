<?php
// MODEL CALLING
use App\Http\Controllers\MonthMateriController;
use App\Http\Controllers\ListMateriController;
//END MODEL CALLING
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    Route::get('/class', function () {
        return Inertia::render('CoursePage');
    });

    Route::get('/events', function () {
        return Inertia::render('EventPage');
    });

    Route::get('/wabiner', function () {
        return Inertia::render('WabinerPage');
    });

    Route::get('/about', function () {
        return Inertia::render('AboutPage');
    });

    Route::get('/detailMentor', function () {
        return Inertia::render('DetailMentorPage');
    });

    Route::get('/detailCourse', function () {
        return Inertia::render('DetailCoursePage');
    });
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [MonthMateriController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/list-Materi/{month_Materi}', [MonthMateriController::class, 'show']);
    Route::get('/dashboard/detail-Materi/{list_Materi}', [ListMateriController::class, 'index']);
});
