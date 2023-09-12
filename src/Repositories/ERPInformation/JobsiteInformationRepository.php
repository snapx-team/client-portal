<?php

namespace Xguard\ClientPortal\Repositories;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface JobsiteInformationRepository
{
    public function getJobsiteInfo(int $jobsiteId): array;

    public function getJobsiteSubaddressInfo(int $jobsiteId): AnonymousResourceCollection;
}
