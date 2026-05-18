# LOTR-Quotes
Web-application that tests your knowledge of quotes from the LOTR movies.
Attribute the quote presented to one of four alternatives to score a point. 

## Getting started
These instructions will enable you to run the project locally on your device.
### Prerequisites

Node:
1. Download and install from https://nodejs.org/en#download

#### Installing dependencies
1. Open a terminal and navigate to the root folder of the project.

2. Ensure that node is installed by running the version command:
```
node -v
```
If a version number is not returned, return to install node step. 

3. Using npm install the required dependencies by running:
```
npm install
```

#### Env
1. This project requires an access token from "the one API", to get one: visit 
https://the-one-api.dev/ and create an account. 

2. Once you have an access token, create an ".env" file within the root folder of the project. Copy the contents of "example.env" (located in the root folder) to your .env file and replace "KEY_GOES_HERE" with your access token.

```
VITE_API_KEY="KEY_GOES_HERE"
```

### Running the project
1. After the dependencies are installed and the .env file is created and contains the required access token, open a terminal and navigate to the project root folder.

2. Start the server locally by running the command: 
```
npm run dev
```
Which should return a response similar to this:
```
  VITE v8.0.13  ready in 589 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
3. The application can be viewed in a browser by entering the url shown in "Local" or by ctrl+clicking the url in the terminal

### Built With
* [React](https://react.dev/) - Used for creating the user interface
* [React-Bootstrap](https://react-bootstrap.netlify.app/) - Used for styling
* [Floating UI](https://floating-ui.com/) - Used to display the correct answers in a pop-up window
* [the one API](https://the-one-api.dev/) - Used for quote and character retrieval

### License
MIT
