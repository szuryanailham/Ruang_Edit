<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
         // Definisikan policies di sini

         Gate::define('admin', function ($user) {
            return in_array($user->role, ['admin', 'super_admin']);
        });
        
          // Tambahkan middleware di sini
          $this->app['router']->aliasMiddleware('upgradeToHttps', \App\Http\Middleware\UpgradeToHttpsUnderNgrok::class);
    }
}
