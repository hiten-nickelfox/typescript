// Learn how to use union for typescript


// Using union for types declarations
const rollNumber:string|number = "45"
const randomData:string|number|boolean = false;

// Note:TypeScript will only allow an operation if it is valid for every member of the union
// This will through an error becaues toUpperCase is valid only for string and in unin types
// we have defined both number and string so ts will check for both types defined in union
function printId(id: number | string) {
    console.log(id.toUpperCase());
}

//This would work as we are explicityly telling to do an uppercase only if the id is string
function printId2(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }

// Intersection Types 
Link:https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
type ColorfulCircle = Colorful & Circle;

function checkColor(colorData:ColorfulCircle){
  console.log("ColorData",colorData)
}
checkColor({radius:34,color:"random"})