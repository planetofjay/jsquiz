
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

// $(document).keydown(function(event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// });

// $("h1").before("<button>before</button>");
// $("h1").after("<button>after</button>");
// $("h1").prepend("<button>prepend</button>");
// $("h1").append("<button>append</button>");

// $("button").remove();

$("button").on("click", function() {
  // $("h1").hide();
  // $("h1").toggle();
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").fadeToggle();
  // $("h1").slideUp();
  // $("h1").slideDown();  
  // $("h1").slideToggle();
  // $("h1").animate({opacity: 0.5});
  $("h1").slideUp().slideDown().animate({opacity: 0.5})
});