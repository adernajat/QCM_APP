# QCM_APP
Quiz (QCM) platform using the MERN stack (MongoDB, Express.js, React.js, Node.js)
# Web Quiz Application
This is a web-based quiz application made with React.js and Node.js. It offers users (teachers) the possibility to create, edit and delete quizzes while at the same time allowing for regular users to take the quizzes and get grades.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

User identification: Login and register.
- Home page: Shows all existing quizzes:
  - Teachers: add a new quiz, modify a quiz, delete a quiz.
  - Students: Take a quiz.
- Quiz page: View quiz questions and options.
- Add quiz: Enables teachers to add their own quizzes.

## Getting Started

These instructions will give you a version of the project that will run on your local computer for development and testing reasons.

### Prerequisites

- Node.js
- react.js
- Mongodb
- npm

### Installation

1. Clone the repo :

   ```
   git clone https://github.com/adernajat/QCM_APP.git
   ```

2. Install NPM packages :

   ```
   npm install
   ```

3. Go to ./server/App.js and change the following line to your own database connection :

   ```
   mongoose
   .connect(
      "mongodb+srv://AderdourGouaaballa:Bismilah12@qcmdata.lfghmmz.mongodb.net/"
   )
   ```

### Usage

To start the server on your local machine for development purposes, and using the concurrently module, run the following:

```
npm run open
```

The application will start running on http://localhost:3000.


## Contact

- Email: aderdour.najat1@gmail.com
- Email: salma.gouaaballa@gmail.com
