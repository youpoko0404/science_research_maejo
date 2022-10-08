<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPermissions extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        "user_id",
        "is_update",
        "is_create",
        "created_at",
        "updated_at"
    ];
}
