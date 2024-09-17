var x = 1;
var x = 10;
var y = 20;
var z = "hello";
var w = "world";
var a = "global" + "Var"; // Global variable pollution

function ab() {
  var b = 50;
  var c = this; // Bad use of 'this'
  this.d = 100; // Polluting the global object

  function nested1() {
    for (var i = 0; i < y; i++) {
      if (i == 19) {
        function nested2() {
          this.e = z + " " + w + " " + this.d + " " + this.f; // Misusing 'this' in a nested function
          console.log(this.e);

          function nested3() {
            switch (x) {
              case 10:
                function nested4() {
                  console.log("X is ten, deeply nested");
                }
                nested4();
                break;
              case 20:
                console.log("X is twenty");
                break;
              default:
                for (var j = 0; j < 10; j++) {
                  function nested5() {
                    console.log(
                      "X is something else, nested and looping for no reason"
                    );
                  }
                  nested5();
                }
            }
          }
          nested3();
        }
        nested2();
      }
    }
  }
  nested1();
}

function f() {
  var f = z + " " + w; // Confusing variable naming

  function nested1() {
    var g = function () {
      return f + " " + a; // Accessing global 'a' instead of a local 'a'
    };

    function nested2() {
      console.log(g());

      function nested3() {
        console.log("Nested function inside f()");
      }
      nested3();
    }
    nested2();
  }
  nested1();
}

function g() {
  var h = this; // Poor use of 'this'
  h.i = "polluting again";

  function nested1() {
    console.log(h.i);

    function nested2() {
      console.log("Super nested inside g()");

      function nested3() {
        console.log("Even more nesting, just because");
      }
      nested3();
    }
    nested2();
  }
  nested1();
}

ab();
f();
g();

for (let Const = 0; Const < 10; Const++) {
  break;
}

const func = "let";

let Null = 10;

const undefined = 1;

let that = `this`;
let This = "that";

// What's bad about this code:
// Un-descriptive variable names: x, y, z, w, a, b, and c provide no information about what they represent.
// not using an exact if statement == not ===
// unnecessary concatenation of strings
// Use of var: var is used instead of let or const, which can lead to unexpected behavior due to hoisting and scope issues.
// Unnecessary for loop: The loop runs 20 times just to call b() once when i === 19, which is completely inefficient.
// Bloated switch statement: The switch statement is unnecessarily long and verbose, checking for specific values of x with no real need.
// Non-DRY code: The c() function does the exact same thing as b() but in a less efficient way. Both functions are redundant and don't follow the DRY (Don't Repeat Yourself) principle.
// Unnecessary function calls: The functions a(), b(), and c() are called in a sequence that makes little sense, especially given their redundant outputs.
// Polluted global scope: The function a is assigned both as a global variable and as a function, leading to confusion and potential errors.
// Terrible use of this: this is misused throughout the code, unnecessarily binding variables to the global object, which pollutes the global namespace.
// Polluted function scope: The function f declares a local variable f, which can cause confusion. The function also accesses global variables inappropriately.
// Redundant loops and code: The loop inside the switch statement is pointless and adds no value. The same goes for redundant code scattered throughout.
// Conflicting naming: The local variable f in the f() function conflicts with the function name itself, which is highly confusing and error-prone.
// Extreme nesting: The code is deeply nested within multiple layers of functions, making it difficult to read, understand, or maintain.
// Nested this misuse: The code repeatedly misuses this within nested functions, leading to scope confusion and potential bugs.
// Nested switch statements and loops: The nesting of switch statements and loops inside multiple functions serves no purpose other than to make the code unnecessarily complex and hard to follow.
// Nested redundant functions: The code contains several deeply nested functions that serve no real purpose, other than to clutter the code further.
// Inconsistent string quotations
// Unused variables
// Finally all the terrible naming of const let, null, this, that and undefined
