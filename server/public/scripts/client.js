var currentPerson = {};
var currentPersonIndex = 0;
var personArray = [];

$(document).ready(function(){


  /////// SERVER STUFF ///////
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      personArray = data.phirephiters;
      currentPerson = data.phirephiters[currentPersonIndex]; // set currentPerson to first object
      appendDOM(currentPerson); // display 1st person on success
      generateStatusBar(personArray);
      console.log(personArray);
      console.log(currentPerson);
    }
  });

  /////// BUTTON LISTENERS ///////
  $('#nextButton').on('click', function(){
    console.log('next');
    console.log(currentPerson);
    if (currentPersonIndex == personArray.length - 1){
      currentPersonIndex = 0;
      currentPerson = personArray[currentPersonIndex];
      console.log(currentPerson);
      appendDOM(currentPerson);
    } else {
      currentPersonIndex++;
      currentPerson = personArray[currentPersonIndex];
      appendDOM(currentPerson);
    }
  });

  $('#backButton').on('click', function(){
    console.log('back');
    if (currentPersonIndex == 0) {
      currentPersonIndex = personArray.length - 1;
      currentPerson = personArray[currentPersonIndex];
      appendDOM(currentPerson);
    } else {
      currentPersonIndex--;
      currentPerson = personArray[currentPersonIndex];
      appendDOM(currentPerson);
    }

  });
  
});

/////// FUNCTIONS ///////
function appendDOM(person){
  $('#dataContainer').empty();
  $('#dataContainer').append('<div class="person"></div>');
  var $el = $('#dataContainer').children();
  $el.append('<h2> Name: ' + person.name + '</h2>');
  $el.append('<h2> Git User: ' + person.git_username + '</h2>');
  $el.append('<h2> Shoutout: ' + person.shoutout + '</h2>');
}
function generateStatusBar(array){
  for (var i = 0; i < array.length; i++) {
    $('#carouselStatus').append('<div></div>');
  }
}


// NOTE: todo:
