<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\StudyUser;
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
            'base_uri' => 'http://localhost:8080/api/',
        ]);

        $response = $client->request('POST', 'user', [
            'query' => [
                'email' => $request->email,
                'password' => $request->password
            ],
        ]);


        if ($response->getStatusCode() == 200) {
            $data = json_decode($response->getBody());

            $userWhere = [
                'email' => $data->email,
            ];

            $userData = [
                'name' => $data->name,
                'username' => $data->username,
                'positionNumber' => $data->positionNumber,
                'employmentType' => $data->employmentType,
                'position' => $data->position,
                'level' => $data->level,
                'workStartDate' => $data->workStartDate,
                'password' => null,
            ];

            $user = User::updateOrCreate($userWhere, $userData);


            if ($data->study) {

                foreach ($data->study as $study) {

                    $studyWhere = [
                        'user_id' => $user->id,
                        'level' => $study->level,
                        'educational' => $study->educational,
                        'university' => $study->university,
                    ];

                    $studyData = [
                        'user_id' => $user->id,
                        'level' => $study->level,
                        'educational' => $study->educational,
                        'university' => $study->university,
                    ];

                    StudyUser::updateOrCreate($studyWhere, $studyData);
                }
            }

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




        // $user = User::where('email', '=', $request->email)->first();

        // if ($user) {
        //     Auth::login($user);
        //     $request->session()->regenerate();
        //     return response()->json([
        //         'success' => true,
        //         'message' => 'Successfully',
        //         'payload' =>  $user
        //     ], 200);
        // }

        // return response()->json([
        //     'success' => true,
        //     'message' => 'The provided credentials do not match our records.',
        //     'payload' =>  null
        // ], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
