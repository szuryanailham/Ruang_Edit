<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('Welcome', [
            'user' => $user
        ]);
    }
    public function about()
    {
        $user = Auth::user();
        return Inertia::render('AboutPage', [
            'user' => $user
        ]);
    }

    public function course()
    {
        $user = Auth::user();
        return Inertia::render('CoursePage', [
            'user' => $user
        ]);
    }

    public function detailCourse()
    {
        $user = Auth::user();
        return Inertia::render('DetailCoursePage', [
            'user' => $user
        ]);
    }
    public function detailMentor()
    {
        $user = Auth::user();
        return Inertia::render('DetailMentorPage', [
            'user' => $user
        ]);
    }

    public function event()
    {
        $user = Auth::user();
        return Inertia::render('EventPage', [
            'user' => $user
        ]);
    }

    public function mentor()
    {
        $user = Auth::user();
        return Inertia::render('MentorPage', [
            'user' => $user
        ]);
    }

    public function  Wabiner()
    {
        $user = Auth::user();
        return Inertia::render('WabinerPage', [
            'user' => $user
        ]);
    }
    
   
}
