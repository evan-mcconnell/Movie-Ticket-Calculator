//Busniess Logic
function Ticket(name, age, film, showtime) {
  this.name = name;
  this.age = age;
  this.film = film;
  this.showtime = showtime;
}

//UI Logic
$(document).ready(function() {
  $("#ticket-form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var age = $("#age").val();
    var film = $("#film").val();
    var showtime = $("#showtime").val();

    console.log(name);
    var newTicket = new Ticket()

  });
});
