<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check() || (auth()->user()->role !== 'admin' && auth()->user()->role !== 'super_admin')) {

            return abort(403);
    
        }
        return $next($request);
    }
}
