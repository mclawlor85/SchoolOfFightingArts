
function verify() {
    var inputs = document.getElementsByClassName('cinput');
    var message = document.getElementsByClassName('ctextarea')[0].value;
    if (inputs[0].value > "" && inputs[1].value.includes("@") && message > "") {
        return true;
    } else {
        emailError();
        return false;
    }
}

function emailError() {
    alert("Please complete contact form...");
}

function cycleImages() {
    var $active = $('#cycler .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
    $next.css('z-index', 2); //move the next image up the pile
    $active.fadeOut(1500, function () {//fade out the top image
        $active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
        $next.css('z-index', 3).addClass('active'); //make the next image the top one
    });
}

function sizeImgDiv() {
    var images = ['beltsL', 'armbar', 'belt', 'giLogo', 'kimura', 'throw']
    var cyHeight = document.getElementsByClassName("active")[0].height;
    var cy = document.getElementById('cycler');
    cy.style.height = cyHeight + 'px';

    var imgDiv = document.getElementById('cycler');

    for (i = 0; i < images.length; i++) {
        var img = document.createElement("img");
        img.src = 'images/' + images[i] + '.jpg'
        img.style.width = '100%';
        img.style.height = 'auto'

        imgDiv.appendChild(img);

    }

}

window.addEventListener('load',
  function () {
      sizeImgDiv();

      // run every 4s
      setInterval('cycleImages()', 5000);
  }, false);

addEventListener('resize',
  function () {
      var cyHeight = document.getElementsByClassName("active")[0].height;
      var cy = document.getElementById('cycler');
      cy.style.height = cyHeight + 'px';
  }, false);



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//acj Buttons//
var prev = document.getElementById("acjPrev");
var next = document.getElementById("acjNext");

prev.addEventListener("click", function() {
    var curImg = document.getElementById("acjIMG").src.split("acj/")[1].split(".")[0];
    var curImgNum = curImg.split("acj")[1];
    var newImgNum = 1;
    if (curImgNum == 1) {
        newImgNum = 9
    } else {
        newImgNum = --curImgNum
    };

    document.getElementById("acjIMG").src = "images/acj/acj" + newImgNum + ".jpg";
});

next.addEventListener("click", function () {
    var curImg = document.getElementById("acjIMG").src.split("acj/")[1].split(".")[0];
    var curImgNum = curImg.split("acj")[1];
    var newImgNum = 1;
    if (curImgNum == 9) {
        newImgNum = 1
    } else {
        newImgNum = ++curImgNum
    };

    document.getElementById("acjIMG").src = "images/acj/acj" + newImgNum + ".jpg";
});

