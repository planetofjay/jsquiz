
// $("h1").addClass("big-title big-margin");

// $("h1").removeClass("big-title");
// $("h1").hasClass("big-margin"); // true

// $("h1").text("Good Night");

// $("button").html("<em>Hi</em>");

// $("img").attr("src");

// $("a").attr("href", "https://www.naver.com");

// $("h1").attr("class");

// $("h1").click(function() {
//   $("h1").css("color", "purple");
// });

// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("button").click(function() {
//   $("h1").css("color", "purple");
// });

// $("input").keydown(function(event) {
//   console.log(event.key);
// });

$(document).keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
})