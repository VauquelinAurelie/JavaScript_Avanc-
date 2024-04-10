const date = new Date();

const [day, month, year] = [
date.getDate(),
date.getMonth() + 1,
date.getFullYear(),
]

let dateFormate = day + '/' + month + '/' + year;

console.log("Nous sommes le " + dateFormate);