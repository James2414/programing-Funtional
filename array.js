const keys = ["name", "life", "power", "talk"];
const values = ["Manz", 99, 10, function() { return "Hola" }];

const entries = [];
for (let i of Object.keys(keys)) {
  const key = keys[i];
  const value = values[i];
  entries.push([key, value]);
}

const user = Object.fromEntries(entries);   // {name: 'Manz', life: 99, power: 10, talk: ƒ}


console.log(entries)