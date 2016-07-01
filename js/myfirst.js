$(function () {
    setTimeout('dots()'); 
});

function dots() {
    $('#dots').animate({
        marginTop: '-=30px'
    }, 800).animate({
        marginTop: '+=30px'
    }, 800);
    setTimeout('dots()', 1600);
}
