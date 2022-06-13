<?php

namespace App\Http\Controllers\API\v1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\AuthController;
use App\Models\StudyUser;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login')->name('login');
    Route::post('/logout', 'logout')->name('logout');

    Route::get('/user', function (Request $request) {
        $user = $request->user();
        $study = StudyUser::where('user_id', '=', $user->id)->get();

        $collection = collect($user);
        $result = $collection->put("study", $study)->all();
        $result = $collection->put("service", [])->all();
        $result = $collection->put("expertise", [])->all();

        return response()->json(['success' => true, 'user' => $result]);
    })->middleware('auth');
});
