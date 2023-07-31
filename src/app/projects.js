"use client"


import project1 from "../app/img/pro1.png";
import project2 from "../app/img/pro3.png";
import project3 from "../app/img/pro4.png";

export const projects = [
    {
        title:"Amazon clone",
        desc:"This is a perfect clone of online ecommerce website Amazon with complete login functionality and payment processing.I used React js as a frontend framework, React context api for updating the shopping cart, Firebase for hosting and adding the login functionalities, Firestore for database. I used Node js for powering the backend and used Stripe api for all the payment processing",
        githubUri:"https://github.com/BinaySaahu/amazonClone",
        projectLink:"https://clone-78bcd.web.app/",
        projectImg:project1,
    },
    {
        title:"Spotify-clone",
        desc:"This is a clone of Spotify with complete login functionality. I used React js as a frontend framework, React context api for storing all the songs,playlists etc. of the user. Material Ui for all the icons.  Spotify API for adding the actual login functionality offered by spotify and for import all the information of the logged in user.",
        githubUri:"https://github.com/BinaySaahu/spotify-clone",
        projectLink:"https://github.com/BinaySaahu/spotify-clone",
        projectImg:project2
    },
    {
        title:"Todo Web app",
        desc:"This is a full stack To-do web application.Here I have used react js as a frontend framework , for backend I have used mongodb atlas which will store information of the user.User can login to their respective account and store and view the list of todo items .",
        githubUri:"https://github.com/BinaySaahu/todo-app",
        projectLink:"https://github.com/BinaySaahu/todo-app",
        projectImg:project3
    }
]