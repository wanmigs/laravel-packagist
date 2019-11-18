<?php

namespace Tests\Feature\Test;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{

    /** @test */
    public function it_can_test()
    {
        $response = $this->get('/sample/test');

        $response->assertStatus(200);
    }
}
