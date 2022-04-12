let appId = 'abc';
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
}

function clickHandler(message: string) {
  // let userName = "Ash";
  console.log("Clicked! " + message);
}

// a comment
// only require if check or !, both are used to show that either option works
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
