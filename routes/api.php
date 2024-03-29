<?php

namespace App\Http\Controllers\API\v1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ParameterController;
use App\Http\Controllers\UserPermissionsController;
use App\Http\Controllers\DashBoardController;
use App\Http\Controllers\ResearchController;
use App\Http\Controllers\UserController;
use App\Models\StudyUser;
use App\Models\UserExpertise;
use App\Models\UserPermissions;
use Illuminate\Support\Facades\Auth;




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
        if ($user->is_deleted == 1) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return redirect('/');
        }
        $permission = UserPermissions::where('user_id', '=', $user->id)->first();
        $user["permission"] = $permission;
        return response()->json(['success' => true, 'user' => $user]);
    })->middleware('auth');
});

Route::controller(ParameterController::class)->group(function () {
    // Route::group(['middleware' => ['auth']], function () {
    //     Route::get('/parameter', 'fetch');
    // });
    Route::get('/parameter', 'fetch');
});

Route::controller(DashBoardController::class)->group(function () {
    Route::get('/dashboard', 'fetchDashboard');
    Route::get('/search-research', 'fetchSearch');
    Route::get('/search-research/{id}', 'fetchSearchById');
    Route::get('/download-file', 'downloadFile');
    Route::get('/search-user-expertise', 'fetchSearchUserExpertise');
});

Route::controller(ResearchController::class)->group(function () {
    Route::group(['middleware' => ['auth']], function () {
        Route::post('/research', 'save');
        Route::post('/research/edit/{id}', 'edit');
        Route::get('/research', 'fetchAll');
        Route::get('/research/admin', 'fetchAllAdmin');
        Route::get('/research/{id}', 'fetchById');
        Route::delete('/research/{id}', 'delete');
    });
});

Route::controller(UserController::class)->group(function () {
    Route::post('/update-user-management', 'updateUser');
    Route::get('/user-management', 'fetchUser');
    Route::get('/user-management-by-id/{id}', 'fetchUserById');
    Route::get('/user-expertise', 'fetchExpertiseAll');
    Route::get('/user-expertise-exp-main-field', 'fetchExpertiseExpMainFieldAll');
    Route::get('/update-expertise', 'updateExpertise');
    Route::get('/user-expertise/{id}', 'fetchUserExpertiseById');
    Route::delete('/user-management/{id}', 'deleteUserById');
});

Route::controller(UserPermissionsController::class)->group(function () {
    Route::group(['middleware' => ['auth']], function () {
        Route::get('/user-permission', 'fetchUserPermission');
        Route::post('/user-permission', 'updateUserPermission');
        Route::get('/my-permission', 'fetchUserPermissionByUserId');
    });
});
