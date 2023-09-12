<?php

namespace Xguard\ClientPortal\Repositories;

use App\Models\Contract;
use App\Models\ContractFile;
use App\Models\ContractPurchaseOrder;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Xguard\ClientPortal\Http\Resources\ContractFilesInfoResource;
use Xguard\ClientPortal\Http\Resources\ContractInfoResource;
use Xguard\ClientPortal\Http\Resources\ContractPurchaseOrderInfoResource;

class ContractInformationRepositoryImpl implements ContractInformationRepository
{
    public function getContractInfo(int $contractId): array
    {
        $contract = Contract::find($contractId);
        return ContractInfoResource::make($contract);
    }

    public function getContractPurchaseOrderInfo(int $contractId): AnonymousResourceCollection
    {
        $contractPurchaseOrder = ContractPurchaseOrder::where(ContractPurchaseOrder::CONTRACT_ID, $contractId)->get();
        return ContractPurchaseOrderInfoResource::collection($contractPurchaseOrder);
    }

    public function getContractFilesInfo(int $contractId, string $contractFileType): AnonymousResourceCollection
    {
        $contractFile = ContractFile::where(ContractFile::CONTRACT_ID, $contractId)
            ->where(ContractFile::TYPE, $contractFileType)
            ->get();
        return ContractFilesInfoResource::collection($contractFile);
    }
}
