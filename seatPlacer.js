// class User {
//     boolean wantsToSleep;
//     boolean wantsToRead;
//     boolean isOld;
//     boolean hasBaby;

// //talkers
//     Interest firstChoice;
//     Interest secondChoice;
//     Interest thirdChoice;
    
//     boolean hasSeat; 

// }

let seats = [];//array to fill with users that have been assigned to seats

function formLists() {
    let users = getUsers(); //get users from database
    // let done = false;
    let babiesList = [];
    let wantsToSleepList = [];
    let wantsToReadList = [];
    let isOldList = [];
    let talkersList = [];

    for (var i=0; i<users.length; i++){
        switch (users[i].resp) {
            case "babies":
                babiesList.push(users[i])
                break
            case "sleep":
                wantsToSleepList.push(users[i])
                break
                wantsToReadList.push(users[i])
                break
            case "old":
                isOldList.push(users[i])
                break
            default:
                talkersList.push(users[i])
        }
    }
}

function fillSeats() {
    let nextSeatNumber = 0;

    //non-talkers
    for (var i=nextSeatNumber; i<isOldList.length; i++){
        seats[nextSeatNumber++]=isOldList[i];
    }
    for (var i=nextSeatNumber; i<babiesList.length; i++){
        seats[nextSeatNumber++]=babiesList[i];
    }
    for (var i=nextSeatNumber; i<wantsToReadList.length; i++){
        seats[nextSeatNumber++]=wantsToReadList[i];
    }
    for (var i=nextSeatNumber; i<wantsToSleepList.length; i++){
        seats[nextSeatNumber++]=wantsToSleepList[i];
    }

    //talkers


}