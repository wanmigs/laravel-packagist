<?php

namespace Tests\Feature;

use Fligno\Contact\Models\Contact;
use Tests\TestCase;
use Illuminate\Http\Response;

class DeleteContactTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->setBaseRoute('contact');
        $this->setBaseModel(Contact::class);
    }

    /** @test */
    public function a_user_can_delete_a_contact()
    {
        $contact = create(Contact::class);

        $this->deleteJson(route('contact.destroy', $contact->id))
            ->assertStatus(Response::HTTP_NO_CONTENT);

        $this->assertDatabaseMissing('contacts', [
            'name' => $contact->name,
            'email' => $contact->email
        ]);
    }
}
