<!DOCTYPE html>
<html>
<head>
    <title>Client Portal</title>
    <link href="{{ secure_asset(mix("tailwind.css", 'vendor/client-portal')) }}?v={{config('client_portal.version')}}" rel="stylesheet" type="text/css">
    <link href="{{ secure_asset(mix("custom.css", 'vendor/client-portal')) }}?v={{config('client_portal.version')}}" rel="stylesheet" type="text/css">
</head>
<body>
<div id="app"></div>
<script src="{{ secure_asset(mix('app.js', 'vendor/client-portal')) }}?v={{config('client_portal.version')}}"></script>
</body>
</html>


