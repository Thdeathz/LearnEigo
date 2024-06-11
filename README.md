# LearnEigo - Learn 英語

> ### Library management project with feature such as Security, Authencation, Authorization, CRUD vocabulary, card, tag,... supporting procedures for searching and memoing vocabularies to pratice.
>### See more features and details about the source code in [LearnEigo](https://github.com/khanhspm/LearnEigo).
### In this project, i used Vue3, Antd Vue 4.2, PHP 8.3, Laravel 11, MySQL

----------

# Getting started

## Installation

Please check the official laravel installation guide for server requirements before you start [Laravel 11 Documentation](https://laravel.com/docs/11.x). Necessary settings before starting as PHP >= 8.3, NodeJS, Composer, Apache2.


1. Clone the repository

        git clone https://github.com/khanhspm/LearnEigo.git

2. Switch to the repo folder

        cd LearnEigo
        cd source

3. Install all the dependencies using composer and npm

        composer install
        npm install

4. Copy the example env file and make the required configuration changes in the .env file

        cp .env.example .env
> Edit your database configuration
5. Generate a new application key

        php artisan key:generate

6. Run the database migrations (**Set the database connection in .env before migrating**)

        php artisan migrate

7. Run database seeders
   
        php artisan db:seed
8. Complie view resources
   
        npm run build
9. Update view changes
		- Open 1st terminal and run 
   
        npm run dev     
10. Start the local development server
		- Open 2nd terminal and run
		
        php artisan serve

You can now access the server at http://localhost:8000

## Database seeding

**Populate the database with seed data with relationships which includes users, roles,  category,... This can help you to quickly start testing the api or couple a frontend and start using it with ready content.**

Run the database seeder and you're done

    php artisan db:seed

***Note*** : It's recommended to have a clean database before seeding. You can refresh your migrations at any point to clean the database by running the following command

    php artisan migrate:refresh
    
----------

<!-- ## About project
The project is part of the ITSS Japanese 2 class curriculum. -->

---------
## About me
### **Mac Van Khanh**
#### Hanoi University of Science and Technology - HEDSPI- K65
Mail : [khanh.mv204990@sis.hust.edu.vn](khanh.mv204990@sis.hust.edu.vn)
