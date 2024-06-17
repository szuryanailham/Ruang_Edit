<?php
use App\Mail\MyTestEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

// Route::get('/testroute', function(){
// $name = "ilham suryana";
// Mail::to('szuryanailham090102@gmail.com')->send(new MyTestEmail($name));
// });

require __DIR__.'/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/admin.php';

