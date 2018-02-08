# SGF Web Devs mobile app backed
This project contains the backend services and admin panels for the SGF Web devs mobile app.

The backed is built using the [Laravel](https://laravel.com/) framework. The framework also serves the admin app, which is made using [Angular](https://angular.io/)

## Requirements
- [Node](https://nodejs.org/en/) >= 4.x.x
- npm >= 3.x.x
- PHP >= 7.1.3
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)

## Setup
Install laravel dependencies
```shell
composer install
```

Install Angular dependencies
```shell
npm install
```
or
```shell
yarn
```

Copy contents of `.env.example` to `.env`

Create new MySQL database and add credentials to `.env` file

run `php artisan key:generate`

## Running
```shell
php artisan serve
```
```shell
npm start
```

## Development notes
Most of the app is a standard Laravel project. The only non standard (because there isn't a standard) is the Angular admin app. The root `package.json` file and `.angular-cli.json` are for the Angular project and their placement in the root directory allows us to run Angular commands without having to be in the Angular project folder. The rest of the Angular project is contained within `resources/assets/angular` and when the app is built, the output is copied to `public/dist`. 

For the Laravel app to serve the Angular app, there is a catch all route in `routes/web.php` that returns `public/dist/index.html`. We still have the ability to use normal Laravel blade views. We just have to declare their routes before the catch all route.