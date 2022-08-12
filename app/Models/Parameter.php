<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parameter extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'group_name',
        'value',
        'value_ref',
        'remark',
        'sort_order',
        'is_deleted',
        "created_at",
        "updated_at"
    ];
}
