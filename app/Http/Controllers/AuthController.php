<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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
        $user = User::where('email', '=', $request->email)->first();

        if ($user) {
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
