//extending dayjs formatting options
dayjs.extend(window.dayjs_plugin_advancedFormat);

//setting current day in header
$("#currentDay").text(dayjs().format('dddd, MMMM Do'));

//global variables
currentTime = dayjs().hour();

$(".saveBtn").on("click", function(target) {
    currentEvent = $(target).closest("textarea")
    console.log(currentEvent)
});

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

//checking time every minute to change time block status/color
setInterval(function() {
    currentTime = dayjs().hour();
    setTimeClass();
  }, 60000);


setTimeClass();

