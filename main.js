
function main(){
    getDate();
}

function getDate(){
    let date = new Date();
    document.getElementById("CurrentDate").innerHTML = "" + date;
    setTimeout(getDate, 1000);
}
main();