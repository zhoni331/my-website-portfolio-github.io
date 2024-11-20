const items = ["Hat", "Scarf", "Gloves", "Boots", "Coat"];

// Using a for loop to iterate over the array
console.log("Using for loop:");
for (let i = 0; i < items.length; i++) {
    console.log("Item " + (i + 1) + ": " + items[i]);
}

// Using a while loop to iterate over the array
console.log("\nUsing while loop:");
let index = 0;
while (index < items.length) {
    console.log("Item " + (index + 1) + ": " + items[index]);
    index++;
}