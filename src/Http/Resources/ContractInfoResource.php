<?php


namespace Xguard\ClientPortal\Http\Resources;

use App\Enums\ContractFileTypes;
use App\Models\Contract;
use App\Models\ContractPurchaseOrder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Xguard\ClientPortal\Repositories\ContractInformationRepository;

/**
 * ContractInfoResource
 *
 * @package Xguard\ClientPortal\Http\Resources
 *
 * This class represents a Laravel resource for ClientPortal.
 */
class ContractInfoResource extends JsonResource
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
            Contract::BILLING_CONTRACT_START_DATE => $this->billing_contract_start_date,
            Contract::BILLING_CONTRACT_END_DATE => $this->billing_contract_end_date,
            Contract::END_DATE_ESTIMATE => $this->end_date_estimate,
            ContractPurchaseOrder::TABLE_NAME => app(ContractInformationRepository::class)->getContractPurchaseOrderInfo($this->id),
            ContractFileTypes::OPERATING_GUIDE => app(ContractInformationRepository::class)->getContractFilesInfo($this->id, ContractFileTypes::OPERATING_GUIDE),
            ContractFileTypes::CLIENT_CONTRACT => app(ContractInformationRepository::class)->getContractFilesInfo($this->id, ContractFileTypes::CLIENT_CONTRACT),
        ];
    }
}
