// CRAD GAME
function getApi() {
    const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
    
    fetch(apiUrl)
      // Response handling
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json(); // Return the parsed JSON response
      })
      // Data handling
      .then(data => {
        console.log("API data..:", data);
  
        // Extract the image URL from the response
        if (data.success && data.cards.length > 0) {
          const cardImage = data.cards[0].image; // Get the image URL of the first card
          console.log("Card Image URL:", cardImage); // Log the image URL
  
          // Get the div element where the image will be displayed
          const bildDiv = document.getElementById('bild');
          
          // Create an img element
          const imgElement = document.createElement('img'); // Create an img element
          imgElement.src = cardImage; // Set the source to the card image URL
          imgElement.alt = `Card: ${data.cards[0].value} of ${data.cards[0].suit}`; // Set an alt text for accessibility
          
          // Clear previous images (optional)
          bildDiv.innerHTML = ''; // Clear any previous images from the div
          
          // Append the image element to the div
          bildDiv.appendChild(imgElement); // Append the image to the div
        } else {
          console.log("No cards drawn or unsuccessful response.");
        }
      })
      // Catch any errors
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Add event listener to the button
  document.getElementById('submit-btn').addEventListener('click', getApi);
  