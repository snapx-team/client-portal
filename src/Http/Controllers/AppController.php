<?php

namespace Xguard\ClientPortal\Http\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use Xguard\PhoneScheduler\Models\CallLog;
use Xguard\PhoneScheduler\Models\Employee;
use Xguard\PhoneScheduler\Models\PhoneLine;
use Xguard\PhoneScheduler\Models\Row;

class AppController extends Controller
{
    public function getIndex()
    {

        return view('Xguard\ClientPortal::index');
    }

}
