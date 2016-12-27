$(document).ready(function () {
    $('.btn-menu').click(function () {
        $('.menu').slideToggle("fast");
     });
});
$(document).focusout(function () {
    $('.menu').slideToggle("fast");
});
/*setTimeout(function () {
    $('.menu').slideToggle("fast");
}, 2000);
*/
