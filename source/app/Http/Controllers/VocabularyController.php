<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVocabularyRequest;
use App\Http\Requests\UpdateVocabularyRequest;
use Illuminate\Http\Request;
use App\Models\Vocabulary;
use Illuminate\Support\Facades\DB;

class VocabularyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVocabularyRequest $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(Vocabulary $vocabulary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vocabulary $vocabulary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVocabularyRequest $request, Vocabulary $vocabulary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vocabulary $vocabulary)
    {
        //
    }

    public function search(Request $request)
    {
        $vocabularySearch = $request->input('name')->upper();
        $vocabulary = DB::table('vocabularies') -> where('name', '=', $vocabularySearch) ->get();
        dd($vocabulary);
    }
}
