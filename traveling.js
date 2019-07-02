var chris = {
  character: "Christopher Robin"
}
chris.north = kanga;
chris.south = pooh;
chris.east = rabbit;
chris.west = owl;

var kanga = {
  character: "Kanga"
}
kanga.north = eeyore;
kanga.south = chris;

var pooh = {
  character: "Winnie the Pooh"
}
pooh.north = chris;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;

var rabbit = {
  character: "Rabbit"
}
rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = chris;

var gopher = {
  character: "Gopher"
}
gopher.west = rabbit;

var tigger = {
  character: "Tigger"
}
tigger.north = pooh;

var owl = {
  character: "Owl"
}
owl.south = piglet;
owl.east = chris;

var piglet = {
  character: "Piglet"
}
piglet.north = owl;
piglet.east = pooh;

var bees = {
  character: "Bees"
}
bees.north = rabbit;
bees.west = pooh;

var eeyore = {
  character: "Eeyore"
}
eeyore.south.kanga;
eeyore.east = heffalumps;

var heffalumps = {
  character: "Heffalumps"
}
heffalumps.west = eeyore;

var player = {
  location: ""
}

function playGame (player) {
  
}