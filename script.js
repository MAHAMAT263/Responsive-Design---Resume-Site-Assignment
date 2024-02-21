const imageUrls = [
    'images/na1.jpg',
    'images/na11.jpeg',
    'images/na3.webp',
    'images/na13.jpeg',
    'images/na15.jpeg',
    'images/na14.jpeg',
  ];
  
  // Function to change the image every 5 seconds
  function changeImage() {
    const imageContainer = document.getElementById('welimg');
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomIndex];
    imageContainer.src = imageUrl;
  }
  
  // Change the image initially
  changeImage();
  
  // Set an interval to change the image every 10 seconds
  setInterval(changeImage, 5000);
