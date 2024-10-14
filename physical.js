
$(document).ready(function () {
  $('#img1').hover(function () {
    $('#img11').css('transform', 'translateY(0px)');
  }, function () {
    $('#img11').css('transform', 'translateY(70px)');
  });

  $('#img2').hover(function () {
    $('#img22').css('transform', 'translateY(0px)');
  }, function () {
    $('#img22').css('transform', 'translateY(70px)');

  });
  $('#img3').hover(function () {
    $('#img33').css('transform', 'translateY(0px)');
  }, function () {
    $('#img33').css('transform', 'translateY(70px)');

  });
  $('#img4').hover(function () {
    $('#img44').css('transform', 'translateY(0px)');
  }, function () {
    $('#img44').css('transform', 'translateY(70px)');

  });
  $('#img5').hover(function () {
    $('#img55').css('transform', 'translateY(0px)');
  }, function () {
    $('#img55').css('transform', 'translateY(70px)');

  });
  $('#img6').hover(function () {
    $('#img66').css('transform', 'translateY(0px)');
  }, function () {
    $('#img66').css('transform', 'translateY(70px)');

  });
  $('#img7').hover(function () {
    $('#img77').css('transform', 'translateY(0px)');
  }, function () {
    $('#img77').css('transform', 'translateY(70px)');

  });
  $('#img8').hover(function () {
    $('#img88').css('transform', 'translateY(0px)');
  }, function () {
    $('#img88').css('transform', 'translateY(70px)');

  });
  $('#img9').hover(function () {
    $('#img99').css('transform', 'translateY(0px)');
  }, function () {
    $('#img99').css('transform', 'translateY(70px)');

  });

  $('.toggle-button').click(function () {

    $(this).next('.toggle-content').slideToggle();


    $(this).find('.arrow').toggleClass('rotate');
  });



  $(".myImage").click(function() {
    $("#modal").show();
    $("#modalImage").attr("src", $(this).attr("src")); 
});


$("#modal").click(function() {
    $(this).hide();
});

  function showNextImage() {
    var currentImg = $('.active');
    var nextImge = currentImg.next();

    if (nextImge.length) {
      currentImg.removeClass('active').css('z-index', -10);
      nextImge.addClass('active').css('z-index', 10);
    } else {

      currentImg.removeClass('active').css('z-index', -10);
      $('.slider3 img').first().addClass('active').css('z-index', 10);
    }
  }

  function showPreviousImage() {
    var currentImg = $('.active');
    var beforeImge = currentImg.prev();

    if (beforeImge.length) {
      currentImg.removeClass('active').css('z-index', -10);
      beforeImge.addClass('active').css('z-index', 10);
    } else {
      currentImg.removeClass('active').css('z-index', -10);
      $('.slider3 img').last().addClass('active').css('z-index', 10);
    }
  }

  setInterval(showNextImage, 3000);

  $('.after').on('click', showNextImage);
  $('.before').on('click', showPreviousImage);


  $('.answer').hide();
  $('.qution').click(function () {

    $('.answer').not($(this).find('.answer')).slideUp(1000);
    $('.arrow').not($(this).find('.arrow')).removeClass('rotate');

    $(this).find('.answer').slideToggle(1000);
    $(this).find('.arrow').toggleClass('rotate');
  });







});

window.onscroll = function () {
  var header = document.querySelector('header');
  var img = document.querySelector('img');
  var text = document.querySelector('div');
  var button = document.querySelector('button');




  if (document.documentElement.scrollTop > 120) {
    header.style.position = "fixed";
    header.style.top = "0";
    text.style.borderRadius = "25px";
    header.style.transform = "translateY(0)";
    header.style.transition = "transform 0.8s ease";
    header.style.top = "10px";


  } else {
    header.style.position = "relative";
    header.style.transform = "translateY(-50%)";
    header.style.transition = "transform 0.8s ease";
    header.style.top = "50px";
    text.style.borderRadius = "0px";

  }


  if (document.documentElement.scrollTop > 120) {

    header.style.opacity = "0.8";




  } else {

    header.style.opacity = "1";


  }
};
function fun100() {
  document.getElementById("dropdown").style.opacity = "0";
 
}
function fun1() {

  document.getElementById("dropdown").style.opacity = "1";


}


