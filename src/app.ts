const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

// a comment
// only require if check or !, both are used to show that either option works
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
