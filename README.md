# software-developer-task

The software system being produced is called Movie Search. It's goal is to provide user with a movie search and rating engine, similar to the one on imdb.com, but much
simpler and more rudimentary.

## technologies
In this MERN stack application the **frontend** is developed in HTML5, CSS3 and React.js Material UI library. **backend** is created in Express and Node.js. I have used **Data** is stored in MongoDB Atlas or localy.

## description and features
This application will provide following functions and features. It will: 

- Provide user with toggle option between moves screen and tv show screen
- Display movies sorted by ranking
- Display TV shows sorted by ranking
- Allow user to search database with movie/TV show title
- Search automaticaly when input fields value length is greater than 2
- Search automaticaly when input fields value is cleared
- Allow control of amount of movies/tvShows displayed
- Provide abilty for user to grade a movie

## starting and using the application

#### backend

After cloning repository and opening it, in terminal type command `cd server` and add your own .env file with following variables: 
- **PORT** use 5000,  
- **MONGO_URI** if not provided local database will be used 
- After that run `npm install` to install all the dependencies. This application requires data to be seeded before initial run. For that you should type `npm run seed` command while still inside server folder. After completing all these steps run `npm start` script. 

That runs the server part of application in the development mode on http://localhost:5000.

#### frontend

After you are done with backend part of application in terminal type command `cd client` and run `npm install` script to install all the dependencies. After successfull instalataion run `npm start`. 

That runs the frontend part of application in the development mode.

Open http://localhost:3000 to view it in the browser. 




