export function createMenuSection() {
    const section = document.createElement("section");
    section.classList.add("menu");

    const foodItems = document.createElement("div");
    foodItems.classList.add("food-items");

    const foods = [
        { name: "Spicy Potato", price: "$12.0", class: "food1" },
        { name: "Pasta", price: "$12.0", class: "food2" },
        { name: "Garlic Bread", price: "$14.0", class: "food3" },
        { name: "Grilled Salmon", price: "$124.0", class: "food4" },
        { name: "Tomato Soup", price: "$30.0", class: "food5" },
        { name: "Italian Nachos", price: "$200.0", class: "food6" },
    ];

    foods.forEach((food) => {
        const foodBox = document.createElement("div");
        foodBox.classList.add("food-box");

        const foodImg = document.createElement("div");
        foodImg.classList.add(food.class); // Use CSS class for background image

        const foodTitle = document.createElement("div");
        foodTitle.classList.add("food-title");
        foodTitle.textContent = food.name;

        const price = document.createElement("p");
        price.textContent = food.price;

        foodBox.appendChild(foodImg);
        foodBox.appendChild(foodTitle);
        foodBox.appendChild(price);
        foodItems.appendChild(foodBox);
    });

    section.appendChild(foodItems);
    return section;
}
