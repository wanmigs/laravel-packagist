<?php

namespace Fligno\Template;

use Illuminate\Support\ServiceProvider;
use Fligno\Template\Providers\RouteServiceProvider;
use Illuminate\Database\Eloquent\Factory as EloquentFactory;

class TemplateServiceProvider extends ServiceProvider
{
    protected $defer = true;

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        // Load view
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'Template');

        // Load migrations
        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');

        // Load factories
        $this->registerEloquentFactoriesFrom(__DIR__ . '/database/factories');
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }

    /**
     * Register factories.
     *
     * @param  string  $path
     * @return void
     */
    protected function registerEloquentFactoriesFrom($path)
    {
        $this->app->make(EloquentFactory::class)->load($path);
    }
}
