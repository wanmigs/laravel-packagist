<?php

namespace App\ResourceModels;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class Blog
{
    public static $model = '\App\Blog';

    public static $searchColumns = ['name'];

    public static $headers = [];

    //File name of the compoenent to be added in `/resource/js/admin/pages/resouce/rows`
    // public static $rowComponent = 'User';

    public static $endpoint = [
        'show' => '',
        'store' => '',
        'update' => '',
    ];

    public function form()
    {
        return [
            'name' => [
                'label' => 'Name *',
                'type' => 'text'
            ]
        ];
    }

    public function validation()
    {
        return  [];
    }

    public function updateValidation($request, $model)
    {
        return [];
    }
}
