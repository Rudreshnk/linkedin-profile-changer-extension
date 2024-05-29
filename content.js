// URL of the new profile picture
const newProfilePicUrl = 'https://i.imgur.com/oqvkxzQ.jpeg';

// Function to replace profile pictures
function replaceProfilePictures() {
    // Select all profile pictures on the LinkedIn feed
    const profilePics = document.querySelectorAll('imgedit-profile-photo-frame-viewer__image-container');

    // Replace the source of each profile picture
    profilePics.forEach(pic => {
        pic.src = newProfilePicUrl;
    });
}

// Run the function initially
replaceProfilePictures();

// Set an interval to replace profile pictures every 3 seconds to account for dynamically loaded content
setInterval(replaceProfilePictures, 3000);
