To Install after cloning the repo

1. laravel-veutify-sanctum> composer install
2. laravel-veutify-sanctum> npm install

3. laravel-veutify-sanctum> copy .env.example .env
4. edit file ".env"

    APP_URL=[http://localhost or YOUR_URL i.e. 'http://test.local]

    SESSION_DOMAIN=[localhost or YOUR_URL i.e. .test.local]

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=[YOUR_DB_NAME]
    DB_USERNAME=[YOUR_DB_USERNAME]
    DB_PASSWORD=[YOUR_DB_PASSWORD]

5. laravel-veutify-sanctum> php artisan key:generate
6. laravel-veutify-sanctum> php aritsan migrate:fresh
7. laravel-veutify-sanctum> npm run watch
