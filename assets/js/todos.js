let totalTodos = "Your Total Daily Todos: ";
let lis = $("li");
let ul = $("ul");
let spans = $("span");
let icon = $("i");
let input = $("input");

let todosCount = lis.length;
let paragraph = $("p");
paragraph.text(totalTodos + " " + todosCount);

// Check Task is Done by clicking
// lis.on("click", function () {  // The correct one but won't work for the new added lis
//   $(this).toggleClass("task-done");
// });

ul.on("click", "li", function () {
  $(this).toggleClass("task-done");
});

// Deleting Done Item [Span] Note that the span is firing the done class as well and we need just span
ul.on("click", "span", function (event) {
  //Same here removed the $("span") and changed it is postion for new elemts added t oapply delete on them
  //   alert("Delete");
  event.stopPropagation();
  //   $("li").fadeOut(4000);
  setTimeout(() => {
    // $(this).parent().remove(); // Remove is page may be loaded with 1000 [Done] todos
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
    todosCount -= 1;
    paragraph.text(totalTodos + "  " + todosCount);
  }, 1000);
});

// paragraph.text(todosCount);

// Icon On Click to hide the input
icon.on("click", function (e) {
  //   input.toggle("slide", "swing");
  //   input.toggle("fold", 1000);
  input.slideToggle(0);

  //   input.hide();
  //   input.show("slow");
});

// Adding Todo to the list
input.on("keypress", function (e) {
  if (e.key === "Enter") {
    // Grabbing Text from the Input Field
    let inputValue = $(this).val();
    // alert(inputValue);
    ul.append(`<li><span>X</span> ${inputValue}</li>`);
    todosCount += 1;
    paragraph.text(totalTodos + "  " + todosCount);
    // $(this).val("");
    // Clear the input value field in the End
    inputValue = $(this).val(" ");
  }
});
