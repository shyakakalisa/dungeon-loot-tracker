
let lootItems = [];

const nameInput = document.getElementById("lootName");
const valueInput = document.getElementById("lootValue");
const addButton = document.getElementById("addLoot");
const lootList = document.getElementById("lootList");
const totalValue = document.getElementById("totalValue");
const message = document.getElementById("message");

addButton.addEventListener("click", function () {
    let name = nameInput.value.trim();
    let valueText = valueInput.value.trim();
    let value = Number(valueText);

    // Make sure the user enters valid information.
    if (name === "") {
        message.textContent = "Please enter a loot name.";
        return;
    }

    if (valueText === "" || !Number.isFinite(value)) {
        message.textContent = "Please enter a valid number.";
        return;
    }

    if (value < 0) {
        message.textContent = "Loot value cannot be negative.";
        return;
    }

    message.textContent = "";

    let newLoot = {
        name: name,
        value: value
    };

    lootItems.push(newLoot);

    // Update the list after adding a new item.
    lootList.replaceChildren();

    for (let i = 0; i < lootItems.length; i++) {
        let item = document.createElement("li");

        item.textContent = lootItems[i].name +
            " - " + lootItems[i].value;

        lootList.appendChild(item);
    }

    // Add the values of all loot items together.
    let total = 0;

    for (let i = 0; i < lootItems.length; i++) {
        total += lootItems[i].value;
    }

    totalValue.textContent = total;

    nameInput.value = "";
    valueInput.value = "";
});

/*
Debugging Reflection:
After using a breakpoint, I observed that:

Before adding the item, the loot array contained:
[write what you saw]

After the push method, the array contained:
[write what you saw]

The array changed when:
[write what you observed]

The interface updated when:
[write what you observed]
*/

