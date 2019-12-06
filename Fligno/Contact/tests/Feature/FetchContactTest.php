<?php

namespace Tests\Feature;

use Fligno\Contact\Models\Contact;
use Tests\TestCase;
use Illuminate\Http\Response;

class FetchContactTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->setBaseRoute('contact');
        $this->setBaseModel(Contact::class);
    }

    /** @test */
    public function a_user_can_fetch_contact()
    {
        $this->withoutExceptionHandling();
        $contact = create(Contact::class, [], 10);

        $this->getJson(route('contact.index'))
            ->assertSuccessful()
            ->assertJsonFragment(['total' => 10])
            ->assertJsonStructure(['data', 'total']);
    }

    /** @test */
    public function a_user_can_filter_contact()
    {
        $contact = create(Contact::class, [], 10);
        $this->getJson(
            route(
                'contact.index',
                [
                    'keyword' => $contact[5]->name
                ]
            )
        )
            ->assertSuccessful()
            ->assertJsonFragment(['total' => 1]);
    }
}
