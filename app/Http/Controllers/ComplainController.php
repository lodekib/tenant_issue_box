<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComplainResource;
use App\Models\Complain;
use Illuminate\Http\Request;

class ComplainController extends Controller
{
    public function index(){
        $complains = ComplainResource::collection(Complain::latest()->paginate(10));
        return inertia('Complains/ComplainIndex',[
            'complains' => $complains
            ]
    );
    }
}
