const mix = require('laravel-mix');
const path = require('path');

mix.setPublicPath('public');

mix.ts('src/resources/js/app.tsx', 'public').react()
    .sass('src/resources/sass/custom.scss', 'public')
    .postCss('src/resources/css/tailwind.css', 'public', [
        require('tailwindcss'),
    ])    .webpackConfig({

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css']
        },
    })
    .then(() => {
        const command = 'php artisan vendor:publish --provider="Xguard\\ClientPortal\\ClientPortalServiceProvider" --force';
        const parentDir = path.resolve(__dirname, '../..');

        const {exec} = require('child_process');
        exec(command, {cwd: parentDir}, (error, stdout) => {
            if (error) {
                console.error(`Error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    })
    .browserSync({
        proxy: 'http://xguard-schedule.test/partners/', // Change this to your project's local URL
        files: [
            'public/**/*', // Watch all files in the 'public' directory
            'resources/views/**/*.php', // Watch PHP views for changes
        ],
    });
