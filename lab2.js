/*********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.
 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
function Blob(population,peoplePerHour) {
  this.numberOfPeopleEaton = 0;
  this.hoursSpentInTown = 0;
  this.hoursToOoze = function() {
    while (this.numberOfPeopleEaton < population) {
    this.hoursSpentInTown += 1;
    //Triangular Formula for consumption rate.
    this.numberOfPeopleEaton = ((this.hoursSpentInTown*(this.hoursSpentInTown+1))/2)*peoplePerHour;
      if (this.numberOfPeopleEaton >= population) {
      console.log(this.hoursSpentInTown);
      }
    };
  }
};

var blob = new Blob(1000,1);

var hoursSpentInDowington = blob.hoursToOoze();

console.log(hoursSpentInDowington);
quit;
///var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

//function hoursToOoze(population, peoplePerHour) { This was incorporated into the method above.
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.


assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(hoursSpentInDowington === 45, "correct answer is 45");
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (home,language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.home = home;
  this.language= language
};

// sb is a SentientBeing object
SentientBeing.prototype.sayHello =function() {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    //TODO: put this on the SentientBeing prototype
  if (this.language === 'klingon') {
    console.log(hello.klingon);
  } else if (this.language === 'romulan') {
    console.log(hello.romulan);
  } else if (this.language === 'federation standard') {
    console.log(hello["federation standard"]);
  };
}

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing("Qo\"noS", "klingon"); // TODO: fix me
var romulan = new SentientBeing("Romulus", "romulan"); // TODO: fix me
var human = new SentientBeing("Earth", "federation standard"); // TODO: fix me


assert(human.sayHello(klingon) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
quit;
//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
}

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
