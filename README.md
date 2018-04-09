# SGF Web Devs mobile app backed
This project contains the backend services and admin panels for the SGF Web devs mobile app.

The backed is built using the [Laravel](https://laravel.com/) framework. The framework also serves the admin app, which is made using [Angular](https://angular.io/).

## Requirements
- [Node](https://nodejs.org/en/) >= 4.x.x
- npm >= 3.x.x
- PHP >= 7.1.3
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/)

## Setup

### Download Source Code

Let's get a copy of the project code!

#### Fork the Project Repository

Login to [GitHub](https://github.com/) with your own account, then browse to the repo ([Web Devs App Backend](https://github.com/sgf-web-devs/web-devs-app-backend)) and click the "Fork" button. This will copy the entire project to your account.

#### Clone your Fork of the Project Repository

This will download your fork of the repository to a sub-folder named "web-devs-app-backend" on your computer. Be sure to replace "<your-github-username" with your GitHub username.

```shell
git clone git@github.com:<your-github-username>/web-devs-app-backend.git web-devs-app-backend
```

#### Create a Branch

This will create a new branch based on the "master" branch (e.g. feat/2-endpoint-check-in). Any of your code changes will be contained in this branch.

```shell
git checkout -b feat/<feature-name-here>
```

### Development Environment

Let's get the project working on your machine. You will run all of these commands inside the project folder.

#### Install Composer

Verify you have composer installed on your computer.

```shell
composer --version
```

If the command above returns an error, you can install composer locally to your project directory.

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

#### Install Laravel dependencies
```shell
php composer.phar install
```

#### Install Angular dependencies
```shell
npm install
```
or
```shell
yarn
```

#### Configure Laravel

1. Copy contents of `.env.example` to `.env`
1. Generate new application key (used for database encryption, etc)
   ```shell
   php artisan key:generate
   ```
1. Create new MySQL database (e.g. install MySQL locally, spin up new AWS RDS, etc)
1. Add MySQL credentials to `.env` file
1. Run Laravel migrations to create MySQL tables
   ```shell
   php artisan migrate
   ```
1. Run Laravel seeds to populate sample MySQL data
   ```shell
   php artisan db:seed
   ```

## Run Local Web Server

This will run backend Laravel app on [localhost:8000](http://localhost:8000). You will NOT need to access this port directly.
```shell
php artisan serve
```

This will run backend web interface via node/webpack on [localhost:4200](http://localhost:4200). You will browse to this port while developing and testing the web interface and API.
```shell
npm start
```

## Development Workflow

Find an [open issue](https://github.com/sgf-web-devs/web-devs-app-backend/issues) and get to work! :) Comment in the issue to let people know you're working on it.

You will begin making changes to your local feature branch. Run ```git status``` to verify you are working in your feature branch. You should see a message that says ```On Branch <branch-name>``` If you need to switch to your branch, run ```git checkout <branch-name>```.

Commit changes to your local feature branch.

```shell
git status
git commit -a
```

Push changes to your Fork on GitHub

```shell
git push
```

Browse to your branch on GitHub, make sure your commit(s) were pushed to GitHub, 
then click "Compare and Pull Request", type a Title and Description, then click "Create pull request".

## Notes
Most of the app is a standard Laravel project. The only non standard (because there isn't a standard) is the Angular admin app. The root `package.json` file and `.angular-cli.json` are for the Angular project and their placement in the root directory allows us to run Angular commands without having to be in the Angular project folder. The rest of the Angular project is contained within `resources/assets/angular` and when the app is built, the output is copied to `public/dist`. 

For the Laravel app to serve the Angular app, there is a catch all route in `routes/web.php` that returns `public/dist/index.html`. We still have the ability to use normal Laravel blade views. We just have to declare their routes before the catch all route.