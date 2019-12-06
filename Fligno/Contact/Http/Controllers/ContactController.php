<?php

namespace Fligno\Contact\Http\Controllers;

use App\Http\Controllers\Controller;
use Fligno\Contact\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Resources\PaginationCollection;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact = Contact::query();

        $columns = ['name', 'email'];

        $data = $this->paginate($contact, $columns);

        return new PaginationCollection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required',
            'email' => 'required',
            'description' => 'required'
        ]);

        $contact = Contact::create($data);

        return response($contact, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        $data = request()->validate([
            'name' => 'required',
            'email' => 'required',
            'description' => 'required'
        ]);

        $contact = tap($contact)->update($data);

        return response()->json($contact);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response([], 204);
    }
}
