// Readonly<Type>

// Link :https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
// Constructs a type with all properties of Type set to 
// readonly, meaning the properties of the constructed 
// type cannot be reassigned.

// Example
interface Todo1 {
  title: string;
}
 
const todo1: Readonly<Todo1> = {
  title: "Delete inactive users",
};
 
todo1.title = "Hello";


// Record<Keys, Type>

// Constructs an object type whose property keys are Keys 
// and whose property values are Type. This utility can be 
// used to map the properties of a type to another type.
// Link :https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type

interface CatInfo {
    age: number;
    breed: string;
  }
   
type CatName = "miffy" | "boris" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };
   
  cats.boris;



//   Partial<Type>

// Constructs a type with all properties of Type set to optional. 
// This utility will return a type that represents all subsets of a given type.
// Link:https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype

// Example
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo2 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo3 = updateTodo(todo2, {
  description: "throw out trash",
});

// Omit<Type, Keys>
// Constructs a type by picking all properties from Type and 
// then removing Keys (string literal or union of string literals).
// Link:https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys

interface Todo5 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TodoPreview = Omit<Todo5, "description">;
   
  const todo5: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };
   
  todo5;
   
  type TodoInfo = Omit<Todo5, "completed" | "createdAt">;
   
  const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
  };
   
  todoInfo;

  // For more Infromations on other utility Types refer this Link
  // Link: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
