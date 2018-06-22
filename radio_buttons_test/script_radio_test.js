
var miasto = document.querySelector('input[name="rate"]:checked').value;

if (miasto == 'city1') {
  console.log("London");
}else if (miasto == 'city2') {
  console.log("Manchester");
}else if (miasto == 'city3') {
  console.log("Glasgow");
}else {
  console.log("What?");
}
