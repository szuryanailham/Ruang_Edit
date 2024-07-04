<?php
use App\Mail\MyTestEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleLoginController;

Route::get('/auth/google', [GoogleLoginController::class, 'redirect'])->name('google-auth');
Route::get('/auth/google/call-back', [GoogleLoginController::class, 'callbackGoogle']);

require __DIR__.'/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/admin.php';

