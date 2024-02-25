# OurHome
This repository houses the collaborative efforts to create a stunning and functional website for OurHome, the premier destination for chic home decor. Our team is dedicated to bringing the elegance and style of OurHome to the digital realm, focusing on user-friendly design and seamless navigation.

## Objective
This project was created to put into practice the coding and problem-solving skills learned at Masai School and to collaborate to create a fully functioning website. The project was created during Construct Week here at Masai, completed in just 5 days, and served as a collaborative tool to explore, learn, and grow.

## Project Type
Front_End
The project is mainly a front-end project with added dynamic capabilities using a mock API created by json-server. It has primarily been built using HTML, CSS, JavaScript and Bootstrap 5.3 as a framework.

## Deployed App
Both the front-end and the mock server have been deployed using render.com. The deployed links can be accessed below.

*Frontend: [https://ourhome.onrender.com/] 
*Backend: [https://ourhomeserver.onrender.com]

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

+ A YouTube video explaining the entire project and showcasing the features and functionalities can be accessed here: [https://youtu.be/Go52nz3dPXQ]
+ A YouTube video answering some of the questions related to the project can be found here: [https://youtu.be/S9GNdBrzEjc]

## Video Walkthrough of the CodeBase

- A walkthrough of the codebase and the folder structure can be accessed here on YouTube: 

## Features

+ Dynamically added elements using a mock server
+ JWT authentication and password hashing
+ Responsive and dynamic website
+ Dynamic elements added using the Bootstrap 5.3 framework
+ Admin dashboard for managing the products

## Installation and Getting Started

+ After downloading the project, follow these steps to get the project up and running :
  + `npm install` while on the main directory to install all the dependencies(Bootstrap 5.3)
  + Move into the backend directory using `cd ./backend`
  + `npm install` while on the backend directory to install all the dependencies ( json-server, json-server-auth, cors)
    
+ A mock server has been deployed for the backend and can be found here: [https://ourhomeserver.onrender.com/]
  * If you would like to deploy the server on the local system, you can use the following command while in the backend directory: `npx json-server db.json -m ./node_modules/json-server-auth/`

+ Admin Dashboard and related functionalities can only be accessed using the admin credentials. Currently, there is no way to access these elements without using the login credentials provided.

## Usage

+ Regular Functionalities:
  1. Get started on the landing page by selecting the region and language from the dropdown menu and then pressing the go button.
     ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/943db8a3-c7cf-41ed-8be3-f7ec3cfdd958)

  2. On the home page, click the login button and click the signup button to register user credentials. Ensure you are using a **password with at least 8 characters**.
      ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/06130d0d-6538-419b-91ba-36ace892662f)
      ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/53e5eea6-eb77-47d0-97f3-39302f4d15e1)
      ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/1f22a94b-a6bd-41ca-ba59-4bd77d3c2303)

  3. Once registered, you will be directed back to the Home page.
  4. Click on the Hamburger icon in the sidebar to access a list of categories.
     ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/f2e4578e-2e4d-4136-af52-712447591233)

  5. On the category page, you can click on the text to enter the page of the desired sub-category. Or you can click on the sidebar again to navigate to another category.
     ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/9a36b9ef-c406-4fef-92ef-e1d2b37f29f6)

  6. On the sub-category page, you can click on the Add to Cart button to add an item to the cart.
      ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/4abed75b-20d2-407c-a7c3-3fa1ba5175f5)

  7. Continue navigating across different categories and sub-categories and adding items to the cart.
      
  8. Click on the Basket button on the top right of the nav bar to access the cart at any time.
     
  9. Once on the cart page, you can click the delete button on your items to delete that specific item.
      ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/ba18ed93-d803-4bd9-aaec-e0b678696ded)

  13. Once satisfied, you can click the checkout button to complete the purchase.
  14. Log out by clicking on the user profile picture icon.

+ Admin Dashboard
  1. Get started on the landing page by selecting the region and language from the dropdown menu and then pressing the go button.
  2. Click on the login button and enter the following credentials: `email: abhinavtyagi@gmail.com` `password: 123456789` **You must use these credentials to access the admin dashboard.**
  3. Once on the admin page, you can navigate to the products page by using the sidebar.
     ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/26434d4f-2d90-4b68-a94e-fc2f359950ab)

  4. On the product page, you can use the `add product` and `edit product` buttons and the related forms to add a new product or edit an existing product respectively.
     ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/2b4111fa-3be5-403f-bdd0-70b3c6804700)

  5. A list of all products can be viewed in the table below.
     ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/77136918-fd9a-4135-b782-20b0412b551a)
 
  6. You can search any product, filter based on categories, and sort based on price in asc and desc order.
     ![image](https://github.com/AbhinavTyagi30/OurHome/assets/150140715/f63ee5a8-f38e-4b83-b6b8-d8679a01dac2)

  9. You can log out of the dashboard using the logout button on the sidebar. 

## Credentials

- for admin :
   `email: abhinavtyagi@gmail.com
    password: 123456789`

- Admin Dashboard **can only be accessed** by using the above-given credentials. Login by clicking the login button on the navbar on the home page.
  
- Regular users can register using the signup page on the deployed website. Ensure you are using the correct email format and the password is at least 8 characters in length.
- The SignUp page can be accessed by clicking the SignUp button on the login popup.

## Technology Stack

- HTML
- CSS
- JavaScript
- Bootstrap Library (Bootstrap 5.3)

