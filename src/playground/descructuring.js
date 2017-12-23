// const Book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisheName = "Self-Published"} = Book.publisher;

// console.log(publisheName);

//-----------------------------------------------------------------------------------
// Array Destructuring
//-----------------------------------------------------------------------------------


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, small, medium, larg] = item;

console.log(`A small ${coffee} costs ${small}`);
