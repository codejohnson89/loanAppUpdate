//Application Type section

function loanApp() {
    if (document.getElementById("#optFull").checked) {
        document.getElementById("#start").href = "facebook.com";
    } else if (document.getElementById("#optQuick").checked) {
        document.getElementById("#start").href = "twitter.com";
    } else {
        window.alert("please chose one!");
    }
}

// Borrower Employment section

function employment() {
    if (document.getElementById("App_Ctrl_75_rdo_1").checked) {
        $(".self-emp").css("display", "block");
        $(".emp").css("display", "none");
    } else if (document.getElementById("App_Ctrl_75_rdo_2").checked) {
        $(".self-emp").css("display", "none");
        $(".emp").css("display", "block");
    } else {
        console.log("Nothing");
    }
}


// Co Borrower Employment section

function employmentCo() {
    if (document.getElementById("App_Ctrl_282_rdo_1").checked) {
        $(".self-emp").css("display", "block");
        $(".emp").css("display", "none");
    } else if (document.getElementById("App_Ctrl_282_rdo_2").checked) {
        $(".self-emp").css("display", "none");
        $(".emp").css("display", "block");
    } else {
        console.log("Nothing");
    }
}

// Loan Purpose section

function loanPurp() {
    if (document.getElementById("App_Ctrl_35_rdo_3").checked || document.getElementById("App_Ctrl_35_rdo_7").checked) {
        $(".section1").css("display", "none");
        $(".section2").css("display", "none");

    } else if (document.getElementById("App_Ctrl_35_rdo_5").checked || document.getElementById("App_Ctrl_35_rdo_6").checked) {
        $(".section2").css("display", "none");
        $(".section1").css("display", "block");
    } else if (document.getElementById("App_Ctrl_35_rdo_3").checked && !document.getElementById("App_Ctrl_35_rdo_7").checked) {
        $(".existingFinance").css("display", "block");
    } else {
        console.log("hello");

        $(".section2").css("display", "block");
    }
}
