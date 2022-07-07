<?php

namespace App\Http\Controllers;

use App\Http\Resources\ComplainResource;
use Illuminate\Http\Request;
use App\Models\Complain;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $complains = ComplainResource::collection(Complain::latest()->where('isComplete',0)->paginate(10));
        return inertia('Dashboard',[
            'complains' => $complains
        ]);
    }
}
