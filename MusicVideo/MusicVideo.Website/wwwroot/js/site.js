// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function openVideo() {
    document.getElementById("myVideo").style.display = "block";
}

function closeVideo() {
    document.getElementById("myVideo").style.display = "none";
}


var title = null;
function moveRight() {
    title = document.getElementById('theMove');
    title.style.position = 'relative';
    title.style.left = '0px';
    title.style.left = parseInt(title.style.left) + 250 + 'px';
}