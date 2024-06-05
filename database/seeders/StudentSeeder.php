<?php
namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        $students=[
            ['id' => '124001','reg_number' => '123455','first_name' => 'Prabhakar','middle_name' => NULL,'last_name' => 'Mishra','gender' => 'male','dob' => '2000-09-03','aadhaar_number' => '773655003534','email' => 'prabhakar@gmail.com','phone' => '9115486817','photo' => NULL,'admission_date' => '2024-03-09','father' => 'Ram','mother' => 'Sita','father_phone' => '9536869848','mother_phone' => NULL,'is_active' => '1','password' => Hash::make('pass123'),'created_by' => '1'],
            ['id' => '124002','reg_number' => '127451','first_name' => 'Viraj','middle_name' => NULL,'last_name' => 'Mishra','gender' => 'male','dob' => '1997-09-03','aadhaar_number' => '763655006734','email' => 'viraj@gmail.com','phone' => '8565254758','photo' => NULL,'admission_date' => '2024-03-10','father' => 'Ram','mother' => 'Sita','father_phone' => '9536869848','mother_phone' => NULL,'is_active' => '1','password' => Hash::make('pass123'),'created_by' => '1'],
            ['id' => '124003','reg_number' => '127251','first_name' => 'Arun','middle_name' => NULL,'last_name' => 'Patel','gender' => 'male','dob' => '1998-09-03','aadhaar_number' => '673655008534','email' => 'arun@gmail.com','phone' => '6895362541','photo' => NULL,'admission_date' => '2024-04-09','father' => 'Ram','mother' => 'Sita','father_phone' => '9536869848','mother_phone' => NULL,'is_active' => '1','password' => Hash::make('pass123'),'created_by' => '1'],
            ['id' => '124004','reg_number' => '137451','first_name' => 'Wahid','middle_name' => NULL,'last_name' => 'Khan','gender' => 'male','dob' => '1996-09-03','aadhaar_number' => '987455008534','email' => 'wahid@gmail.com','phone' => '7585652548','photo' => NULL,'admission_date' => '2024-05-01','father' => 'Ram','mother' => 'Sita','father_phone' => '9536869848','mother_phone' => NULL,'is_active' => '1','password' => Hash::make('pass123'),'created_by' => '1'],
            ['id' => '124005','reg_number' => '177451','first_name' => 'Abhishek','middle_name' => NULL,'last_name' => 'jailwal','gender' => 'male','dob' => '1997-09-03','aadhaar_number' => '567655008534','email' => 'abhishek@gmail.com','phone' => '2565254785','photo' => NULL,'admission_date' => '2024-02-02','father' => 'Ram','mother' => 'Sita','father_phone' => '9536869848','mother_phone' => NULL,'is_active' => '1','password' => Hash::make('pass123'),'created_by' => '1'],
            ['id' => '124006','reg_number' => '128451','first_name' => 'Shivam','middle_name' => NULL,'last_name' => 'Rathour','gender' => 'male','dob' => '1998-09-03','aadhaar_number' => '653655008534','email' => 'shivam@gmail.com','phone' => '7458652547','photo' => NULL,'admission_date' => '2024-01-01','father' => 'Ram','mother' => 'Sita','father_phone' => '9536869848','mother_phone' => NULL,'is_active' => '1','password' => Hash::make('pass123'),'created_by' => '1'],
            ['id' => '124007','reg_number' => '117451','first_name' => 'Atul','middle_name' => NULL,'last_name' => 'Gupta','gender' => 'male','dob' => '2000-09-03','aadhaar_number' => '478655008534','email' => 'atul@gmail.com','phone' => '7458213658','photo' => NULL,'admission_date' => '2024-01-10','father' => 'Ram','mother' => 'Sita','father_phone' => '9536869848','mother_phone' => NULL,'is_active' => '1','password' => Hash::make('pass123'),'created_by' => '1'],
        ];
      

        foreach($students as $student){
            $resId=DB::table('students')->insertGetId($student);
        }   
    }
}
