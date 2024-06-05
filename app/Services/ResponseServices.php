<?php
namespace App\Services;
use Carbon\Carbon;

class ResponseServices
{
    public function success($message,$data=[]){
        return response()->json([
            'status' => 'success',
            'code'=>200,
            'message'=>$message,
            'data'=>$data
        ],200);   
    }

    public function not_found($message,$data=[]){
        return response()->json([
            'status' => '',
            'code'=>404,
            'message'=>$message,
            'data'=>$data
        ],404);   
    }

    public function error($message,$data=[]){
        return response()->json([
            'status' => 'error',
            'code'=>400,
            'message'=>$message,
            'data'=>$data
        ],200); 
    }

    public function server_error($message,$data=[]){
        return response()->json([
            'status' => 'error',
            'code'=>500,
            'message'=>$message,
            'data'=>$data
        ],500); 
    }

    public function errorParse($errors){
        $allErrors=json_decode(json_encode($errors));
        $error=[];
        foreach($allErrors as $key=>$value){
            $error[$key]=$value[0];
        }
        return $error;
    }
}