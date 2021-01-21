//add hover on samples when clicked
$('.samples ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
        $('.shuffle-images .col-sm').css('opacity', 1)
    }
    else {
        $('.shuffle-images .col-sm').css('opacity', '0.2')
        $($(this).data('class')).css('opacity', 1)
    }
});
// Hide and Show Navbar while scrolling 
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function () {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
// add smooth scrolling on "a" tags when clicked on (navbar or footer)
$("nav li a").on('click', function (e) {
    e.preventDefault();
    var hash = $(this).attr("href");
    if ($(hash).length === 0) {
        return;
    }
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 700)

});
$("footer  a").on('click', function (e) {
    e.preventDefault();
    var hash = $(this).attr("href");
    if ($(hash).length === 0) {
        return;
    }
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
    }, 700)

});
//Sending email fun 
function sendMail() {
    Email.send({
        SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To: 'omarsalem977@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Hi I'm" + document.getElementById("name").value + " let's work together",
        Body: document.getElementById("message").value
    }).then(
        message => alert("Mail sent successfully !!")
    );
}

