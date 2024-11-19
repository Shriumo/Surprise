<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Moomin Surprise</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <!-- Moomin Image -->
    <div class="moomin-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOZ2Q90Y5jCorptlwda8H8FOAuoydQNp-fw&s" alt="Moomin" id="moomin" class="moomin-img">
    </div>
    
    <!-- Surprise Box -->
    <div id="surpriseBox" class="surprise-box">
      <h2>Surprise Song: <span id="songName"></span></h2>
    </div>

    <!-- Willobhy Message -->
    <div id="willobhyMessage" class="willobhy-message">
      <p>Willobhy!</p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
// Array of songs mixed up from the mentioned artists
const songs = [
  'Sinsters - "Dead Love"',
  'Lelio Luttazzi - "La Vita è una Cosa Meravigliosa"',
  'Video Days - "Kissed By The Sun"',
  'Garoto - "Cavatina"',
  'Alberto Baldan Bembo - "Verano"',
  'Menahan Street Band - "Home Again"',
  'Sinsters - "Love Me"',
  'Lelio Luttazzi - "Ricordati di me"',
  'Street Band - "Running Out of Time"',
  'Alberto Baldan Bembo - "Marechiaro"',
  'Sinsters - "The Day I Met You"',
  'Video Days - "Lazy Afternoon"',
  'Garoto - "Sonho de Carnaval"',
  'Alberto Baldan Bembo - "La Musica è Finita"',
  'Street Band - "I Can\'t Get Enough"',
  'Lelio Luttazzi - "Città Vuota"',
  'Garoto - "Choro de Saudade"',
  'Video Days - "Sunset Dream"',
  'Sinsters - "Fading Away"',
  'Menahan Street Band - "Make the Road by Walking"',
  'Street Band - "Love Like This"',
  'Sinsters - "Strangers in the Night"',
  'Lelio Luttazzi - "Anima Libera"',
  'Garoto - "Choro de Saudade"',
  'Alberto Baldan Bembo - "Sospeso"',
  'Video Days - "Electric Heart"',
  'Menahan Street Band - "The Crossing"',
  'Alberto Baldan Bembo - "Città Senza Cuore"',
  'Sinsters - "Forever Gone"',
  'Street Band - "Without You"',
  'Lelio Luttazzi - "Quando Vedo Te"',
  'Garoto - "Moleque Doido"',
  'Sinsters - "Strangers in the Night"',
  'Menahan Street Band - "Belly of the Beast"',
  'Alberto Baldan Bembo - "Marechiaro"',
  'Sinsters - "Midnight Blues"',
  'Lelio Luttazzi - "Giovane Gente"',
  'Street Band - "I Can\'t Get Enough"',
  'Sinsters - "Unspoken Words"',
  'Alberto Baldan Bembo - "Sospeso"',
  'Garoto - "Valsa de uma cidade"',
  'Menahan Street Band - "Lights On"',
  'Sinsters - "Breaking Point"',
  'Alberto Baldan Bembo - "Amore Mio"',
  'Street Band - "Running Out of Time"',
  'Sinsters - "I Won\'t Cry"',
  'Lelio Luttazzi - "Perfidia"',
  'Sinsters - "No Way Out"',
  'Video Days - "You and Me"',
  'Garoto - "Lamento"'
];

// Array of background colors
const backgroundColors = [
  'linear-gradient(45deg, #ff7e5f, #feb47b)', // Pink to Yellow
  'linear-gradient(45deg, #6a11cb, #2575fc)', // Purple to Blue
  'linear-gradient(45deg, #ff9a8b, #ff6a00)', // Pink to Orange
  'linear-gradient(45deg, #00c6ff, #0072ff)', // Blue to Dark Blue
  'linear-gradient(45deg, #f2709c, #ff9472)', // Light Pink to Light Orange
  'linear-gradient(45deg, #4facfe, #00f2fe)'  // Light Blue to Cyan
];

