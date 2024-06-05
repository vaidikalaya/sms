<?php
namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $users=[
            [
                'fname'=>'Super','lname'=>'Admin','email'=>'superadmin@gmail.com'
            ]
        ];

        foreach($users as $user){
            
            $resId=DB::table('users')->insertGetId([
                'id' => rand(5,6),
                'firstname'=>$user['fname'],
                'lastname'=>$user['lname'],
                'email' => $user['email'],
                'phone'=>rand(10,12),
                'is_active'=>1,
                'created_by'=>1,
                'password' => Hash::make('pass123'),
            ]);

            if($resId){
                $resId=DB::table('model_has_roles')->insertGetId([
                    'role_id' => 1,
                    'model_type'=>'App\Models\User',
                    'model_id'=>$resId,
                ]);
            }
        }   
    }
}
