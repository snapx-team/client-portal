<?php

namespace Xguard\ClientPortal\Http\Resources;

use App\Models\ContractFile;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * ContractFilesInfoResource
 *
 * @package Xguard\ClientPortal\Http\Resources
 *
 * This class represents a Laravel resource for ClientPortal.
 */
class ContractFilesInfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            ContractFile::CONTRACT_URL => $this->contract_url,
        ];
    }
}
