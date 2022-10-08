<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\StudyUser;
use App\Models\ExpertiseUser;
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
        $client = new Client([
            'base_uri' => 'https://sci-mock-api.herokuapp.com/',
        ]);

        $response = $client->request('POST', 'login', [
            'json' => [
                'email' => $request->email,
                'password' => $request->password
            ],
        ]);

        if ($response->getStatusCode() == 200) {
            $data = json_decode($response->getBody())->payload;

            $userWhere = [
                'email' => $data->email,
            ];

            $userData = [
                'first_name' => $data->firstName,
                'last_name' => $data->lastName,
                'username' => $data->userName,
                'password' => Hash::make($request->password)
            ];

            $user = User::updateOrCreate($userWhere, $userData);

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
                'message' => 'Login Error',
                'payload' =>  null
            ], 201);
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
