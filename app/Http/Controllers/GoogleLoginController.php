<?php

namespace App\Http\Controllers;

use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
class GoogleLoginController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callbackGoogle()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
            $user = User::where('google_id', $googleUser->getId())->first();
            
            if (!$user) {
                $newUser = User::create([
                    'name' => $googleUser->getName(),
                    'nama_depan' => $this->getFirstName($googleUser->getName()), 
                    'nama_belakang' => $this->getLastName($googleUser->getName()),
                    'email' => $googleUser->getEmail(),
                    'email_verified_at' => now(),
                    'remember_token' => Str::random(60),
                    'google_id' => $googleUser->getId(),
                ]);

                Auth::login($newUser);

                return redirect()->intended('dashboard');
            } else {
                Auth::login($user);
                return redirect()->intended('dashboard');
            }
        } catch (\Throwable $th) {
            return redirect('/login')->withErrors(['msg' => 'Something went wrong: ' . $th->getMessage()]);
        }
    }
    private function getFirstName($fullName)
    {
        $parts = explode(' ', $fullName);
        return $parts[0];
    }

    private function getLastName($fullName)
    {
        $parts = explode(' ', $fullName);
        return count($parts) > 1 ? $parts[count($parts) - 1] : '';
    }

}
