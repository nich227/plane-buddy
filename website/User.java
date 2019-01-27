class User {
    boolean wantsToSleep;
    boolean wantsToRead;
    boolean isOld;
    boolean hasBaby;

//talkers
    Interest firstChoice;
    Interest secondChoice;
    Interest thirdChoice;
    
    boolean hasSeat; 

}

{
    data: [
        {
            userID: 123456789,
            wantsToSleep: true,
            wantsToRead : false
            ...
        },
        {

        }
    ]
}


data.sort((a,b) => {
    if (a.hasBaby && b.hasBaby) {
        return -1
    } else {
        if(a.wantsToRead && b.wantsToRead) {
            return -1;
        } else {
            if ()
        }
    }
    return 1;
})