<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ServerCheckTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
    }

    /** @test */
    public function it_should_check_system_applications()
    {
        $this->getJson('/system/application')
            ->assertSuccessful()
            ->assertJsonFragment(['status' => 'OK']);
    }

    /** @test */
    public function it_should_check_system_release()
    {
        $this->getJson('/system/release')
            ->assertSuccessful();
    }
}
