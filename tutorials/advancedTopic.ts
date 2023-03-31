//Uisng Types alisas

// Docs Link: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

//Preferd approach when we want to create a type and reuse it 

// Using union in typsecript
const userData :number|string="randomdaata"

// Creating an object type using type
type Point = {
    x: number;
    y: number;
  };
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 100, y: 100 });

// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
  type userData = number|string
  function getUserDetails(user:userData){
    console.log(user);
  }

// Using  Interfaces in typescript
// An interface declaration is another way to name an object type:
// Note:Its useful only for objectTypes
interface Point1{
    x: number;
    y: number;
  };
  // Exactly the same as the earlier example
  function printCoord1(pt: Point1) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 100, y: 100 });

//   Differences Between Type Aliases and Interfaces
//   Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
//   Almost all features of an interface are available in type, the key distinction is that a type cannot 
//   be re-opened to add new properties vs an interface which is always extendable.
//   Link :https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces


// Type Assetions
// Useful in situations where  we have the infromation about the type of a value that TypeScript can’t know about.
// Link :https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement


// USing Enums in Ts
// Enums allow a developer to define a set of named constants. 
// Using enums can make it easier to document intent, or create a set of 
// distinct cases. TypeScript provides both numeric and string-based enums.
//Link: https://www.typescriptlang.org/docs/handbook/enums.html

// Numeric Enums
enum Direction {
  Up = 1,
  Down,
  Left,
}
  // Above, we have a numeric enum where Up is initialized with 1. 
  // All of the following members are auto-incremented from that point on. 
  // In other words, Direction.
  // Up has the value 1, Down has 2, Left has 3, and Right has 4.

//If we wanted, we could leave off the initializers entirely:

enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}
// Uisng enum example
enum UserResponse {
  No = 0,
  Yes = 1,
}
 
function respond(recipient: string, message: UserResponse): void {
  console.log(message,recipient)
  // This will print(Princess Caroline,1)
}
respond("Princess Caroline", UserResponse.Yes);

