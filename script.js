function checkResult() {
    var marks = document.getElementById("marks").value;

    if (marks >= 40) {
        document.getElementById("result").innerHTML = "PASS";
    } else {
        document.getElementById("result").innerHTML = "FAIL";
    }
}
