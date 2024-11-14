const puppies = [
    {
        name: "Bella",
        breed: "Golden Retriever",
        age: "3 months",
        image: "https://example.com/image1.jpg",
        description: "A playful and friendly Golden Retriever puppy!"
    },
    {
        name: "Charlie",
        breed: "Labrador",
        age: "4 months",
        image: "https://example.com/image2.jpg",
        description: "A cheerful Labrador puppy who loves to cuddle!"
    },
    {
        name: "Lucy",
        breed: "Poodle",
        age: "2 months",
        image: "https://example.com/image3.jpg",
        description: "An intelligent and charming Poodle puppy!"
    }
];

const renderPuppies = () => {
    const puppyList = document.querySelector('.puppy-list');
    puppies.forEach(puppy => {
        const puppyCard = document.createElement('div');
        puppyCard.classList.add('puppy-card');
        puppyCard.innerHTML = `
            <img src="${puppy.image}" alt="${puppy.name}">
            <h3>${puppy.name}</h3>
            <p>Breed: ${puppy.breed}</p>
            <p>Age: ${puppy.age}</p>
            <p>${puppy.description}</p>
            <button onclick="alert('Interested in ${puppy.name}? Contact us!')">Adopt Me</button>
        `;
        puppyList.appendChild(puppyCard);
    });
};

document.addEventListener('DOMContentLoaded', renderPuppies);
