// Get the current page's URL
var currentURL = window.location.href;

// Check if the URL contains '/shorts/'
if (currentURL.includes('/shorts/')) {
    // Replace '/shorts/' with '/watch?v='
    var newURL = currentURL.replace('/shorts/', '/watch?v=');
    
    // Redirect to the new URL
    window.location.href = newURL;
}
