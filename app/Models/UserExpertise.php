<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserExpertise extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'type',
        "is_deleted",
        "created_at",
        "updated_at",

    ];
}
