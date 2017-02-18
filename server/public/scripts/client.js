var currentPerson = {};
var currentPersonIndex = 0;
var personArray = [];

$(document).ready(function(){


  // Upon page load, get the data from the server
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      personArray = data.phirephiters;
      currentPerson = data.phirephiters[currentPersonIndex]; // set currentPerson to first object
      appendDOM(currentPerson); // display 1st person on success
      console.log(personArray);
      console.log(currentPerson);
    }
  });




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


    // appendDOM(currentPerson);

    //appendDOM(data.phirephiters[currentValue] ++

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

    // appendDOM();
    //appendDOM(data.phirephiters[currentValue] --

  });

  function appendDOM(person){
    $('#dataContainer').empty();
    $('#dataContainer').append('<div class="person"></div>');
    var $el = $('#dataContainer').children();
    $el.append('<h2>' + person.name + '</h2>');
    $el.append('<h2>' + person.git_username + '</h2>');
    $el.append('<h2>' + person.shoutout + '</h2>');
  }

});



// NOTE: todo:
