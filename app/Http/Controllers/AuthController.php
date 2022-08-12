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
                // 'position_number' => $data->positionNumber,
                // 'employment_type' => $data->employmentType,
                // 'position' => $data->position,
                // 'level' => $data->level,
                // 'work_start_date' => $data->workStartDate,
                'password' => Hash::make($request->password)
            ];

            $user = User::updateOrCreate($userWhere, $userData);

            // if ($data->study) {
            //     foreach ($data->study as $study) {
            //         $studyWhere = [
            //             'user_id' => $user->id,
            //             'level' => $study->level,
            //             'educational' => $study->educational,
            //             'university' => $study->university,
            //         ];

            //         $studyData = [
            //             'user_id' => $user->id,
            //             'level' => $study->level,
            //             'educational' => $study->educational,
            //             'university' => $study->university,
            //         ];
            //         StudyUser::updateOrCreate($studyWhere, $studyData);
            //     }
            // }

            // if ($data->expertise) {
            //     foreach ($data->expertise as $expertise) {
            //         $expertiseWhere = [
            //             'user_id' => $user->id,
            //             'group' => $expertise->text,
            //             'value' => $expertise->value,
            //         ];

            //         $expertiseData = [
            //             'user_id' => $user->id,
            //             'group' => $expertise->text,
            //             'value' => $expertise->value,
            //         ];
            //         ExpertiseUser::updateOrCreate($expertiseWhere, $expertiseData);
            //     }
            // }

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
