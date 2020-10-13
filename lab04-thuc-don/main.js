var menuItem = document.getElementsByClassName("menu-list-item");
var selected = null;
console.log(menuItem);
for (var e of menuItem) {
  e.addEventListener("click", function (event) {
    onClickMenuItem(this);
  });
}

function onClickMenuItem(myself) {
  if (selected !== null) {
    selected.style.backgroundColor = "wheat";
  } 
  selected = myself;
  document.getElementById("content").innerHTML = selected.innerHTML;
  selected.style.backgroundColor = "chartreuse";
}


