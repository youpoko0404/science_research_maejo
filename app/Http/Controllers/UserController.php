<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\UserExpertise;
use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function updateUser(Request $request)
    {
        $users = User::find($request->id);
        $userWhere = [
            'id' => $request->id,
        ];
        $userData = [
            "email" => $request->email,
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "password" => $request->password != "" ? Hash::make($request->password) : $users->password,
            "username" => $request->username,
        ];
        $results = User::updateOrCreate($userWhere, $userData);

        if ($results) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $results
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  null,
            ], 201);
        }
    }

    public function fetchUserById($id)
    {
        $results = User::find($id);

        if ($results) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $results
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  null,
            ], 201);
        }
    }

    public function deleteUserById($id)
    {
        $results = User::find($id);
        if ($results) {
            $results->update(
                [
                    'is_deleted' => 1
                ]
            );
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  null
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'File not found',
                'payload' =>  null
            ], 404);
        }
    }
    public function fetchUser()
    {
        $users = User::where('role', '!=', "admin")->where('is_deleted', '==', 0)
            ->orderBy('created_at')
            ->get();

        if ($users) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $users
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function fetchExpertiseAll()
    {
        $research = UserExpertise::get();

        if ($research) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $research
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function updateExpertise()
    {
        $client = new Client([
            'base_uri' => 'https://api.mju.ac.th/Person/API/PERSON9486bba19bca462da44dc8ac447dea9723052020/PersonExpertise',
        ]);

        $response = $client->request('GET');

        if ($response->getStatusCode() == 200) {

            $data = json_decode($response->getBody());

            foreach ($data as $obj) {
                if ($obj->facultyId == '20300') {
                    $expertiseWhere = [
                        'citizen_id' => $obj->citizenId
                    ];
                    $expertiseData = [
                        "citizen_id" => $obj->citizenId,
                        "title_position_short" => $obj->titlePositionShort,
                        "first_name" => $obj->firstName,
                        "last_name" => $obj->lastName,
                        "section_id" => $obj->sectionId,
                        "section" => $obj->section,
                        "division_id" => $obj->divisionId,
                        "division" => $obj->division,
                        "faculty_id" => $obj->facultyId,
                        "faculty" => $obj->faculty,
                        "person_exp_id" => $obj->personExpId,
                        "exp_type_id" => $obj->expTypeId,
                        "exp_type" => $obj->expType,
                        "exp_acad_position" => $obj->expAcadPosition,
                        "exp_group_field_id" => $obj->expGroupFieldId,
                        "exp_group_field" => $obj->expGroupField,
                        "exp_group_field_en" => $obj->expGroupField_EN,
                        "exp_main_field_id" => $obj->expMainFieldId,
                        "exp_main_field" => $obj->expMainField,
                        "exp_main_field_en" => $obj->expMainField_EN,
                        "exp_sub_field_id" => $obj->expSubFieldId,
                        "exp_sub_field" => $obj->expSubField,
                        "exp_sub_field_en" => $obj->expSubField_EN,
                        "exp_detail" => $obj->expDetail,
                        "is_research" => $obj->isResearch,
                        "is_service" => $obj->isService,
                        "is_award" => $obj->isAward,
                        "is_experience" => $obj->isExperience,
                        "is_interest" => $obj->isInterest
                    ];
                    UserExpertise::updateOrCreate($expertiseWhere, $expertiseData);
                }
            }
            return response()->json([
                'success' => true,
                'message' => "Successfully",
                'payload' =>  null
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Error!!',
                'payload' =>  null
            ], 201);
        }
    }

    public function fetchExpertiseExpMainFieldAll()
    {
        $research = DB::select("SELECT DISTINCT exp_main_field_id,exp_main_field FROM user_expertises");

        if ($research) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $research
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function fetchUserExpertiseById($id)
    {
        $results = UserExpertise::find($id);

        if ($results) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $results
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  null,
            ], 201);
        }
    }
}
