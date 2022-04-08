
// create variables
var save = document.querySelectorAll(".saveBtn")
var time = document.querySelectorAll("textarea")

// setting the current time to check against time on the table
var currentTime = moment().format("HH");
// create variable for time according to table
var tableHour = ''
// for loop
for (let i = 0; i < time.length; i++) {
    var element = time[i];
    tableHour = element.id
    // set up verification for past/present/future colors
    if (currentTime > tableHour) {
        element.classList.add('past')
        // console.log(element)
    } else if (currentTime < tableHour) {
        element.classList.add('future')
    } else {
        element.classList.add('present')
    }
}
// create button click event
$(".saveBtn").on("click", function (event) {
    // console.log(event.target.previousElementSibling.id)
    var textBox = $(`#${event.target.previousElementSibling.id}`).val()
    localStorage.setItem(event.target.previousElementSibling.id, textBox)
    console.log("success")
})
// recall local storage to repopulate
$(document).ready(function () {
    for (let i = 09; i < 18; i++) {
        var innerText = $(`#${i}`)
        innerText.text(localStorage.getItem(`${i}`))
        console.log(innerText.text)
    }
})