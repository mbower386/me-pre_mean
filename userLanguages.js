var users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(users) {
  var userinfo;
  var str = [];
  for (var i = 0; i < users.length; i++) {
    userinfo = "";
    userinfo += users[i].fname + " " + users[i].lname + " knows ";
    for (var j = 0; j < users[i].languages.length; j++) {
      userinfo += users[i].languages[j];

      if (j < users[i].languages.length - 2) {
        userinfo += ", ";
      }
      if (j == users[i].languages.length - 2) {
        userinfo += ", and ";
      }
      if (j == users[i].languages.length - 1) {
        userinfo += ".";
      }
    }

    str.push(userinfo);
  }

  return str;
}

console.log(userLanguages(users));