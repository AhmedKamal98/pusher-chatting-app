'use strict'

const loginUser = function () {
    document.querySelector(".container").style.display="none";
    document.querySelector(".wrapper").style.display="block";
    checkGroup();
    subscribeToPusher();
}

const logoutUser = function () {
    console.log("loging out...");
    document.querySelector(".container").style.display="block";
    document.querySelector(".wrapper").style.display="none";
    unubscribeFromPusher();
}

const checkGroup = function () {
    console.log("Checking group...");
}


const subscribeToPusher  = function () {
    console.log("subscribing To Pusher...");
}

const unubscribeFromPusher  = function () {
    console.log("unsubscribing from Pusher...");
}

const sendMessage = function () {
    console.log("sending message...");
    renderMessage();
}

const renderMessage = function () {
    console.log("rendering the message...");
    getCurrentTime();
}

const getOnlineUsers = function () {
    console.log("geting Online Users...");
    
}

const getCurrentTime = function () {
    console.log("geting Online Users...");
    
}

const getIdleTimer = function () {
    console.log("geting Online Users...");
    logoutUser();
    
}