$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
    //before() adds the message on opening of the site
    $('.dashboard').before('<p class="welcome-message">Woof! I\'m ready to play!</p>');
    setTimeout(function() {
    //toggle() toggles off the message after 4 seconds
    $('.welcome-message').toggle();
    }, 4000);

    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.groom-button').click(clickedGroomButton);
    $('.exercise-button').click(clickedExerciseButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name: "Buddy",
      weight: 10,
      happiness: 10,
      dirty: 0
    };

    function playSound(soundFile) {
      var sound = new Audio(soundFile);
      sound.play();
    }

    function makePetJump() {
      var petImage = $('.pet-image');

      petImage.removeClass('jump');

      setTimeout(function() {
        petImage.addClass('jump');
      }, 10);

      setTimeout(function() {
        petImage.removeClass('jump');
      }, 600);
    }

  
    function clickedTreatButton() {
      pet_info.happiness += 2;
      pet_info.weight += 1;
      playSound('sounds/eat.mp3');
      makePetJump();
      showPetComment("yum yum yum");

      checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
      pet_info.happiness += 2;
      pet_info.weight -= 1;
      pet_info.dirty += 1;
      playSound('sounds/ball.mp3');
      showPetComment("WOOOOOOO");

      checkAndUpdatePetInfoInHtml();
    }

    function clickedGroomButton() {
      pet_info.happiness -= 1;
      pet_info.dirty -= 2;
      playSound('sounds/shower.mp3');
      showPetComment("ahhh, clean");

      checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
      pet_info.happiness -= 1;
      pet_info.weight -= 2;
      pet_info.dirty += 1;
      playSound('sounds/weight.mp3');
      showPetComment("whew that was good");

      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < 10) {
        pet_info.weight = 10;
      }

      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }

      if (pet_info.dirty < 0) {
        pet_info.dirty = 0;
      }
    }

    function showPetComment(comment) {
      $('.pet-comment').text(comment);
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.dirty').text(pet_info['dirty']);
    }
  