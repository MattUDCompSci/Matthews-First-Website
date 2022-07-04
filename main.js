
function main(){
    getDate();
}

function getDate(){
    let d = new Date();
    let time = "" + d
    document.getElementById("CurrentDate").innerHTML = time;
    setTimeout(getDate, 1000);
}
main();