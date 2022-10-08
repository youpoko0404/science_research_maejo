<?php

namespace App\Http\Controllers;

use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserPermissionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetchUserPermissionByUserId()
    {
        $permission = UserPermissions::where('user_id', auth()->user()->id)->first();

        if ($permission) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $permission
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function fetchUserPermission()
    {
        $cards = DB::select("SELECT 
                                u.id,
                                u.first_name,
                                u.last_name,
                                IFNULL(up.is_create,0) as is_create,
	                            IFNULL(up.is_update,0) as is_update
                                FROM users u 
                            LEFT JOIN user_permissions up ON u.id = up.user_id 
                            WHERE u.`role` != 'admin '
                            ");

        if ($cards) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $cards
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function updateUserPermission(Request $request)
    {
        $requestWhere = [
            'user_id' => $request->id,
        ];

        $requestData = [
            'is_create' => $request->is_create,
            'is_update' => $request->is_update,
        ];

        $request = UserPermissions::updateOrCreate($requestWhere, $requestData);

        if ($request) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $request
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }
}
