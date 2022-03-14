  
    var slide = document.getElementById("slider");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    
    btn1.onclick = function () {
        slide.style.transform = "translateX(0)";
        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
    }
    btn2.onclick = function () {
        slide.style.transform = "translateX(-25%)";
        btn2.classList.add("active");
        btn1.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
    }
    btn3.onclick = function () {
        slide.style.transform = "translateX(-50%)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
        btn4.classList.remove("active");
    }
    btn4.onclick = function () {
        slide.style.transform = "translateX(-75.5%)";
        bnt4.classList.add("active");
        bnt2.classList.remove("active");
        btn3.classList.remove("active");
        num1.classList.remove("active");
    }