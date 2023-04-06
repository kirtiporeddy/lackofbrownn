const albums = 
[
    {
      "Brand": "Ponds",
      "Name": "Pond's White Beauty Spot-Less Fairness Cream",
      "Year_of_Release": 2014,
      "Country_of_Release": "India",
      "Product_Type": "Cream",
      "Photo": "../images/canponds.png"
    },
    
    
    {
      "Brand": "Nivea",
      "Name": "Nivea Visage Sparkling Glow Fairness Cream",
      "Year_of_Release": 2011,
      "Country_of_Release": "India",
      "Product_Type": "Cream",
      "Photo": "../images/can2.png" },
    
    {
      "Brand": "Ponds",
      "Name": "Ponds Flawless White Dewy Rose Whitening Soft Gel",
      "Year_of_Release": 2008,
      "Country_of_Release": "Thailand",
      "Product_Type": "Gel Cream",
      "Photo": "../images/can3.png"
    },
    
    
    {
      "Brand": "Clean & Clear",
      "Name": "Clean & Clear Fairness Cream",
      "Year_of_Release": 2013,
      "Country_of_Release": "India",
      "Product_Type": "Cream",
      "Photo": "../images/can1.png"},
    
    
    
   
    
    {
      "Brand": "Olay",
      "Name": "Olay White Radiance Light Perfecting Day Cream SPF24",
      "Year_of_Release": 2012,
      "Country_of_Release": "Philippines",
      "Product_Type": "Cream",
      "Photo": "../images/can4.png" },
    {
      "Brand": "Tony Mony",
      "Name": "Panda's Dream White Magic Cream",
      "Year_of_Release": 2014,
      "Country_of_Release": "South Korea",
      "Product_Type": "Cream",
      "Photo": "../images/can5.png"
    },
    {
      "Brand": "Sulwhasoo",
      "Name": "Snowise Brightening Cream",
      "Year_of_Release": 2013,
      "Country_of_Release": "South Korea",
      "Product_Type": "Cream",
      "Photo": "../images/can6.png" },
   
    {
      "Brand": "Whitenious",
      "Name": "Whitenious fairness cream",
      "Year_of_Release": 2014,
      "Country_of_Release": "Nigeria",
      "Product_Type": "Cream",
      "Photo": "../images/can7.png"
    },
   
  ]
  const albumsList = document.getElementById('albums-list')
  
  function renderAlbum(album) {
    // Create .album element
    const albumElement = document.createElement('div')
  
    albumElement.classList.add('album')
  
    console.log(albumElement)
    console.log(album.cover_image_url)
  
    // Create the inner HTML content
    const albumHTML = `
      <img src="${album.Photo}">
      <ul>
        <li>Brand of Product: ${album.Brand}</li>
        <li>Name of Product: ${album.Name}</li>
        <li>Year of Release: ${album.Year_of_Release}</li>
        <li>Type of Product: ${album.Product_Type}</li>
        <li>Country of Release: ${album.Country_of_Release}</li>
    
        <li>
        <a href="../page2/index.html">
          BUY ME
          </a>
        <li>
      </ul>
    `



var modes = document.body;
var isDark = false;

var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {
  if(isDark === true) {
  
  darkModeButton.textContent = "Dark mode";
  modes.style.background = "#F4F0E5";
  modes.style.color = "#2E1603";
  buttonDarkMode.style.color = "#F4F0E5";
  buttonDarkMode.style.background = "#2E1603";
  
  isDark = false;
  console.log("dark mode is off.");
    
  } else if(isDark === false){
    
  darkModeButton.textContent = "Light mode";
  modes.style.background = "#2E1603";
  modes.style.color = "#F4F0E5";
  buttonDarkMode.style.color = "#2E1603";
  buttonDarkMode.style.background = "#F4F0E5";
 
  isDark = true;
  console.log("dark mode is on!");
    
  }
}
  
    // Set the inner HTML content of the albumElement
    albumElement.innerHTML = albumHTML
  
    // Add to the list #albums-list
    albumsList.appendChild(albumElement)
  }
  
  // Start App!
  albums.forEach(function(album) {
    // if (album.year_released < 2000) {
      renderAlbum(album)
    // }
  })