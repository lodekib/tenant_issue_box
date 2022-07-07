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

    public function store(Request $request){
        echo 'Complainants';
            $tempattr =  $request->merge([
            'tenant' => auth()->user()->name,
            'tenant_house' => auth()->user()->house_number,
        ]);
        $attr = $tempattr->toArray();
        Complain::create($attr);
        return back()->with([
            'type' =>'success',
            'message' =>'Complain posted successfully'
        ]);
    }

    public function update(Request $request,Complain $complain){
        dd($request->all());
        // Complain::find($id)->update([
        //     'isComplete'=> 1
        // ]);
        $complain->update([
            'isComplete' => 1
        ]);
        return back()->with([
            'type'=>'success',
            'message' =>'Marked complete'
        ]);
    }

    public function destroy(Complain $complain){
        $complain->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'Complain deleted'
        ]);
    }
}
