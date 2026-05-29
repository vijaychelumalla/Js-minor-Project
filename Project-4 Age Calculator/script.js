let dob = document.getElementById('dob');
let result = document.getElementById('result');

function calculateAge(){

    let birthDate = new Date(dob.value);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDiff = today.getMonth() - birthDate.getMonth();

    if(
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ){
        age--;
    }

    result.textContent = `Your age is ${age} years`;
}