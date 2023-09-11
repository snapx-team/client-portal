<?php

namespace Xguard\ClientPortal;

use Illuminate\Support\ServiceProvider;
use Xguard\ClientPortal\Http\Middleware\CheckHasAccess;

class ClientPortalServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->make('Xguard\ClientPortal\Http\Controllers\AppController');
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'Xguard\ClientPortal');
        $this->mergeConfigFrom(__DIR__.'/../config.php', 'client_portal');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(\Illuminate\Routing\Router $router)
    {
        app('router')->aliasMiddleware('client_portal_role_check', CheckHasAccess::class);
        $this->loadMigrationsFrom(__DIR__ . '/Http/Middleware');
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');

        include __DIR__ . '/routes/web.php';

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/client-portal'),
        ], 'client-portal-assets');
    }
}
