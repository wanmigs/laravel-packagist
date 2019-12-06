<?php

namespace Tests\Feature;

use Fligno\Contact\Models\Contact;
use Tests\TestCase;
use Illuminate\Http\Response;

class UpdateContactTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->setBaseRoute('contact');
        $this->setBaseModel(Contact::class);
    }

    /** @test */
    public function a_user_can_update_contact()
    {
        $contact = create(Contact::class);
        $attributes = raw(Contact::class, []);

        $this->patchJson(route('contact.update', $contact->id), $attributes)
            ->assertSuccessful();

        tap($contact->fresh(), function ($contact) use ($attributes) {
            $this->assertEquals($attributes['name'], $contact->name);
            $this->assertEquals($attributes['email'], $contact->email);
            $this->assertEquals($attributes['description'], $contact->description);
        });
    }

    /**
     *  @dataProvider contactDataProvider
     *  @test
     **/
    public function a_user_cannot_update_a_contact_without_required_fields($fields)
    {
        $contact = create(Contact::class);

        $this->patchJson(route('contact.update', $contact->id), $fields())
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
