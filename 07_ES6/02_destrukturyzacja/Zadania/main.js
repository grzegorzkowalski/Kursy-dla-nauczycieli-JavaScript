//Zadanie 5

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = (animal) => {
    const {name, age: catAge, getVoice} = animal;

    return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`;
}

console.log(showAnimal(cat));


//Opcja
const showAnimal2 = ({name, age: catAge, getVoice}) => `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`;

console.log(showAnimal2(cat));