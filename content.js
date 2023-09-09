// Get the current page's URL
var currentURL = window.location.href;

if (currentURL.includes('/shorts/')) {
    var newURL = currentURL.replace('/shorts/', '/watch?v=');
    
    // Redirect to the new URL
    window.location.href = newURL;
}
