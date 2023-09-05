# Client Portal Plugin

A plugin for clients to access gated content and private information that is associated with them

<br>

## Installation with composer

Use the following commands to install

```bash
composer require xguard/client-portal
php artisan migrate
php artisan vendor:publish --provider="Xguard\ClientPortal\ClientPortalServiceProvider" --force
```

You can now go to the **/client-portal** path to use the package.

<br>

## Development 

**Follow these steps to make modifications to the package**

**1:** Firstly, clone the client portal repo inside your packages folder at root level. 
Create a "packages" folder if you don't have one.


**2:** Then, add line of code in the psr-4 of your root composer.json
```
"psr-4": {
    //...
    "Xguard\\ClientPortal\\": "packages/client-portal/src/"
},
```
**3:** Add the client portal plugin service provider to the config/app.php

```php
return [
    //...
    "providers" => [
        //...
        Xguard\ClientPortal\ClientPortalServiceProvider::class,
    ]
];

```

**4:** run this command   
```bash
composer dump-autoload 
```
* (use **--ignore-platform-reqs** if your system doesn't have some required extension or a different PHP version)

**5:** Navigate to the client portal package folder in your command line and perform the following commands:
```bash
composer install
npm install
npm run dev
```

**6:** Return to the root folder in the command line and publish the package with the following command:
```bash
php artisan vendor:publish --provider="Xguard\ClientPortal\ClientPortalServiceProvider" --force
```

**7:** To run package migrations
```bash
php artisan migrate --path=package/client-portal/src/database/migrations
```

**8:** To run seeder for testing
```bash
php artisan db:seed --class="Xguard\ClientPortal\database\seeds\SeederName"
```
<br>
