function tumunuSec() {

    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = true;

    }

}

function burcu(event) {
    var content = document.getElementsByName("b");
    var checkbox = document.getElementsByClassName("checkbox");
    for (var i = 0; i < content.length; i++) {
        content[i].className.replace(" active", "");
    }

    for (var i = 0; i < content.length; i++) {
        if (checkbox[i].checked) {
            content[i].style.display = "none";
        }
        else {
            content[i].style.display = "grid";
        }
    }

}

/*$(document).ready(function () {
    $("body").on("click", ".hleftwo", function () {
        $("name").remove();
    })
})
*/
/*
$(document).ready(function () {
    $("hleftwo").click(function () {
        $(".contentwo").remove();
    })
})
*/



