// reduce redundency

// let type = 'quartz';
// let color = 'rose';
// let carat = 21.29;

// const gemstone = {
//   type: type,
//   color: color,
//   carat: carat
// };

// console.log(gemstone);

//above code is equivalent to

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {type,color,carat}

console.log(gemstone);

//SHORTHAND TO ADD METHODS TO OBJECTS.

let gemstone = {
    type,
    color,
    carat,
    foo() {
        //some code
    }
  };
  

