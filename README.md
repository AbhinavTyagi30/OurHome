# OurHome
This repository houses the collaborative efforts to create a stunning and functional website for OurHome, the premier destination for chic home decor. Our team is dedicated to bringing the elegance and style of OurHome to the digital realm, focusing on user-friendly design and seamless navigation.

## Objective
This project was created to put into practice the coding and problem-solving skills learned at Masai School and to collaborate to create a fully functioning website. The project was created during Construct Week here at Masai, completed in just 5 days, and served as a collaborative tool to explore, learn, and grow.

## Project Type
Front_End
The project is mainly a front-end project with added dynamic capabilities using a mock API created by json-server. It has primarily been built using HTML, CSS, JavaScript and Bootstrap 5.3 as a framework.

## Deployed App
Both the front-end and the mock server have been deployed using render.com. The deployed links can be accessed below.

-Frontend: https://ourhome.onrender.com/ 
-Backend: https://ourhomeserver.onrender.com

## Directory Structure

OurHome/
|--Images/
|      |--OurHomeLogo/
|      |--userTemplate/
|
|--adminDashBoard/
|--backend/
|--scripts/

## Video Walkthrough of the Project

- A youtube video explaining the entire project and showcasing the features and functionalities can be accessed here : https://youtu.be/Go52nz3dPXQ
- A youtube video answering some of the questions related to the project can be found here : https://youtu.be/S9GNdBrzEjc

## Video Walkthrough of the CodeBase

- A walkthrough of the codebase and the folder structure can be found accessed here on youtube : 

## Features

- Dynamically added elements using a mock server
- JWT authentication and password hashing
- Responsive and dynamic website
- Dynamic elements added using Bootstrap 5.3 framework

## Installation and Getting Started

- After downloading the project, follow these steps to get the project up and running :
  - npm install on the main directory to install all the dependencies(Bootstrap 5.3)
  - move into the backend directory
  - npm install on the backend directory to install all the dependencies(json-server, json-server-auth, cors)
    
- A mock server has been deployed for the backend and can be found here: https://ourhomeserver.onrender.com/
  - If you would like to deploy the server on the local system, you can use the following command while in the backend directory: npx json-server db.json -m ./node_modules/json-server-auth/

- Admin Dashboard and related functionalities can only be accessed using the admin credentials. Currently, there is no way to access these elements without using the login credentials provided.

## Credentials

- for admin :
  - email: abhinavtyagi@gmail.com
  - password: 123456789

- Admin Dashboard can only be accessed by using the above-given credentials. Login by clicking the login button on the navbar in the home page.
  
- Regular users can register using the signup page on the deployed website. Ensure you are using the correct email format and the password is at least 8 characters in length.
- The SignUp page can be accessed by clicking the SignUp button on the login popup.

## Technology Stack

- HTML
- CSS
- JavaScript
- Bootstrap Library (Bootstrap 5.3)

