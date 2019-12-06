<?php

namespace Tests\Feature;

use Fligno\Contact\Models\Contact;
use Tests\TestCase;
use Illuminate\Http\Response;

class CreateContactTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->setBaseRoute('contact');
        $this->setBaseModel(Contact::class);
    }

    /** @test */
    public function a_user_can_create_a_contact()
    {
        $contact = raw(Contact::class);

        $this->postJson(route('contact.store'), $contact)
            ->assertSuccessful();
    }

    /**
     *  @dataProvider contactDataProvider
     *  @test
     **/
    public function a_user_cannot_create_a_contact_without_required_fields($fields)
    {
        $this->postJson(route('contact.store'), $fields())
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function contactDataProvider()
    {
        return [
            'Name is required' => [function () {
                return raw(Contact::class, ['name' => null]);
            }],
            'Email is required' => [function () {
                return raw(Contact::class, ['email' => null]);
            }],
            'Description is required' => [function () {
                return raw(Contact::class, ['description' => null]);
            }]
        ];
    }
}
