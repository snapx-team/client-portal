/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '.src/resources/**/*.blade.php',
        '.src/resources/**/*.js',
        '.src/resources/**/*.ts',
        'src/resources/**/*.tsx',
        '.src/resources/**/*.jsx',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
