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



