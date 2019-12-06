<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Fligno\Contact\Models\Contact;
use Faker\Generator as Faker;

$factory->define(Contact::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'contact' => $faker->phoneNumber,
        'description' => $faker->sentence,
    ];
});