function fun2() {

  document.getElementById("dropdown").style.opacity = "0";

}

function bars(){
  document.getElementById("bar").style.opacity = "1";

  document.getElementById("close5").style.display= "block";
  document.getElementById("bars2").style.display= "none";
  
  

}
function togglebar(){
  document.getElementById("bar").style.opacity = "0";

  document.getElementById("close5").style.display= "none";
  document.getElementById("dropdown").style.display= "none";
  document.getElementById("bars2").style.display= "block";

}
function drop(){
  document.getElementById("dropdown").style.display= "block";

}




function fun50() {
  window.location.href = "login.html";
}
function fun3() {
  window.location.href = "opinion.html";
}
function contactus() {
  window.location.href = "contact-us.html";

}
function fun20() {
  window.location.href = "video.html";

}
function fun4() {
  window.location.href = "about.html";

}
function fat() {
  window.location.href = "fat.html";

}
function back2() {
  window.location.href = "service.html";

}
function Shoulder() {
  window.location.href = "service2.html";

}

function back3() {
  window.location.href = "service3.html";

}

function back4() {
  window.location.href = "service4.html";

}

function back5() {
  window.location.href = "service5.html";

}

function back6() {
  window.location.href = "service6.html";

}

function back7() {
  window.location.href = "service7.html";

}

function back8() {
  window.location.href = "service8.html";

}



window.onload = function () {
  y = document.querySelector('h1');

  setTimeout(() => {
    y.classList.add('visible');
  }, 2000);

};

function toggleChat() {

  document.getElementById("chatBox").style.display = "flex";
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";

}
function toggleChat2() {

  document.getElementById("chatBox").style.display = "none";
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";

}
function sen() {
  txt = document.getElementById("sen-txt").value;
  document.getElementById("c-body").innerHTML += '<div>' + txt + '</div>';

}

function Chat() {
  document.getElementById("file").style.display = "block";

}
  function togglebook() {

document.getElementById("file").style.display = "none";

}


function eye() {
   pass = document.getElementById("password");
   icon = document.getElementById("eyeicon");
  
  
  if (pass.type === "password") {
      pass.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
  } else {
      pass.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
  }
}

function fun19() {
  var age = parseFloat(document.getElementById('age').value);
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var gender = document.getElementById('gender').value;

  var Meters = height / 100;
  var bmi = weight / (Meters * Meters);

  var fat;
  if (gender == 'male') {
      fat = (1.20 * bmi) + (0.23 * age) - 16.2;
  } else {
      fat = (1.20 * bmi) + (0.23 * age) - 5.4;
  }

  var imgSrc = '';
  if (fat <= 9) {
      imgSrc = "img/s.jpg"; 
  } else if (fat > 9 && fat <= 14) {
      imgSrc = "img/g.jpg"; 
  } else {
      imgSrc = "img/p.jpg"; 
  }

  document.getElementById('result').innerHTML = "نسبة الدهون: " + fat.toFixed(2) + "%";
  document.querySelector('#img img').src = imgSrc; 
}


function submit2() {
 
  var nameValue = document.getElementById("name").value;
  sessionStorage.setItem("name", nameValue);

  sessionStorage.setItem("hideLog", "true");

  window.location.href = "physical.html";
}

document.addEventListener("DOMContentLoaded", function() {

  if (sessionStorage.getItem("hideLog") === "true") {
      var logButton = document.getElementById("log");
      
      logButton.style.display = "none";

      var storedName = sessionStorage.getItem("name");
      if (storedName) {
         
          var log2Button = document.getElementById("log2");
          log2Button.value = "مرحباً   " + storedName;  
      }

      sessionStorage.removeItem("hideLog");
      sessionStorage.removeItem("name");
  }
});

 

     