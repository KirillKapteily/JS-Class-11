//1
const cat = {
    name: 'Leila',
    age: 3,
    woolColor: 'orange-black-white'
}

const washingMashine = {
    name: "LG",
    color: "white",
    power: 300,
    wash() {
        console.log("Washing...");
    }
}

console.log(washingMashine);
console.log(washingMashine.name);
console.log(washingMashine.color);
console.log(washingMashine["power"]);

washingMashine.panel = "new";

console.log(washingMashine.panel);

console.log(washingMashine);

washingMashine.wash()

//2
const person = {
    name: " Lisa",
    age: 18,
    gender: " Girl",
    say() {
        console.log("Hello! I'm" + this.name + " I'm " + this.age + " years old " + "I'm" + this.gender);

    }
}

person.say()

//3
const book = {
    title: "How to beat cursed disk",
    autor: "Kirill",
    year: "2025",
    genre: "action",
    chacge(newTitle, newAutor, newYear, newGenre) {
        this.title = newTitle;
        this.autor = newAutor;
        this.year = newYear;
        this.genre = newGenre; 
        
    }
};

console.log(book);

book.chacge("How to beat an enemy", "Kris", "2023", "fantastic");

console.log(book); 
