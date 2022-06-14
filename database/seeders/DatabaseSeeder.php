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
        DB::table('Parameters')->truncate();
        $rows = [
            [
                'group_name' => "branch_group",
                'value' => "materials",
                'value_ref' => "สาขาวิชาวัสดุศาสตร์",
                'sort_order' => "1",
                'remark' => "rgba(255, 99, 132, 0.2)"
            ],
            [
                'group_name' => "branch_group",
                'value' => "biotechnology",
                'value_ref' => "สาขาวิชาเทคโนโลยีชีวภาพ",
                'sort_order' => "2",
                'remark' => "rgba(255, 99, 132, 0.2)"

            ],
            [
                'group_name' => "branch_group",
                'value' => "mathematics",
                'value_ref' => "สาขาวิชาคณิตศาสตร์",
                'sort_order' => "3",
                'remark' => "rgba(255, 99, 132, 0.2)"

            ],
            [
                'group_name' => "branch_group",
                'value' => "computer_science",
                'value_ref' => "สาขาวิชาวิทยาการคอมพิวเตอร์",
                'sort_order' => "4",
                'remark' => "rgba(255, 99, 132, 0.2)"

            ],
            [
                'group_name' => "branch_group",
                'value' => "physics",
                'value_ref' => "สาขาวิชาฟิสิกส์ประยุกต์",
                'sort_order' => "5",
                'remark' => "rgba(255, 99, 132, 0.2)"
            ],
            [
                'group_name' => "branch_group",
                'value' => "chemistry",
                'value_ref' => "สาขาวิชาเคมี",
                'sort_order' => "6",
                'remark' => "rgba(255, 99, 132, 0.2)"
            ],
            [
                'group_name' => "branch_group",
                'value' => "industrial_chemistry_and_textile_technology",
                'value_ref' => "สาขาวิชาเคมีอุตสาหกรรมและเทคโนโลยีสิ่งทอ",
                'sort_order' => "7",
                'remark' => ""
            ],
            [
                'group_name' => "branch_group",
                'value' => "statistics",
                'value_ref' => "สาขาวิชาสถิติ",
                'sort_order' => "8",
                'remark' => ""
            ],
            [
                'group_name' => "branch_group",
                'value' => "information_technology",
                'value_ref' => "สาขาวิชาเทคโนโลยีสารสนเทศ",
                'sort_order' => "9",
                'remark' => ""
            ],
            [
                'group_name' => "test",
                'value' => "information_technology",
                'value_ref' => "สาขาวิชาเทคโนโลยีสารสนเทศ",
                'sort_order' => "9",
                'remark' => ""
            ],
        ];

        foreach ($rows as $row) {
            Parameter::create($row);
        }
    }
}
