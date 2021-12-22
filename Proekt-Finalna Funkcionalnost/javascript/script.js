//var name;
//name=window.prompt("Please enter your name");

//window.alert("ДОБРЕДОЈДЕ \n на мојата страна!");
/*
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});

*/
/*
$(document).ready(function(){// waits for the document to load
            //here
          //  alert("OK");
        });
*/
var tags; 

function loadSearches() 
{
   if ( !window.sessionStorage.getItem( "herePreviously" ) )
   {
      sessionStorage.setItem( "herePreviously", "true" );
      document.getElementById( "welcomeMessage" ).innerHTML = 
         "Welcome to the Favorite Twitter Searches App";
   } // end if

   var length = localStorage.length; 
   tags = []; 

   for (var i = 0; i < length; ++i) 
   {
      tags[i] = localStorage.key(i);
   } 

   tags.sort(); 

   var markup = "<ul>"; 
   var url = "http://search.twitter.com/search?q=";

   for (var tag in tags) 
   {
      var query = url + localStorage.getItem(tags[tag]);
      markup += "<li><span><a href = '" + query + "'>" + tags[tag] + 
         "</a></span>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Промени' onclick = 'editTag(id)'>" +
         "<input id = '" + tags[tag] + "' type = 'button' " + 
            "value = 'Избриши' onclick = 'deleteTag(id)'>";
   } 

   markup += "</ul>";
   document.getElementById("searches").innerHTML = markup;
} 

function clearAllSearches() 
{
   localStorage.clear();
   loadSearches(); 
} 

function saveSearch() 
{
   var query = document.getElementById("query");
   var tag = document.getElementById("tag");
   localStorage.setItem(tag.value, query.value); 
   tag.value = ""; 
   query.value = ""; 
   loadSearches(); 
} 

function deleteTag( tag ) 
{
   localStorage.removeItem( tag );
   loadSearches(); 
} 

function editTag( tag )
{
   document.getElementById("query").value = localStorage[ tag ];
   document.getElementById("tag").value = tag;   
   loadSearches(); 
} 

function start()
{
   var saveButton = document.getElementById( "saveButton" );
   saveButton.addEventListener( "click", saveSearch, false );
   var clearButton = document.getElementById( "clearButton" );
   clearButton.addEventListener( "click", clearAllSearches, false );
   loadSearches(); 
} 

window.addEventListener( "load", start, false );

var likeCount = 1;

function like(){
    likeCount++;
    document.writeln(likeCount);
}

function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =  localStorage.clickcount ;
  } else {
    document.getElementById("result").innerHTML = "";
  }
}

function onc(){
    like();
    clickCounter();
}
function clickCounterMinus(){
    if(typeof(Storage) !== "undefined"){
        if(localStorage.clickcount){
            localStorage.clickcount = Number(localStorage.clickcount)-1;
        } 
        else{
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = localStorage.clickcount;
    }
    else{
        document.getElementById("result").innerHTML = "";
    }
}
$('#multi_file_upload').change(function(e) {
    var file_id = e.target.id;

    var file_name_arr = new Array();
    var process_path = site_url + 'public/uploads/';

    for (i = 0; i < $("#" + file_id).prop("files").length; i++) {

        var form_data = new FormData();
        var file_data = $("#" + file_id).prop("files")[i];
        form_data.append("file_name", file_data);

        if (check_multifile_logo($("#" + file_id).prop("files")[i]['name'])) {
            $.ajax({
                //url         :   site_url + "inc/upload_image.php?width=96&height=60&show_small=1",
                url: site_url + "inc/upload_contact_info.php",
                cache: false,
                contentType: false,
                processData: false,
                async: false,
                data: form_data,
                type: 'post',
                success: function(data) {
                    // display image
                }
            });
        } else {
            $("#" + html_div).html('');
            alert('We only accept JPG, JPEG, PNG, GIF and BMP files');
        }

    }
});

function check_multifile_logo(file) {
    var extension = file.substr((file.lastIndexOf('.') + 1))
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'gif' || extension === 'png' || extension === 'bmp') {
        return true;
    } else {
        return false;
    }
}
function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output_image');
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }


  $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
