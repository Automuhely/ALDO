<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class IsVezetoszerelo
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next): Response
    {
        if (Auth::user() && Auth::user()->szerepkor == 'vezetoszerelo') {   //átengedi a kérést
            return $next($request);
        }
        //hibaüzenetet küldünk
        return response('You have not vezetoszerelo access', 401);
    }
}
