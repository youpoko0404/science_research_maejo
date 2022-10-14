<?php

namespace App\Http\Controllers;

use App\Models\UserPermissions;
use Illuminate\Http\Request;
use App\Models\User;
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

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $permission
        ], 200);
    }

    public function fetchUserPermission()
    {
        $cards = User::select(
            "users.id",
            "users.first_name",
            "users.last_name",
            "user_permissions.is_create",
            "user_permissions.is_update",
        )
            ->leftJoin("user_permissions", "user_permissions.user_id", "=", "users.id")
            ->where('users.role', '!=', "admin")
            ->get();

        foreach ($cards as $card) {
            $card["name"] = $card["first_name"] . " " . $card["last_name"];
            $card["is_create"] = $card["is_create"] == null ? 0 : 1;
            $card["is_update"] = $card["is_update"] == null ? 0 : 1;
        }

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
