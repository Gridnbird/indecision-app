var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jen';
nameLet = 'Julie'; // reasign
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nameConst', nameConst);

/* dont work
function getPetName() {
    var petName = 'Tom';
    return petName;
}
getPetName();
console.log(petName);
*/

// this work
function getPetName() {
    const petName = 'Tom';
    return petName;
}
const petName = getPetName();
console.log(petName);

// Block scoping
var fullName = 'Andrew Mead';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}