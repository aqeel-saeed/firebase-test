# Laravel-Firebase Messaging Demo

This is a simple Laravel project that demonstrates how to use Firebase Messaging with Laravel.
The project includes a basic authentication system using Laravel UI,
and allows users to send and receive messages using Firebase Cloud Messaging.

## Requirements

To run this project, you will need to have the following software installed on your system:
- PHP 8.0 or higher
- Composer
- MySQL or MariaDB
- laravel 9.5.2
- Node.js & npm
- Firebase Account & project credentials (see Firebase Setup)

## Installation

1. Clone the repository to your local machine:
```
git clone https://github.com/aqeel-saeed/firebase-test.git
```

2. Install the dependencies:
```
cd firebase-test
composer install
npm install
```

3. Create a copy of the .env.example file and rename it to .env.

4. Generate a new application key:
```
php artisan key:generate
```

5. Create a new database named 'firebaseTestProject_db' in MySQL or MariaDB, and link the project with the db.

6. Run the database migrations and seed the database with sample data:
```
php artisan migrate 
```

5. Run this command to build views:
```
npm run build 
```

6. Start the development server:
```
php artisan serve
```

The application should now be running at http://localhost:8000 .

## Firebase Setup

To use Firebase with this project, you will need to create a Firebase project and obtain the project credentials.
Here's how:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In the project settings, add a 'Web App', copy your firebaseConfig setting you have got, like this:
```
var firebaseConfig = {
  apiKey: "AIaaaaaadNzzzzziiiiiilI_0jbQMqha3YVuM",
  authDomain: "testing-88888.firebaseapp.com",
  projectId: "testing-88888",
  storageBucket: "testing-8888.appspot.com",
  messagingSenderId: "333344445555",
  appId: "1:333344445555:web:f96b612de850ad3715eacc",
  measurementId: "G-RD8888888"
}
```
3. Replace them with the current config setting in the `/resources/layouts/app.blade.php` & `public/firebase-messaging-sw.js`.
4. Enable Firebase Cloud Messaging (FCM) in your Firebase project.
5. Copy the Server Key you have got after enable (FCM) to the file `config/larafirebase.php`.

## Usage

- Register a new user by clicking the "Register" link in the top right corner of the page.
- Log in with an existing user by clicking the "Login" link.
- Send a message to the server by filling out the "Send Message" form and clicking the "Send" button. The message will be sent to the server using Firebase Cloud Messaging.
- After sending a message you will receive it as an alert in the web page.

