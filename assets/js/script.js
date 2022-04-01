//extending dayjs formatting options
dayjs.extend(window.dayjs_plugin_advancedFormat);

//setting current day in header
$("#currentDay").text(dayjs().format('dddd, MMMM Do'));

//global variables
currentTime = dayjs().hour();
console.log(currentTime);

var setTimeClass = function() {
    for (var i = 9; i < 18; i++) {
        currentEl = $(`textarea[data-time=${i}]`);
        
        if (currentTime > i) {
            currentEl.addClass("past")
        }
        else if (currentTime == i) {
            currentEl.addClass("present")
        }
        else {
            currentEl.addClass("future")
        }
    }
}

setTimeClass();

