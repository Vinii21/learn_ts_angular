export class Person {
    //public name:string;
    //private address: string;

    constructor(public name: string, private address: string) {}
}

/* export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, "París")
    }
} */

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person    ) {
        
    }
}

const tony = new Person("Tony", "New York")
const ironman = new Hero("Iron-man", 45, "Tony", tony);

console.log(ironman)