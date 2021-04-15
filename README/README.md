# Show & Tell

![Show & Tell Home Page](homePage.png)

## Project Overview

Tired of finishing an AMAZING tv show and having no one to talk about it with because your friends haven't watched it yet? Show & Tell is a global community of TV fans, a place where you can create a personalized feed of your favorite content, show some love for your favorite shows, posts, and fellow users with a "like", and write and share reviews. Inspired by Reddit and the desire to have conversations about our favorite shows.

Visit the live site: [Show & Tell](http://showntell.uc.r.appspot.com/)

## How to Interact w/ Show & Tell

- The first page you see will require you to login with a google account.
- In the search bar located in the upper right, search your favorite show and when the results populate, click a show to subscribe to it.
- The star in the nav bar will give you a list of your subscriptions.
- Now create your first post. Hit the pencil in the nav bar, choose one of the shows you are subscribed to, and write whatever your heart desires. Press "Submit Post" and your post will be live for all to see.
- The bell icon will allow you to input your cell number and receive notifications.
- The envelope gives you the ability to send direct messages to other users.

## Tech Stack - MERN

1. MongoDB/Mongoose (/5.10.15)
2. Express Server (4.17.1)
3. React (17.0.1)
4. NodeJS (8.17.0)
5. Passport/Google OAuth (0.4.1 / 2.0.0)

## APIs

1. Twilio ( 3.52.0 - [Twilio API Docs](https://www.twilio.com/docs/api) )
2. TV Maze ([TV Maze API Docs](https://www.tvmaze.com/api))

## Project Setup

This section will discuss what is needed to get the project up and running on your local machine.

### What to Add to Your .env

1. Head over to [Twilio](https://www.twilio.com/console), set up a free account, and you will be provided with two important things, an ACCOUNT SID and an AUTH TOKEN. **_Twilio's free account will require users to go through verification._**
2. In the Google Developers Console, generate a CLIENT ID and CLIENT SECRET.
3. Lastly, visit [MongoDBs Cloud Atlas](https://www.mongodb.com/cloud/atlas), create a free account, and auto-generate a secure password.

### Scripts to Run

```
npm install - to install all dependencies
```

```
npm run build - runs webpack and creates your build
```

```
npm start - starts up the server
```

## How to Contribute

[Contribute to Show & Tell](/CONTRIBUTING.md)

## Where to Find...

- **Components Entry Point** - client/src/index.jsx
- **Components** - You will find all component files located at client/src/components, where each component can be found in it's corresponding directory.
- **Database** - database schema and connection files can be found at server/db
- **Server** - all routes will be found at server/index.js

## Schema Design

![Schema Design](Schema.png)
