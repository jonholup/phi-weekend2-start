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
    }
  });

  /////// BUTTON LISTENERS ///////
  $('#nextButton').on('click', function(){
    $('#dataContainer').empty();
    if (currentPersonIndex == personArray.length - 1){
      currentPersonIndex = 0;
    } else {
      currentPersonIndex++;
    }
    selectStatus();
    currentPerson = personArray[currentPersonIndex];
    appendDOM(currentPerson);
  });

  $('#backButton').on('click', function(){
    $('#dataContainer').empty();
    if (currentPersonIndex == 0) {
      currentPersonIndex = personArray.length - 1;
    } else {
      currentPersonIndex--;
    }
    selectStatus();
    currentPerson = personArray[currentPersonIndex];
    appendDOM(currentPerson);
  });
});

/////// FUNCTIONS ///////
function appendDOM(person){
  $('#dataContainer').empty();
  $('#dataContainer').append('<div class="person"></div>');
  var $el = $('#dataContainer').children();
  $el.append('<h2> Name: ' + person.name + '</h2>').hide().fadeIn();
  $el.append('<h2> Git User: ' + person.git_username + '</h2>').hide().fadeIn();
  $el.append('<h2> Shoutout: ' + person.shoutout + '</h2>').hide().fadeIn();

}

function generateStatusBar(array){
  for (var i = 0; i < array.length; i++) {
    $('#carouselStatus').append('<div data-id=' + i + '>' + (i + 1) + '</div>');
    $('[data-id=' + '"' + currentPersonIndex + '"' + ']').addClass('selected');
  }
}

function selectStatus(){
  $('#carouselStatus > div').removeClass(); //remove last selected
  $('[data-id=' + '"' + currentPersonIndex + '"' + ']').addClass('selected');
}
