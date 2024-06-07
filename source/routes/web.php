<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\FlashCardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/tags', [TagController::class, 'index'])->name('tags.index');
Route::get('/tags/{id}', [TagController::class, 'show'])->name('tags.show');

Route::get('/flashcard', [FlashCardController::class, 'index'])->name('flashcard.index');
Route::get('/flashcard/test', [FlashCardController::class, 'getCardLearned'])->name('flashcard.test');

require __DIR__.'/auth.php';
