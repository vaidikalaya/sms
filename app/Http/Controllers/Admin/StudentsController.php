<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\ResponseServices;
use Illuminate\Support\Facades\DB;
use App\Models\Student;

class StudentsController extends Controller
{
    public function index(Request $request,ResponseServices $response){
        $students=Student::paginate(10);
        return $students->count()>0
                ?$response->success('',$students)
                :$response->error('Data not found');
    }
}
