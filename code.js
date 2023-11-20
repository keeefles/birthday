const btnSubmit = document.querySelector('[data-submit]')
btnSubmit.addEventListener('click', birthday)

let input1 = document.getElementById('firstName');
let input2 = document.getElementById('dateOfBirth');

let today = new Date();

birthday.setFullYear(today.getFullYear());
if (today > birthday) {
  birthday.setFullYear(today.getFullYear() + 1);
}

Math.floor((birthday - today) / (1000*60*60*24))
