


var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


/*var section = ('.parallax__image');

window.scroll(function() {
    var scrollTop = -(window).scrollTop();
    var speed = section.data('speed');
    var coords = "50%" + scrollTop / speed + "px";
    section.css('background-position', coords);


});
var parallaxContainer = document.getElementById('parallax'),
 layers = parallaxContainer.firstChild;

 var movelayers = function (e) {
 console.log('mousemove');

 }
 window.addEventListener('mousemove',movelayers);

 var parallaxContainer = document.getElementById('parallax'),
 layers = parallaxContainer.children;

 var moveLayers = function (e) {
 var initialX = (window.innerWidth / 2) - e.pageX;
 var initialY = (window.innerHeight / 2) - e.pageY;

 layers.forEach(function(layer, index) {
 var
 divider = index / 100,
 positionX = initialX * divider,
 positionY = initialY * divider,
 bottomPosition = (window.innerHeight / 2) * divider,
 transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
 image = layer.firstElementChild;

 layer.style.transform = transformString;
 image.style.bottom = '-' + bottomPosition + 'px';
 });

 };

 window.addEventListener('mousemove', moveLayers);
 */

$('a').click(function() {
    $(this).toggleClass('active');
});