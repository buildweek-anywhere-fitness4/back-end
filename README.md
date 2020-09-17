# Back-end

This is the repository for the back-end team of AnywhereFitness4

# Base URL for deployed API

https://anywhere-fitness4.herokuapp.com/

# Endpoints

| Request | URL                           | Description                                         |
| ------- | ----------------------------- | --------------------------------------------------- |
| POST    | /api/auth/client_register     | creates a new user with username and password       |
| POST    | /api/auth/client_login        | login valid user with username and password         |
| POST    | /api/auth/instructor_register | creates a new instructor with username and password |
| POST    | /api/auth/instructor_login    | login valid instructor with username and password   |
| POST    | /api/class/:id                | adds a class                                        |
| GET     | /api/client                   | gets all registered clients                         |
| GET     | /api/instructor               | gets all registered instructors                     |
| GET     | /api/class                    | gets all available classes                          |
| GET     | /api/class/:id                | gets class by ID                                    |
| PUT     | /api/class/:id                | edits by class ID                                   |
| DELETE  | /api/class/:id                | delete class by ID                                  |

# Table Requirements

## Clients

| Name     | Type    | Required | Unique | Notes                     |
| -------- | ------- | -------- | ------ | ------------------------- |
| id       | integer | yes      | yes    | users id (auto generated) |
| username | string  | yes      | yes    | users name                |
| password | string  | yes      | no     | users password            |

## Instructors

| Name     | Type    | Required | Unique | Notes                     |
| -------- | ------- | -------- | ------ | ------------------------- |
| id       | integer | yes      | yes    | users id (auto generated) |
| username | string  | yes      | yes    | users name                |
| password | string  | yes      | no     | users password            |

## Classes

| Name          | Type    | Required | Unique | Notes                     |
| ------------- | ------- | -------- | ------ | ------------------------- |
| id            | integer | yes      | yes    | users id (auto generated) |
| instructor_id | string  | yes      | yes    | instructor's ID           |
| name          | string  | yes      | no     | instructor                |
| type          | string  | yes      | no     | class type                |
| start_time    | string  | yes      | no     | class start time          |
| duration      | string  | yes      | no     | length of time class is   |
| intensity     | string  | yes      | no     | intensity of class        |
| location      | string  | yes      | no     | location of class         |
| max_size      | integer | yes      | no     | max class size            |

# Dependencies Used

```json
"dependencies": {
  "bcryptjs": "^2.4.3",
  "dotenv": "^8.2.0",
  "express": "^4.17.1",
  "helmet": "^3.23.1",
  "jsonwebtoken": "^8.5.1",
  "knex": "^0.21.1",
  "cors": "^2.8.5",
  "sqlite3": "^4.2.0",
},
"devDependencies": {
 "jest": "^24.3.1",
 "nodemon": "^1.18.10",
 "supertest": "^4.0.0"
}
```

# Author

- Michael Sheets
