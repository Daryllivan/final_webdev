
// Add an event listener to the window object for the 'scroll' event
$(window).on('scroll', function() {
    // Check if the window has been scrolled
    if ($(window).scrollTop()) {
        // If scrolled, add the 'nav-show' class to the header element
        $('header').addClass('nav-show');
    } else {
        // If not scrolled, remove the 'nav-show' class from the header element
        $('header').removeClass('nav-show');
    }
});

// Get the current year using the Date object
var year = new Date().getFullYear();
// Create a string containing the footer text with the current year
var date = `©️ RaktimPortfolio ${year} . All Rights Reserved`;
// Set the inner HTML of the first footer element in the document to the created string
document.getElementsByTagName('footer')[0].innerHTML = date;

