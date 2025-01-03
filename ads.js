// Initialize Adsgram AdController
const AdController = window.Adsgram.init({
    blockId: "int-6763", // Replace with your actual block ID
    debug: true, // Set to false in production
    debugBannerType: "FullscreenMedia" // Use "RewardedVideo" if needed
  });
  
  // Function to show the ad
  function showAd() {
    AdController.show()
      .then((result) => {
        console.log("Ad watched till the end:", result);
        // Reward the user or perform any other action
      })
      .catch((result) => {
        console.log("Ad skipped or error occurred:", result);
        // Handle ad skip or error
      });
  }
  
  // Event listener for the calculate button to show the ad before calculation
  document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.querySelector('button');
    calculateButton.addEventListener('click', () => {
      showAd(); // Show the ad when the calculate button is clicked
    });
  });
  
  // Optional: Add event listeners for more control over ad events
  AdController.addEventListener('onReward', () => {
    console.log("User watched the ad till the end, reward them!");
  });
  
  AdController.addEventListener('onError', () => {
    console.log("An error occurred while showing the ad.");
  });
  
  AdController.addEventListener('onSkip', () => {
    console.log("User skipped the ad.");
  });
