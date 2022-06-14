<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomerAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check()) {
            return response()->json([
                'status' => 0,
                'messsage' => 'You are not loggedin',
            ]);
        }
        // if (Auth::id()) {

        //     if (Auth::user()->user_type == 1 || Auth::user()->user_type == 2) {
        //     } else {
        //         return redirect()->route('admin.login');
        //     }
        // } else {
        //     return redirect()->route('admin.login');
        // }

        return $next($request);
    }
}
