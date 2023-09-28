export interface Passanger {
    name: string;
    children?: string[];
}

const passangerOne: Passanger = {
    name:"Vinicio"
};

const passangerTwo: Passanger = {
    name:"Sonia",
    children: ["Natalia", "Elizabeth"]
};

const printChlidren = ( passenger: Passanger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(howManyChildren)
}

printChlidren(passangerTwo)
printChlidren(passangerOne)