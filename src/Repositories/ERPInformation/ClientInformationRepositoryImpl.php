<?php

namespace Xguard\ClientPortal\Repositories;

use App\Models\Client;
use Xguard\ClientPortal\Http\Resources\ClientInfoResource;

class ClientInformationRepositoryImpl implements ClientInformationRepository
{
    public function getClientInfo(int $clientId): array
    {
        $client = Client::find($clientId);
        return ClientInfoResource::make($client);
    }
}
