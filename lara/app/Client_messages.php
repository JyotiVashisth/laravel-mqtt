<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client_messages extends Model
{
    protected $table='messages';
    protected $fillable=[
        'id','message'
    ];
    protected $primaryKey = 'id';
    
    public function api($request,$cm)
    {   $bod=$request->getContent();
        $cm->insert(['message'=>$bod]);
    }
}
