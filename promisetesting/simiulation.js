// Callback hell or Pyramid of Doom 

const loginData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Login Is fired")
        }, 3000);
    });
};

const DataFetch = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data Fetching");
        }, 6000);
    })
}

const ShowingHome = (data) => {
    console.log("Making HomeFeed with fetch data:", data);
}

loginData().then((logData) => {
    console.log(logData);
    DataFetch().then((fetchdata) => {
        console.log(fetchdata);
        ShowingHome(fetchdata);
    })
}).catch((error) => {
    console.log("Error while fetching data", error);
})


