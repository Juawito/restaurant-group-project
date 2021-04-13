// Reservation Page
class NewReservation{
    constructor(id, phoneNum, email, name){
        this.id = id;
        this.phoneNumber = phoneNum;
        this.email = email;
        this.name = name;
        this.routeName = '';
    }
}
$(".submit").on("click", function(event) {
    event.preventDefault();
    let rand = Math.floor(Math.random() * 100);
    console.log(rand);
    let reserveName = $('#reserveName');
    let reservePhone = $('#reservePhone');
    let reserveEmail = $('#reserveEmail');
    let reserveId = rand;

    const newTable = NewReservation(reserveId, reservePhone, reserveEmail, reserveName);

})

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


// View Page

var reservationDetails = document.getElementsByClassName("reservationDetails")

var tableList = $("#tableList");

var listItem = $("<li class='reservationDetails'>");

reservationDetails.append (
        $("h3").text("Table" + (i+1)),
        $("hr"),
        $("li").text("ID:" + tableData[i].id),
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