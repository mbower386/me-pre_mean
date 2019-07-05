var chris = {
  character: "Christopher Robin",
  hasHoney: true,
  greet: function () {
    console.log("Where is Chris?");
  }
}
chris.north = kanga;
chris.south = pooh;
chris.east = rabbit;
chris.west = owl;

var kanga = {
  character: "Kanga",
  hasHoney: false,
  greet: function () {
    console.log("Where is Kanga?");
  }
}
kanga.north = eeyore;
kanga.south = chris;

var pooh = {
  character: "Winnie the Pooh",
  hasHoney: false,
  greet: function () {
    console.log("Where is Pooh?");
  }
}
pooh.north = chris;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;

var rabbit = {
  character: "Rabbit",
  hasHoney: true,
  greet: function () {
    console.log("Where is Rabbit?");
  }
}
rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = chris;

var gopher = {
  character: "Gopher",
  hasHoney: "falst",
  greet: function () {
    console.log("Where is Gopher?");
  }
}
gopher.west = rabbit;

var tigger = {
  character: "Tigger",
  hasHoney: false,
  greet: function () {
    console.log("Where is Tigger?");
  }
}
tigger.north = pooh;

var owl = {
  character: "Owl",
  hasHoney: false,
  greet: function () {
    console.log("Where is Owl?");
  }
}
owl.south = piglet;
owl.east = chris;

var piglet = {
  character: "Piglet",
  hasHoney: false,
  greet: function () {
    console.log("Where is Piglet?");
  }
}
piglet.north = owl;
piglet.east = pooh;

var bees = {
  character: "Bees",
  hasHoney: true,
  greet: function () {
    console.log("Where are Bees?");
  }
}
bees.north = rabbit;
bees.west = pooh;

var eeyore = {
  character: "Eeyore",
  hasHoney: false,
  greet: function () {
    console.log("Where is Eeyore?");
  }
}
eeyore.south = kanga;
eeyore.east = heffalumps;

var heffalumps = {
  character: "Heffalumps",
  hasHoney: false,
  greet: function () {
    console.log("Where is Heffalumps?");
  }
}
heffalumps.west = eeyore;

var player = {
  location: tigger,
  hasHoney: false,
  destination: ""
}

function mission() {
  player.destination = heffalumps
}

function move(location) {
  if (location == "north" && player.north != null) {
    location = player.north;
    console.log("You are now at " + location + "'s house.");
    location.greet();
  }
  if (location == "south" && player.south != null) {
    location = player.south;
    console.log("You are now at " + location + "'s house.");
    location.greet();
  }
  if (location == "east" && player.east != null) {
    location = player.east;
    console.log("You are now at " + location + "'s house.");
    location.greet();
  }
  if (location == "west" && player.west != null) {
    location = player.west;
    console.log("You are now at " + location + "'s house.");
    location.greet();
  } else {
    console.log("You may not go that way!");
  }
}

function pickUp() {
  if (player.location.hasHoney = true) {
    player.hasHoney = true;
    location.hasHoney = false;
  } else {
    console.log(location + " doesn't have honey!");
  }
}

function drop() {
  if (player.location.hasHoney = false) {
    player.hasHoney = false;
    location.hasHoney = true;
  } else {
    console.log(location + " already has honey!");
  }
}