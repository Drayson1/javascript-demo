const nazwaZmiennej = "Wartość zmiennej";

let firstname = "Jan";
let lastname = "Kowalski";
let city = "Katowice";

console.log(`Użytkownik to ${firstname} ${lastname} jego miasto to ${city}.`);

const day = "Środa"; // stała
let month = "Maj"; //zmienna
month = "Czerwiec";


const result = `Dzisiaj ${day}. Miesiąc: ${month}`;

console.log(result);
console.log(result);
console.log(result);

// TYPY:
// - typ string
// - typ number


const num1 = 5;
const num2 = 2;
console.log(num1 + num2);

const imie = "Alan";
const zwierze = "pies";
const kolor = "niebieski";

const d = new Date();
let rok = d.getFullYear();




console.log(`Mam na imie ${imie}, moje ulubione zwierze to ${zwierze}. Obecny rok to ${rok}. Dzisiaj jest ${d}`);

const title = document.getElementById("PageTitle");
const msg = "Elo";
title.textContent = msg;
title.classList.add("customTitle");
console.log(title);

console.log(document.getElementById("Subtitle"));

const subtitle = document.getElementById("Subtitle");
const msg2 = "No siema";

subtitle.textContent = msg2;

subtitle.style.color = "red";
subtitle.style.fontSize = "20px";

// -----------------------------------

console.log(document.getElementById("City"));
const citys = document.getElementById("City");
const citym = "Łaziska Górne";
city.textContent = citym;

const color = document.getElementById("Color");
const colorm = "Niebieski";
color.textContent = colorm;

const hobby = document.getElementById("Hobby")
const hobbym = "Wspinaczka"
hobby.textContent = hobbym;

city.style.color = "blue"
color.style.color = "orange"
hobby.style.color = "green"

function showUser() {
    console.log("Jan Kowalski");
}

showUser()

function userInfo(username, age) {
    console.log(`To jest ${username} i ma ${age} lat`);
}
userInfo("Zbyszek", 18)

function triangleArea(a, h) {
    const result = (a * h) / 2;
    console.log(result);
}
triangleArea(9, 20)

// -----------------------------------------------------

const title = document.getElementById("Title");
const btn = document.getElementById("Btn");

console.log(title, btn);

function changeColor() {
    title.textContent = "Yo World";
    title.style.color = "red";
    title.style.fontSize = "50px";
};

btn.addEventListener("click", changeColor);

const funkcjaStrzalkowa = (a) => {
    console.log(a);
}
funkcjaStrzalkowa("ssss")

const arrowFn = (a, b) => { a + b }

arrowFn(5, 4);


