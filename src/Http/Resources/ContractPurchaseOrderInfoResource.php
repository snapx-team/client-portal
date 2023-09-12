<?php

namespace Xguard\ClientPortal\Http\Resources;

use App\Models\ContractPurchaseOrder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * ContractPurchaseOrderInfoResource
 *
 * @package Xguard\ClientPortal\Http\Resources
 *
 * This class represents a Laravel resource for ClientPortal.
 */
class ContractPurchaseOrderInfoResource extends JsonResource
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
            ContractPurchaseOrder::PURCHASE_ORDER => $this->purchase_order,
        ];
    }
}
