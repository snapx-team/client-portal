<?php

namespace Xguard\ClientPortal\Repositories;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface ContractInformationRepository
{
    public function getContractInfo(int $contractId): array;

    public function getContractPurchaseOrderInfo(int $contractId): AnonymousResourceCollection;

    public function getContractFilesInfo(int $contractId, string $contractFileType): AnonymousResourceCollection;
}
