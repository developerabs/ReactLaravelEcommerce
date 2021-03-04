<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactModel;

class ContactController extends Controller
{
    function SendContactDetails(Request $request){



        ContactModel::where(['cat1'=>'A']);
        ContactModel::where(['cat1'=>'A','cat2'=>'B']);
        ContactModel::where(['cat1'=>'A','cat2'=>'B','cat3'=>"C"]);



        $name=$request->input('name');
        $mobile=$request->input('mobile');
        $message=$request->input('message');
        $contact_time= date("h:i:sa");
        $contact_date= date("d-m-Y");

        $result= ContactModel::insert([
            'name'=>$name,
            'mobile'=>$mobile,
            'message'=>$message,
            'contact_date'=>$contact_date,
            'contact_time'=>$contact_time
        ]);

        return $result;
    }
}
