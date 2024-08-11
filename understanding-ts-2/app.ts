enum Sport{ADMIN, READ_ONLY, AUTHOR}  //enums

const person = {                 //object
  name: 'Aditya',                //string
  age: 21,                       //number
  hobby: ['Cricket', 'Football'],//array
  role: Sport.ADMIN,
};

// true and false are boolean values.
// number can be both with decimal and without decimal values.
//type of array elements can also be defined.
//type of object elements can also be defined.
//any is another core data type which means any type of data can be stored without any restrictions. 
//NOTE:- Try to avoid "any" data type as much as possible in order to get most advantage from typescript.

console.log(person.name);
console.log(person.age);
for(const hobbies of person.hobby){
  console.log(hobbies);
}
console.log(person.role);
if(person.role === Sport.AUTHOR){
  console.log('yes');
} else{
  console.log('false');
}

// union types

function combine(input1: number | string, input2: number | string){
  if(typeof input1 === 'number' && typeof input2 === 'number'){
    return input1 + input2;
  } else{
    return input1.toString() + input2.toString();
  }
}

console.log(combine(20, 30));
console.log(combine('Aditya ', 'Sharma'));

//custom types

type combineable = number | string;
type literalType = 'as-number' | 'as-text';
type User = { name: string; age: number };
const u1: User = { name: 'Aditya', age: 20 };
console.log(u1.name);

//literals

function combine2(input1: combineable, input2: combineable, resultConversion: literalType){
  let result;  
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
      result = +input1 + +input2;
    } else{
      result = input1.toString() + input2.toString();
    }

    return result;

    // if(resultConversion === 'as-number') {
    //   return +result;
    // } else{
    //   return result.toString();
    // }
}

console.log(combine2(30, 26, 'as-number'));
console.log(combine2('30', '26', 'as-number'));
console.log(combine2('Aditya ', 'Sharma', 'as-text'));

// 'Function' Type

let combination: (n1: number | string, n2: number | string) => number | string;
combination = combine;
console.log(combination(1,2));
