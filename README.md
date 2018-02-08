# SGF Web Devs mobile app backed
This project contains the backend services and admin panels for the SGF Web devs mobile app.

The backed is built using the [laravel](https://laravel.com/) framework. The framework also serves the admin app, which is made using [angular](https://angular.io/)

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