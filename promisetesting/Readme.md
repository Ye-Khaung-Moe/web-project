// Promise 

# const fetchDataPromise = new Promise((resolve, reject) => {
#    setTimeout(() => {
#          resolve("Resolved");
#    }, 3000)
# });

# fetchDataPromise
#    .then((data) => {
#    console.log("Inside then ...",data)
# })
#    .catch((error) => {
#    console.log("Inside catch...", error)
# });