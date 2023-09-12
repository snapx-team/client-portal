<?php

namespace Xguard\ClientPortal\Http\Resources;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * ClientInfoResource
 *
 * @package Xguard\ClientPortal\Http\Resources
 *
 * This class represents a Laravel resource for ClientPortal.
 */
class ClientInfoResource extends JsonResource
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
            Client::CLIENT_INFO_COMPANY_NAME => $this->client_info_company_name,
            Client::CLIENT_INFO_CONTACT_NAME => $this->client_info_contact_name,
            Client::CLIENT_INFO_POSITION => $this->client_info_position,
            Client::CLIENT_INFO_PHONE_NUMBER => $this->client_info_phone_number,
            Client::CLIENT_INFO_EMAIL => $this->client_info_email,
            Client::BILLING_CONTACT_INFORMATION => $this->billing_contact_information,
            Client::CLIENT_INFO_ADDRESS => $this->client_info_address,
            Client::BILLING_CONTACT_POSITION => $this->billing_contact_position,
            Client::BILLING_CONTACT_NUMBER => $this->billing_contact_number,
            Client::BILLING_CONTACT_EMAIL => $this->billing_contact_email,
        ];
    }
}
