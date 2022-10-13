<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserExpertise extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        "citizen_id",
        "title_position_short",
        "first_name",
        "last_name",
        "section_id",
        "section",
        "division_id",
        "division",
        "faculty_id",
        "faculty",
        "person_exp_id",
        "exp_type_id",
        "exp_type",
        "exp_acad_position",
        "exp_group_field_id",
        "exp_group_field",
        "exp_group_field_en",
        "exp_main_field_id",
        "exp_main_field",
        "exp_main_field_en",
        "exp_sub_field_id",
        "exp_sub_field",
        "exp_sub_field_en",
        "exp_detail",
        "is_research",
        "is_service",
        "is_award",
        "is_experience",
        "is_interest",
        "created_at",
        "updated_at"
    ];
}
