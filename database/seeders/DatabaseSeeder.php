<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use App\Models\Parameter;

use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call('Database\Seeders\ParametersTableSeeder');
        $this->command->info('Parameters table seeded!');
    }
}

class ParametersTableSeeder extends Seeder
{
    public function run()
    {
        $rows = [
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "materials",
                'value_ref' => "สาขาวิชาวัสดุศาสตร์",
                'sort_order' => "1",
                'remark' => "#CC99CC"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "biotechnology",
                'value_ref' => "สาขาวิชาเทคโนโลยีชีวภาพ",
                'sort_order' => "2",
                'remark' => "#CC0000"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "mathematics",
                'value_ref' => "สาขาวิชาคณิตศาสตร์",
                'sort_order' => "3",
                'remark' => "#FF99CC"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "computer_science",
                'value_ref' => "สาขาวิชาวิทยาการคอมพิวเตอร์",
                'sort_order' => "4",
                'remark' => "#66CCFF"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "physics",
                'value_ref' => "สาขาวิชาฟิสิกส์ประยุกต์",
                'sort_order' => "5",
                'remark' => "#3366CC"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "chemistry",
                'value_ref' => "สาขาวิชาเคมี",
                'sort_order' => "6",
                'remark' => "#CCCCCC"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "industrial_chemistry_and_textile_technology",
                'value_ref' => "สาขาวิชาเคมีอุตสาหกรรมและเทคโนโลยีสิ่งทอ",
                'sort_order' => "7",
                'remark' => "#339966"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "statistics",
                'value_ref' => "สาขาวิชาสถิติ",
                'sort_order' => "8",
                'remark' => "#FFCC66"
            ],
            [
                'group_name' => "bachelor_degree_branch_group",
                'value' => "information_technology",
                'value_ref' => "สาขาวิชาเทคโนโลยีสารสนเทศ",
                'sort_order' => "9",
                'remark' => "#66CC66"
            ],
            [
                'group_name' => "master_degree_branch_group",
                'value' => "applied_chemistry",
                'value_ref' => "สาขาวิชาเคมีประยุกต์",
                'sort_order' => "1",
                'remark' => "#FF9966"
            ],
            [
                'group_name' => "master_degree_branch_group",
                'value' => "department_of_science",
                'value_ref' => "สาขาวิชาวิทยาศาสตร์และเทคโนโลยีนาโน",
                'sort_order' => "2",
                'remark' => "#FF9999"
            ],
            [
                'group_name' => "master_degree_branch_group",
                'value' => "biotechnology",
                'value_ref' => "สาขาวิชาเทคโนโลยีชีวะภาพ",
                'sort_order' => "3",
                'remark' => "#99CC66"
            ],
            [
                'group_name' => "master_degree_branch_group",
                'value' => "department_of_environmental",
                'value_ref' => "สาขาวิชาเทคโนโลยีสิ่งแวดล้อม",
                'sort_order' => "4",
                'remark' => "#669966"
            ],
            [
                'group_name' => "master_degree_branch_group",
                'value' => "department_of_genetics",
                'value_ref' => "สาขาวิชาพันธุศาสตร์",
                'sort_order' => "5",
                'remark' => "#336699"
            ],
            [
                'group_name' => "master_degree_branch_group",
                'value' => "digital_technology",
                'value_ref' => "สาขาวิชานวัตกรรมเทคโนโลยีดิจิตอล",
                'sort_order' => "6",
                'remark' => "#3399CC"
            ],
            [
                'group_name' => "doctor_degree_branch_group",
                'value' => "biotechnology",
                'value_ref' => "สาขาวิชาเทคโนโลยีชีวภาพ",
                'sort_order' => "1",
                'remark' => "#669900"
            ],
            [
                'group_name' => "doctor_degree_branch_group",
                'value' => "department_of_genetics",
                'value_ref' => "สาขาวิชาพันธุศาสตร์",
                'sort_order' => "2",
                'remark' => "#006699"
            ],
            [
                'group_name' => "doctor_degree_branch_group",
                'value' => "applied_chemistry",
                'value_ref' => "สาขาวิชาเคมีประยุกต์",
                'sort_order' => "3",
                'remark' => "#FF9900"
            ],

        ];

        // branch_group
        foreach ($rows as $row) {
            Parameter::create($row);
        }
    }
}
