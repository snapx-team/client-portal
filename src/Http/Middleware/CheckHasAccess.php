<?php

namespace Xguard\ClientPortal\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckHasAccess
{
    /**
     * Handle an incoming request.
     * todo: logic for allowing logged in client to view certain data
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (false) {
            abort(403, "You do not have access");
            //todo:
        }

        return $next($request);
    }
}
