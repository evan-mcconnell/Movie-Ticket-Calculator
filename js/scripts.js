//Busniess Logic
function Ticket(name, age, film, showtime) {
  this.name = name;
  this.age = age;
  this.film = film;
  this.showtime = showtime;

}
var price = 10

function priceCalc(x) {
  if (x.age <= 10 || x.age >= 65) {
    price = price - 2;
    console.log(price + "age");
  }
  if (x.film === 2) {
    price = price - 2;
    console.log(price);
  }
  if (x.showtime === 1) {
    price = price - 1;
    console.log(price);
  }
  return price
};

//UI Logic
$(document).ready(function() {
  $("#ticket-form").submit(function(event) {
    event.preventDefault();
    price = 10;
    var name = $("#name").val();
    var age = parseInt($("#age").val());
    var film = $("#film").val();
    var filmTitle = $("#film option:selected").text();
    var showtime = $("#showtime").val();

    console.log(threeD);
    // debugger;
    var newTicket = new Ticket(name, age, film, showtime)
    var newPrice = priceCalc(newTicket);
    console.log(newTicket);
    // console.log(newPrice);
    $("span#outputs").text("Hi " + name + ", your ticket price for " + filmTitle + " is $" + newPrice );

  });
});
