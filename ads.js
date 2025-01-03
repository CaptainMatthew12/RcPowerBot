// Mock AdController for testing
const MockAdController = {
  show: () => {
    return new Promise((resolve, reject) => {
      // Simulate ad loading and showing
      console.log("Mock ad is loading...");

      // Simulate user watching the ad
      setTimeout(() => {
        const userWatchedAd = Math.random() > 0.5; // 50% chance user watches the ad
        if (userWatchedAd) {
          console.log("Mock ad watched till the end.");
          resolve({ done: true, description: "User watched the ad", state: "playing", error: false });
        } else {
          console.log("Mock ad skipped.");
          reject({ done: false, description: "User skipped the ad", state: "destroy", error: false });
        }
      }, 2000); // Simulate a 2-second ad
    });
  },
  destroy: () => {
    console.log("Mock ad destroyed.");
  },
  addEventListener: (event, callback) => {
    console.log(`Mock event listener added for: ${event}`);
    if (event === "onReward") {
      setTimeout(() => {
        callback(); // Simulate reward event
      }, 2000);
    }
  }
};

// Use the mock ad system
const AdController = MockAdController;

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
