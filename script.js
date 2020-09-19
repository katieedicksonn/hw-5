
// TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
currentHour = moment().format("h A");

console.log(moment().format());
console.log(moment().format("h A"));



// TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
$("#currentDay").append(currentHour)

var diffTimes = ['9', '10', '11', '12', '13', '14', '15', '16', '21'];
var $container = $(".container")
var arrayLength = diffTimes.length;
var currentHour = JSON.parse(moment().format("H"));
console.log(currentHour);
var time = $('.time')
timeIndex = 0

hour = moment().format("HH");
$("textarea").each(function() {
    var i = $(this).attr('id');   
    console.log(typeof(i), typeof(hour)) 
    var text = localStorage.getItem(i);
    console.log(text, "hello");
    if (text) {
        $(this).val(text) ;
        
    }
    if (i === hour) {

    $(this).addClass("present");

    } else if (Number(i) < Number(hour)) {
     console.log('hi')
     $(this).addClass("past");
    }
    else if  (Number(i) > Number(hour)){
     
     $(this).addClass("future");
    
    }
})

$('.container').on("click", ".saveBtn", function(){
    var myTextArea = $(this).siblings('textarea');
    console.log(myTextArea.val())
    console.log(myTextArea.attr('id'))
    localStorage.setItem(myTextArea.attr("id"),myTextArea.val()) 
})


