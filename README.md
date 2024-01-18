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

- User Authentication: Login and Register.
- Home Page: Displays all available quizzes :
  - Teachers : add a new quiz, edit a quiz, delete a quiz.
  - Students : Enter a quiz.
- Quiz Page: Displays the quiz questions and options.
- Add Quiz: Allows teachers to add their own quizzes.

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

## Contributing

Any contributions you make are greatly appreciated.

1. Fork the Project.

2. Create your Feature Branch

```
git checkout -b feature/AmazingFeature
```

3. Commit your Changes

```
   git commit -m 'Add some AmazingFeature'
```

4. Push to the Branch

```
   git push origin feature/AmazingFeature
```

5. Open a Pull Request

## Contact

- Email: aderdour.najat1@gmail.com
