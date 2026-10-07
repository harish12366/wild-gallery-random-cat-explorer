// ==========================================
// API URL
// ==========================================

const apiUrl =
    "https://api.thecatapi.com/v1/images/search";


// ==========================================
// Get HTML elements
// ==========================================

const generateButton =
    document.getElementById("generate-button");

const imageContainer =
    document.getElementById("image-container");

const message =
    document.getElementById("message");

const imageStatus =
    document.getElementById("image-status");


// ==========================================
// Fetch Random Cat
// ==========================================

async function fetchRandomCat() {

    // Show loading state
    message.textContent =
        "Finding a new friend...";

    imageStatus.textContent =
        "Loading";


    try {

        // Send request to API
        const response =
            await fetch(apiUrl);


        // Check whether request was successful
        if (!response.ok) {

            throw new Error(
                "Unable to fetch cat image."
            );

        }


        // Convert response into JavaScript data
        const data =
            await response.json();


        // Get image URL from API response
        const imageUrl =
            data[0].url;


        // Display image
        displayCatImage(imageUrl);


        // Update status
        message.textContent =
            "Your new friend is ready! 🐱";

        imageStatus.textContent =
            "Ready";


    } catch (error) {

        // Handle API errors
        console.error(error);

        message.textContent =
            "Unable to load a cat. Please try again.";

        imageStatus.textContent =
            "Error";

    }

}


// ==========================================
// Display Cat Image
// ==========================================

function displayCatImage(imageUrl) {

    // Clear previous content
    imageContainer.innerHTML = "";


    // Create image element
    const image =
        document.createElement("img");


    // Set image source
    image.src = imageUrl;


    // Set alternative text
    image.alt =
        "Random cat image";


    // Add image to container
    imageContainer.appendChild(image);

}


// ==========================================
// Button Event
// ==========================================

generateButton.addEventListener(
    "click",
    fetchRandomCat
);