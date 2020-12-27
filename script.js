// Select draggable elements 
var draggableElems = document.querySelectorAll('.draggable');
var draggies = []
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
  });
  draggies.push( draggie );
}

function makeMarquee() {
  const title = '<a href="mailto:ishana@mit.edu"> <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/envelope_2709-fe0f.png" width="20px" alt="mail emoji">  email &emsp; </a> <a href="https://github.com/ishanashastri/"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/laptop_1f4bb.png" width="20px" alt="computer emoji"> github &emsp;</a> <a href="https://www.linkedin.com/in/ishanashastri/"> <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/handshake_1f91d.png" width="20px" alt="handshake emoji"> linkedin &emsp;</a>  <a href="https://open.spotify.com/user/sais9942?si=JPCABAobSZWRm9mzjcyE9Q"> <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/musical-note_1f3b5.png" width="20px" alt="music note emoji"> spotify</a>'

  const marqueeText = new Array(300).fill(title).join('&emsp;     ')
  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText
}

makeMarquee()


function randomizePosition(){
  // get the dimensions of the viewport and remove the size of the div
    var h = $(window).height() - 40;
    var w = $(window).width() - 40;
    
    var newh = Math.floor(Math.random() * h);
    var neww = Math.floor(Math.random() * w);
    
    return [newh,neww];    
    
}

// move that peach! using jQuery's animate function, plugging in new coordinates and speed
function animateDiv(){
    var newq = randomizePosition();
    var oldq = $('.peach').offset();
    var speed = calculateSpeed([oldq.top, oldq.left], newq);
    
    $('.peach').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

// speed modifier
function calculateSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}
animateDiv();