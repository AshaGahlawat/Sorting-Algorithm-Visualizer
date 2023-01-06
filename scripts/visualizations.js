var speed = 10;
inp_aspeed.addEventListener("input", vis_speed);
function vis_speed() {
    var array_speed = inp_aspeed.value;
    switch (parseInt(array_speed)) {
        case 1: speed = 5;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 20;
            break;
        case 4: speed = 25;
            break;
        case 5: speed = 40;
            break;
        case 6: speed = 80;
            break;
        case 7: speed = 100;
            break;
        case 8: speed = 200;
            break;
        case 9: speed = 300;
            break;
        case 10: speed = 500;
            break;
    }

    delay_time = 10000 / (Math.floor(array_size / 10) * speed);   
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);    
var c_delay = 0;

function div_update(cont, height, color) {
    window.setTimeout(function () {
        cont.style = " margin:0% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delay_time);
}

function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < butts_used_algorithms.length; i++) {
            butts_used_algorithms[i].classList = [];
            butts_used_algorithms[i].classList.add("butt_unselected");
            butts_used_algorithms[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, c_delay += delay_time);
}
