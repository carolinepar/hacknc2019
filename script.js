let x = document.getElementsByClassName("userContentWrapper");
let i;
for (i = 0; i < x.length; i++) {
  let replace = document.createElement("p");
  replace.innerHTML = "<h1>Hello World</h1>";
  x[i].parentElement.replaceChild(replace, x[i]);
  x[i].style.color = "yellow";
}