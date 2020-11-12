$('#yt').on('click', function () {
    $("#popup-youtube-player")[0].src += "1";
});


$('#stop').on('click', function() {
    $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
    });