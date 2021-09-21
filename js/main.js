//  ------------------------ GOOGLE MAP ---------------------

// initialize and add map

function initMap() {

  const loc = { lat: 43.624555, lng: 20.894458 };

  const map = new google.maps.Map (document.querySelector('.map'),
  {
    zoom: 15,
    center: loc
  });

  const marker = new google.maps.Marker ({ position: loc, map:map});
}

  // -------- NOVO ALI UZ POMOC ID/ znaci da bi moralo da se menja
  // ID na maps umesto .map bilo bi #map


// let map;

// function initMap() {

//   const loc = { lat: 43.624555, lng: 20.894458 };

//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 43.624555, lng: 20.894458 },
//     zoom: 16,
//   });

//   new google.maps.Marker({
//     position: loc,
//     map,
//     title: "Hello World!",
//   });

// }


//  ---------------------Sticky menu background-----------------

window.addEventListener('scroll', function(){
  if (window.scrollY > 150) {
    document.querySelector ('#navbar').style.opacity = 1;
  }
      else {
        document.querySelector('#navbar').style.opacity= 1;
      } 
});


//-------------------Smooth scrolling-----------------


 $('#navbar a').on('click', function(event){
   if (this.hash !==''){
     event.preventDefault();
     
     const hash = this.hash;
     $('html,body').animate (
       {
         scrollTop: $(hash).offset().top -150
       },
       800
     );
   }
 });



