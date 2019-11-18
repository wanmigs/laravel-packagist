<?php

namespace Fligno;

use Illuminate\Support\ServiceProvider;

class FlignoServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $folders = array_diff(scandir(__DIR__), array('..', '.', 'FlignoServiceProvider.php'));
        $excludeFolders = ['Template', '.git'];

        foreach ($folders as $folder) {
            if (strpos($folder, 'Trait') || in_array($folder, $excludeFolders))
                continue;

            $serviceProvider = "Fligno\\{$folder}\\{$folder}ServiceProvider";
            $this->app->register($serviceProvider);
        }
    }
}
