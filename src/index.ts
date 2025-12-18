interface Detail{
    name: string,
    age: number,
    isChecked: boolean,
    fontSize: number,
}

const detail: Detail ={
    name: "Seun Ajao",
    age: 28,
    isChecked: true,
    fontSize: 16,
}

console.log(`Name: ${detail.name}`);
console.log(`Age: ${detail.age}`);
console.log(`Checked: ${detail.isChecked}`);
console.log(`Font Size: ${detail.fontSize}`);