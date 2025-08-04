// Catching Error Async 

// try ... catch method 

# const buildUI = async() => {
#    try{
#    const LogIn = await loginData();
#     console.log("First then:", LogIn);
#    const FetchingData = await DataFetch();
#    console.log("Second Then:", FetchingData)
#    const UserPhoto = await getUserPhoto();
#     console.log("Third then:", UserPhoto);
#    const UserFriend = await getUserFriend();
#    console.log("Fourth Then:", UserFriend);
#    ShowingHome(UserFriend);
# } catch (error){
#    console.log("Error getting..", error) 
# }
# };

# buildUI();

// Second Method of Catching Error 

# const buildUI = async() => {
#    const LogIn = await loginData();
#     console.log("First then:", LogIn);
#    const FetchingData = await DataFetch();
#    console.log("Second Then:", FetchingData)
#    const UserPhoto = await getUserPhoto();
#     console.log("Third then:", UserPhoto);
#    const UserFriend = await getUserFriend();
#    console.log("Fourth Then:", UserFriend);
#    ShowingHome(UserFriend);
# };

# buildUI().catch((Error) => {
#   console.log("Error while getting Data", Error )
# })