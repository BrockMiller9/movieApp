$(".submit").on("click", function (e) {
  e.preventDefault();
  const movieVal1 = $(".movie1").val();
  const movieVal2 = $(".movie2").val();
  $("form")
    .append($("<p>", { text: `${movieVal1}: ${movieVal2}` }))
    .append("<button type='button' class='remove'>Remove</button>");
});

$(".remove").on("click", function (e) {
  $(e.target).closest("p").remove();
});

// console.log(movieVal);
