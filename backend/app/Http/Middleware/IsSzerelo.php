<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class IsSzerelo
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next): Response
    {
        if (Auth::user() && Auth::user()->szerepkor == 'szerelo') {   //átengedi a kérést
            return $next($request);
            /* $response = $next($request)
             Log::info('valami');
            return $response; */
        }
        //hibaüzenetet küldünk
        return response('You have not szerelo access', 401);
    }
}
