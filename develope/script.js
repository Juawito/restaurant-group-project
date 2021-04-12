var reservationDetails = document.getElementsByClassName("reservationDetails")

reservationDetails.append (
        $("h3").text("Table" + (i+1)),
        $("hr"),
        $("li").text("ID:" + tableData[i].id),
        $("li").text("Name:" + tableData[i].name),
        $("li").text("Email:" + tableData[i].email),
        $("li").text("Phone:" + tableData[i].phone),

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