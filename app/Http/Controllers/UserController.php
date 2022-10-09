<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\UserExpertise;
use GuzzleHttp\Client;

class UserController extends Controller
{
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
                        'citizenId' => $obj->citizenId
                    ];
                    $expertiseData = [
                        'citizenId' => $obj->citizenId,
                        "titlePositionShort" => $obj->titlePositionShort,
                        "firstName" => $obj->firstName,
                        "lastName" => $obj->lastName,
                        "sectionId" => $obj->sectionId,
                        "section" => $obj->section,
                        "divisionId" => $obj->divisionId,
                        "division" => $obj->division,
                        "facultyId" => $obj->facultyId,
                        "faculty" => $obj->faculty,
                        "personExpId" => $obj->personExpId,
                        "expTypeId" => $obj->expTypeId,
                        "expType" => $obj->expType,
                        "expAcadPosition" => $obj->expAcadPosition,
                        "expGroupFieldId" => $obj->expGroupFieldId,
                        "expGroupField" => $obj->expGroupField,
                        "expGroupField_EN" => $obj->expGroupField_EN,
                        "expMainFieldId" => $obj->expMainFieldId,
                        "expMainField" => $obj->expMainField,
                        "expMainField_EN" => $obj->expMainField_EN,
                        "expSubFieldId" => $obj->expSubFieldId,
                        "expSubField" => $obj->expSubField,
                        "expSubField_EN" => $obj->expSubField_EN,
                        "expDetail" => $obj->expDetail,
                        "isResearch" => $obj->isResearch,
                        "isService" => $obj->isService,
                        "isAward" => $obj->isAward,
                        "isExperience" => $obj->isExperience,
                        "isInterest" => $obj->isInterest
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
}
