<?php

namespace Xguard\ClientPortal\Http\Resources;

use App\Models\JobSiteSubaddress;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * JobsiteSubaddressesInfoResource
 *
 * @package Xguard\ClientPortal\Http\Resources
 *
 * This class represents a Laravel resource for ClientPortal.
 */
class JobsiteSubaddressesInfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            JobSiteSubaddress::ADDRESS => $this->address,
        ];
    }
}
