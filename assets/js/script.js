//extending dayjs formatting options
dayjs.extend(window.dayjs_plugin_advancedFormat);


//setting current day in header
$("#currentDay").text(dayjs().format('dddd, MMMM Do'));


$(".saveBtn").on("click", function() {
    var currentEvent = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("data-time");
    var savedTasks = localStorage.getItem("SavedTasks");
    if (currentEvent && !savedTasks) {
        localStorage.setItem("SavedTasks", JSON.stringify([{time: time, event: currentEvent}]));
        return;
    }
    else if (currentEvent && savedTasks) {
        savedTasks = JSON.parse(savedTasks)
        //loop through array to remove task that are already assigned to time we are trying to save
        for (var i = 0; i < savedTasks.length; i++) {
            if (time == savedTasks[i].time) {
                savedTasks.splice(i, 1)
            }
        }
        savedTasks.push({time: time, event: currentEvent})
        localStorage.setItem("SavedTasks", JSON.stringify(savedTasks))
    }
});

var setTimeClass = function() {

    currentTime = dayjs().hour();

    for (var i = 9; i < 18; i++) {
        currentEl = $(`textarea[data-time=${i}]`);

        if (currentTime > i) {
            currentEl.removeClass("present")
            currentEl.addClass("past")
        }
        else if (currentTime == i) {
            currentEl.removeClass("future")
            currentEl.addClass("present")
        }
        else {
            currentEl.addClass("future")
        }
    }
}

//checking time every minute to change time block status/color
setInterval(setTimeClass, 60000);

setTimeClass();


