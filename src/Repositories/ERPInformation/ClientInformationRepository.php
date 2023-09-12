<?php

namespace Xguard\ClientPortal\Repositories;

interface ClientInformationRepository
{
    public function getClientInfo(int $clientId): array;
}
