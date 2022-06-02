<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/logout', function () {
    if (Auth::user()) {
        Auth::user()->tokens()->delete();
        Auth::logout();
    }
    return redirect('/');
});

Auth::routes();

////////////////////////
// Socialite
Route::get('login/{provider}/redirect', [\App\Http\Controllers\Auth\LoginController::class, 'redirectToProvider'])->name('redirect');
Route::get('login/{provider}/callback', [\App\Http\Controllers\Auth\LoginController::class, 'handleProviderCallback']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/{any?}', function () {
        return view('index');
    });
});
