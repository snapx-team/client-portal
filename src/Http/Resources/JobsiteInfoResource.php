<?php

namespace Xguard\ClientPortal\Http\Resources;

use App\Models\JobSite;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Xguard\ClientPortal\Repositories\JobsiteInformationRepository;

/**
 * JobsiteInfoResource
 *
 * @package Xguard\ClientPortal\Http\Resources
 *
 * This class represents a Laravel resource for ClientPortal.
 */
class JobsiteInfoResource extends JsonResource
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
            JobSite::ADDRESS => $this->address,
            JobSite::JOB_SITE_IMAGE_PATH => $this->job_site_image_path,
            JobSite::PROTOCOLS => $this->protocols,
            JobSite::ON_SITE_CLIENT_INFO_CONTACT_NAME => $this->on_site_client_info_contact_name,
            JobSite::ON_SITE_CLIENT_INFO_PHONE_NUMBER => $this->on_site_client_info_phone_number,
            JobSite::ON_SITE_CLIENT_INFO_POSITION => $this->on_site_client_info_position,
            JobSite::ON_SITE_CLIENT_INFO_EMAIL => $this->on_site_client_info_email,
            JobSite::BSP_REQUIRED => $this->bsp_required,
            JobSite::ASP_REQUIRED => $this->asp_required,
            JobSite::AQTR_REQUIRED => $this->aqtr_required,
            JobSite::RCR_REQUIRED => $this->rcr_required,
            JobSite::ERAILSAFE_REQUIRED => $this->erailsafe_required,
            JobSite::SUBADDRESSES_RELATION_NAME => app(JobsiteInformationRepository::class)->getJobsiteSubaddressInfo($this->id)
        ];
    }
}
