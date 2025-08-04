// Promise
//Synchronous and Asynchronous 
// fetch  (network request)
// Promise Chaining
// Avoiding Callback Hell

const loginData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject("Error in login")
            resolve("Login is on fired")
        }, 2000);
    });
};

const DataFetch = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //reject("Error Fetching!!")
            resolve("Data Fetching");
        }, 4000);
    });
};

const getUserPhoto = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error while getting Photo")
           // resolve("Photo Data has been fetched") 
        }, 5000);
    });
};

const getUserFriend = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Friend Data Fetched")
        }, 5000);
    });
};

const ShowingHome = (data) => {
    console.log("Making HomeFeed with fetch data:", data); //Sync code
}

loginData()
    .then((logData) => {
    console.log("First then:", logData);
    return DataFetch(); // (return) pass through the value into next then method
})
    .then((dataFromFetchData) => {
        console.log("Second Then:", dataFromFetchData)
        return getUserPhoto();
    })
    .then((userPhoto) => {
        console.log("Third then:", userPhoto)
        return getUserFriend();
    })
    .then((userFriend) => {
        console.log("Fourth Then:", userFriend)
        ShowingHome("Showing Home Feed");
    })
    .catch((Error) => {
    console.log("Error while fetching data:", Error)
});



