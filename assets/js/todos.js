let totalTodos = "Your Total Daily Todos: ";
let lis = $("li");
let ul = $("ul");
let spans = $("span");
let icon = $(".fa-circle-plus");
let input = $("input");

let todosCount = lis.length;
let paragraph = $("p.todos-count");
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

// Hide Input [Click on Icon]
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
    ul.append(
      `<li><span><i class="fa-solid fa-trash"></i></span> ${inputValue}</li>`
    );
    todosCount += 1;
    paragraph.text(totalTodos + "  " + todosCount);
    // $(this).val("");
    // Clear the input value field in the End
    inputValue = $(this).val(" ");
  }
});

// Showing popup for the User for some hints of Website [Pure JS]
popup();

function popup() {
  // document.getElementById("disclaimer").style.display = "block";
  document.getElementById("disclaimer").classList.remove("fade");

  // console.log("wait 3 seconds then hide");

  setTimeout(hidePopup, 6000);
}

function hidePopup() {
  // document.getElementById("disclaimer").style.display = "none";
  document.getElementById("disclaimer").classList.add("fade");

  // console.log("wait 3 minutes then show popup again");

  setTimeout(popup, 2 * 60 * 1000);
  // setTimeout(popup, 8000);
}

// Bonus
// Header Animation
jQuery(document).ready(function () {
  $("h1").mousemove(function (e) {
    var rXP = e.pageX - this.offsetLeft - $(this).width() / 2;
    var rYP = e.pageY - this.offsetTop - $(this).height() / 2;
    $("h1").css(
      "text-shadow",
      +rYP / 10 +
        "px " +
        rXP / 80 +
        "px rgb(115, 147, 179), " +
        rYP / 8 +
        "px " +
        rXP / 60 +
        "px rgba(130,208,0,1), " +
        rXP / 70 +
        "px " +
        rYP / 12 +
        "px rgba(0,159,227,.7)"
    );
  });
});
