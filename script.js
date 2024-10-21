var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
}, 500);

var i = 0;
var txt1 = "Happy Birthday to you! 🎉🎂 I hope your day is filled with love, laughter, and all the joy you bring to those around you! << You are such a special person, and I feel grateful to have you in my life. << May this year bring you new adventures, happiness, and everything you wish for. << Remember, you deserve all the wonderful things life has to offer! << Enjoy your special day to the fullest! |";
var speed = 50;

function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == '<') {
            document.getElementById("text1").innerHTML += '</br>';
        } else if (txt1.charAt(i) == '>') {
            document.getElementById("text1").innerHTML = '';
        } else if (txt1.charAt(i) == '|') {
            $(".bg_heart").css("background-image", "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...');"); // Add your base64 image here
        } else {
            document.getElementById("text1").innerHTML += txt1.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
