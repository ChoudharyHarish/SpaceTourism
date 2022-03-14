var slide2 = document.getElementById("slider2");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");

    num1.onclick = function () {
        slide2.style.transform = "translateY(0)";
        num1.classList.add("active2");
        num2.classList.remove("active2");
        num3.classList.remove("active2");
    }

    num2.onclick = function () {
        slide2.style.transform = "translateY(-34%)";
        num2.classList.add("active2");
        num3.classList.remove("active2");
        num1.classList.remove("active2");
    }
    num3.onclick = function () {
        slide2.style.transform = "translateY(-67.5%)";
        num3.classList.add("active2");
        num1.classList.remove("active2");
        num2.classList.remove("active2");
    }
