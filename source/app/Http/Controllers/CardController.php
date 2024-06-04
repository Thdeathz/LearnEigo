<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tagAll = DB::table('tags') -> where('user_id', '=', Auth::id()) -> get();
        $cardAll = collect();
        foreach ($tagAll as $tag) {
            $cards = DB::table('cards') -> join('examples', 'examples.id', '=', 'cards.example_id')
                                                    -> join('vocabularies', 'vocabularies.id', '=', 'examples.vocab_id')
                                                    -> where('cards.tag_id', '=', $tag->id)
                                                    -> where('cards.status', '!=', 2)
                                                    -> get();
            $cardAll = $cardAll->merge($cards);
        }
        $randomCards = $cardAll->count() >= 10 ? $cardAll->random(10) : $cardAll;
        // dd($randomCards);
        return Inertia::render('User/FlashCard/FlashCardIndex', ['tagAll' => $tagAll, 'randomCards' => $randomCards]);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Card $card)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Card $card)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Card $card)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Card $card)
    {
        //
    }
}
