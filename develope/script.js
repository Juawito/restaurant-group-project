// Reservation Page
$(".submit").on("click", function(event) {
    event.preventDefault();
})
var newReservation = {
    reserveName: $("#reserveName"),
    reserevePhone: $("#reservePhone"),
    reserveEmail: $("#reservemail"),
    reserveNickname: $("#reserveNickname"),
};

console.log (newReservation)

if (data) {
    alert("You're booked!");
}
else {
    alert ("Sorry, we're booked. You're on the waitlist");
}
$("#reserveName").val("");
$("#reservePhone").val("");
$("#reservemail").val("");
$("#reserveNickname").val("");

});

// View Page

var reservationDetails = document.getElementsByClassName("reservationDetails")

var tableList = $("#tableList");

var listItem = $("<li class='reservationDetails'>");

reservationDetails.append (
        $("h3").text("Table" + (i+1)),
        $("hr"),
        $("li").text("ID:" + tableData[i].reserveNickname),
        $("li").text("Name:" + tableData[i].reserveName),
        $("li").text("Email:" + tableData[i].reserveEmail),
        $("li").text("Phone:" + tableData[i].reservePhone),

)

tableList.append(listItem);


var waitListDetails = document.getElementsByClassName("waitDetails")

waitListDetails.append (
        $("h3").text("Table" + (i+1)),
        $("hr"),
        $("li").text("ID:" + tableData[i].waitID),
        $("li").text("Name:" + tableData[i].waitName),
        $("li").text("Email:" + tableData[i].waitEmail),
        $("li").text("Phone:" + tableData[i].waitPhone),

)