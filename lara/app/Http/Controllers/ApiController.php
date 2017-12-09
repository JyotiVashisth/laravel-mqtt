<?php

namespace App\Http\Controllers;
use App\Client_messages;
use DisplayController;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    
    public function index(Request $request, Client_messages $cm){
        
        $bodyContent = $request->getContent();
        //inserts message in the database.
   //   $cm->insert(['message'=>'hello']);  
        //return "message stored";
       // return $bodyContent;
        $cm->api($request,$cm);
        return gettype($bodyContent); 
    }
    
}
