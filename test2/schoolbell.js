// 여기에 정답을 작성해주세요

// 1
document.getElementById("target-1").classList.remove("border");

// 2
document.getElementById("target-1").style.left = "250px";

// 3
let elements = document.getElementsByClassName("target-2");
for (var i = 0; i < elements.length; i++) {
  elements[i].classList.remove("border");
  elements[i].classList.add("blue");
}

// 4
let elements2 = document.getElementsByClassName("target-2");
for (var i = 0; i < elements2.length; i++) {
  elements2[i].style.left = "50px";
  elements2[i].style.marginTop = "-15px";
}

// 5
document.getElementById("target-3").style.display = "none";
document.getElementById("target-4").classList.add("green");

// 아래 코드는 수정하지 않습니다

// 1
$("#target-1").removeClass("border");

// 2
$("#target-1").css("left", "250px");

// 3
$(".target-2").removeClass("border").addClass("blue");

// 4
$(".target-2").css({ left: 50, "margin-top": "-15px" });

// 5
$("#target-3").fadeOut(() => $("#target-4").addClass("green"));
