
// TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
currentHour = moment().format("h A");

console.log(moment().format());
console.log(moment().format("h A"));

hour = moment().format();


// TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
$("#currentDay").append(currentHour)

var diffTimes = ['9', '10', '11', '12', '13', '14', '15', '16', '21'];
var $container = $(".container")
var arrayLength = diffTimes.length;
var currentHour = JSON.parse(moment().format("H"));
console.log(currentHour);
var time = $('.time')
timeIndex = 0


$("textarea").each(function() {
    var i = $(this).attr('id');   
    console.log(i) 
    hour = moment().format();
    // var textID = parseInt($(this).grabIdWithCode)
    if (i === hour) {

    $(this).addClass("present");

    } else if (i < hour) {
     $(this).removeClass("present");
     $(this).addClass("past");
    }
    else if  (i > hour){
     $(this).removeClass("past");
     $(this).addClass("future");
    
    }
})

$('.container').on("click", ".saveBtn", function(){
    var myTextArea = $(this).siblings('textarea');
    console.log(myTextArea.val())
})

localStorage.setItem("test", "My first note" )
localStorage.setItem("test1", "my second not" )
var text1FromLocalStorage= localStorage.getItem("test")
$("#9").text(text1FromLocalStorage)

var text2FromLocalStorage= localStorage.getItem("test1")
$("#10").text(text2FromLocalStorage) 

