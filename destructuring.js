//Destructuring from array

const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);

//Destructuring from object

const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
  };
  
  const {type, color, carat} = gemstone;
  
  console.log(type, color, carat);