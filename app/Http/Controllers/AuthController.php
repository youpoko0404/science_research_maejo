<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\StudyUser;
use App\Models\ExpertiseUser;
use App\Models\UserPermissions;
use Illuminate\Support\Facades\Hash;
use GuzzleHttp\Client;


class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $user = User::where('email', '=', $request->email)->where('is_deleted', '=', 0)->first();

        if ($user === null) {
            return response()->json([
                'success' => true,
                'message' => '',
                'payload' =>  null
            ], 201);
        }
        $permission = UserPermissions::where('user_id', '=', $user->id)->first();

        if (Hash::check($request->password, $user->password)) {
            $user["permission"] = $permission;
            Auth::login($user);
            $request->session()->regenerate();
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $user
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => 'The provided credentials do not match our records.',
            'payload' =>  null
        ], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
