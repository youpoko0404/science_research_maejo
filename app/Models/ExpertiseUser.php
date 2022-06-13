<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpertiseUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'group',
        'value',
        "created_at",
        "updated_at"
    ];
}
