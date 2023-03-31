// Defining basics of using TS with Primitive Data types
// Documentaion link
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean

// String Number Boolean Arrray

//String Type
let data: string = "hbyfbgv";

// Number Types
let numberData: number = 54;

//Boolean Type
let isUser: boolean = false;

function Sum(a: number, b: number) {
  return a + b;
}
Sum(45, 54);

// Array Types

const userNumberData: number[] = [1, 3, 4];
// Using Array ShorrtHand propertis 
// Link : https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type
const userNumberData2:Array<number> = [1,2,3,4]

const userStringData: string[] = ["ab", "ba", "ca"];
const userStringData2:Array<string>= ["ab", "ba", "ca"];

userNumberData.push(45);

userStringData.push("random");

// Using Object Types Data with Typescript
const userDetails: { firstName: string; lastName: string; phone: number } = {
  firstName: "typeScript",
  lastName: "tutorial",
  phone: 75657747,
};

// Returning specific time from the function

function returnUserDetails(): { firstName: string; lastName: string } {
  return { firstName: "Learn", lastName: "Typescript" };
}

//Function with no return types /void

function printUserDetails(): void {
  console.log("User", { firstName: "Learn", lastName: "Typescript" });
}
