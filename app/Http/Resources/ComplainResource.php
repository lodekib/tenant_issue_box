<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ComplainResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'tenant' => $this->tenant,
            'tenant_house' =>$this->tenant_house,
            'complain' =>$this->complain,
            'isComplete' => $this->isComplete,
            'created_at' =>$this->created_at->format('d.m.Y')
        ];
    }
}
