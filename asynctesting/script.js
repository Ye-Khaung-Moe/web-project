//Async & Await (synthetic sugar)

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
            //reject("Error while getting Photo")
           resolve("Photo Data has been fetched") 
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

const getUserProfile = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Getting Profile")
        }, 2000);
    });
};

const ShowingHome = (data) => {
    console.log("Making HomeFeed with fetch data:", data); //Sync code
}

const buildUI = async() => {     // putting async next to arrow function make async function
        const LogIn = await loginData();
     console.log("First then:", LogIn);
    const FetchingData = await DataFetch();
    console.log("Second Then:", FetchingData)
    const UserPhoto = await getUserPhoto();
     console.log("Third then:", UserPhoto);
    const UserFriend = await getUserFriend();
    console.log("Fourth Then:", UserFriend);
    const UserProfile = await getUserProfile();
    console.log("Fifth Then:", UserProfile)
    ShowingHome("HomeFeed Data");
}; // Halt only for specific function
//async function only return promise object

console.log("First!");

buildUI().catch((Error) => {
    console.log("Error while getting Data:",Error)
});

console.log("Second!");