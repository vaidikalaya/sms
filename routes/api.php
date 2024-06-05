<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\{StudentsController};

Route::middleware('auth:sanctum')->group(function(){

    Route::controller(StudentsController::class)->group(function(){
        Route::get('students','index');
    });

});