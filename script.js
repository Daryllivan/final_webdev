
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