// Select HTML elements
const moomin = document.getElementById('moomin');
const surpriseBox = document.getElementById('surpriseBox');
const songName = document.getElementById('songName');
const willobhyMessage = document.getElementById('willobhyMessage');

// Function to display a random song from the array
function showRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  songName.textContent = songs[randomIndex];  // Display the selected song
  
  // Display the surprise box with smooth fade-in
  surpriseBox.style.display = 'block';
  setTimeout(() => {
    surpriseBox.style.opacity = '1';  // Fade in the surprise box
  }, 50);  // Small delay to trigger the opacity change

  // Fade the surprise box out smoothly after 5 seconds
  setTimeout(() => {
    surpriseBox.style.opacity = '0';  // Fade it out
  }, 5000);

  // After fading out, set display to none to avoid layout issues
  setTimeout(() => {
    surpriseBox.style.display = 'none';
    surpriseBox.style.opacity = '1';  // Reset opacity for next click
  }, 7000); // Allow fade-out to complete before hiding the box
}

// Function to display "Willobhy!" message
function showWillobhyMessage() {
  willobhyMessage.style.display = 'block';  // Show the message
  setTimeout(() => {
    willobhyMessage.style.transition = 'opacity 2s ease';  // Set smooth transition for fade-out
    willobhyMessage.style.opacity = '0';  // Fade out the message
  }, 2000);

  // After fading out, hide the message completely
  setTimeout(() => {
    willobhyMessage.style.display = 'none';
    willobhyMessage.style.opacity = '1';  // Reset opacity for next click
    willobhyMessage.style.transition = 'none';  // Disable transition until next time
  }, 4000); // Allow fade-out to complete before hiding the message
}

// Function to change the background color every 10 seconds
function changeBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  document.body.style.background = backgroundColors[randomIndex];  // Apply the new background color
}

// Handle Moomin click event
moomin.addEventListener('click', () => {
  showRandomSong();  // Display a random song from the list
  showWillobhyMessage();  // Show the "Willobhy!" message
});

// Change the background color every 10 seconds (10,000 milliseconds)
setInterval(changeBackgroundColor, 10000);

// Initial background color change when the page loads
changeBackgroundColor();



/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  transition: background-color 1s ease;
  background: linear-gradient(45deg, #ff7e5f, #feb47b); /* Initial background color */
}

/* Moomin Container */
.moomin-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
  z-index: 10; /* Ensures the Moomin image is on top */
}

/* Moomin Image Styling */
.moomin-img {
  width: 200px;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  animation: floatAndRotate 4s infinite alternate ease-in-out;
}

/* Hover Effect for Scaling */
.moomin-img:hover {
  transform: scale(1.2) rotate(10deg);  /* Scale up and rotate slightly */
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8); /* Glowing effect on hover */
}

/* Floating and Rotation Animation (while idle) */
@keyframes floatAndRotate {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg); /* Moves up and rotates */
  }
  100% {
    transform: translateY(0) rotate(0deg); /* Goes back to original position */
  }
}

/* Surprise Box */
.surprise-box {
  display: none;
  margin-top: 30px;
  padding: 20px;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;  /* Start hidden */
  transition: opacity 1s ease-out;  /* Smooth transition for fade */
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5em;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Cute font for the song display */
}

/* Willobhy Message */
.willobhy-message {
  position: absolute;
  bottom: 20px;
  width: 100%;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  display: none;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Matching font for the message */
}

/* Animation for Showing the Surprise Box */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Animation for Song Fade-in */
@keyframes songFadeIn {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

.surprise-box h2 {
  font-size: 1.3em; /* Smaller font for song and artist */
  font-family: 'Arial', sans-serif;
  color: white;
  animation: songFadeIn 6s ease-in-out forwards; /* Fade effect for song name */
}

.surprise-box span {
  font-size: 1.2em; /* Smaller font for the artist name */
  font-style: italic;
  color: #f7fc00;
}
