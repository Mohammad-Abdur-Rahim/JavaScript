function evenString(str) {
    const len = str.length;
    console.log(len)
    if(len % 2 === 0){
        console.log('even size');
        return true;
    }
    else {
        console.log('Odd size');

        return false;
    }
}
evenString("rahim");
evenString("Adil");