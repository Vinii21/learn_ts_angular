export function whatsMyType<T>(argument: T): T {
    
    return argument;
}

const amIString = whatsMyType<string>("Hola");
const amINumber = whatsMyType<number>(2);
const amIArray = whatsMyType<number[]>([1,2,3,4]);

console.log(amIString);
console.log(amINumber);
console.log(amIArray);