<?php

namespace Xguard\ClientPortal\Repositories;

use App\Models\JobSite;
use App\Models\JobSiteSubaddress;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Xguard\ClientPortal\Http\Resources\JobsiteInfoResource;
use Xguard\ClientPortal\Http\Resources\JobsiteSubaddressesInfoResource;

class JobsiteInformationRepositoryImpl implements JobsiteInformationRepository
{
    public function getJobsiteInfo(int $jobsiteId): array
    {
        $jobsite = JobSite::find($jobsiteId);
        return JobsiteInfoResource::make($jobsite);
    }

    public function getJobsiteSubaddressInfo(int $jobsiteId): AnonymousResourceCollection
    {
        $jobsiteSubaddresses = JobSiteSubaddress::where(JobSiteSubaddress::JOB_SITE_ID, $jobsiteId)->get();
        return JobsiteSubaddressesInfoResource::collection($jobsiteSubaddresses);
    }
}
