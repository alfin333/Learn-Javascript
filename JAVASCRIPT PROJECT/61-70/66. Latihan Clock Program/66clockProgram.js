const myLabel = document.getElementById('myLabel');
update();
setInterval(update, 1000);
function update() {
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(waktu) {

        let hours = waktu.getHours();
        let minutes = waktu.getMinutes();
        let seconds = waktu.getSeconds();
        let amORpm = hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;
        
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds= formatZeroes(seconds);
        return `${hours}:${minutes}:${seconds} ${amORpm}`
    
    }
}
function formatZeroes(time){
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
} // intinya fungsi ini kalau dia 1 digit, akan ditambahkan 0, misalnya :05, 02, 01,
