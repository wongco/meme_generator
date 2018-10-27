document.addEventListener('DOMContentLoaded', function() {
  var imageurl = document.getElementById('imageurl');
  var toptext = document.getElementById('toptext');
  var bottomtext = document.getElementById('bottomtext');
  var memesContainer = document.querySelector('.memes');

  var inputContainer = document.querySelector('.submit');
  inputContainer.addEventListener('click', formSubmission);

  function formSubmission(event) {
    var submitButton = event.target.value;
    if (submitButton === 'Create Delicious Meme') {
      // Check all 3 fields are populated
      if (
        imageurl.value === '' ||
        toptext.value === '' ||
        bottomtext.value == ''
      ) {
        alert('Error: Please fill out all input fields');
      } else {
        var newMemeElement = createMemeDisplayElement(
          imageurl.value,
          toptext.value,
          bottomtext.value
        );
        memesContainer.appendChild(newMemeElement);
      }
    } else if (submitButton === 'Clear Fields') {
      clearInput();
    }
  }

  function clearInput() {
    imageurl.value = '';
    toptext.value = '';
    bottomtext.value = '';
  }

  // memeContainer Removel Event
  var memeContainer = document.querySelector('.memes');
  memeContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
      event.target.parentElement.remove();
    }
  });
  // Mouse Hover Event - Mime Image
  memeContainer.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'IMG') {
      event.target.parentElement.classList.add('meme--container-transparent');
    }
  });
  // Mouse Remove Hover Event - Mime Image
  memeContainer.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'IMG') {
      event.target.parentElement.classList.remove(
        'meme--container-transparent'
      );
    }
  });
});

function createMemeDisplayElement(imageurl, toptext, bottomtext) {
  // create Meme from data and return HTML Element
  var newMemeElement = document.createElement('div');
  newMemeElement.classList.add('meme--container');

  var imgElement = document.createElement('img');
  imgElement.setAttribute('src', imageurl);
  newMemeElement.appendChild(imgElement);

  var topTextElement = document.createElement('div');
  topTextElement.innerText = toptext.toUpperCase();
  topTextElement.classList.add('toptext-position', 'meme--font');
  newMemeElement.appendChild(topTextElement);

  var bottomTextElement = document.createElement('div');
  bottomTextElement.innerText = bottomtext.toUpperCase();
  bottomTextElement.classList.add('bottomtext-position', 'meme--font');
  newMemeElement.appendChild(bottomTextElement);

  return newMemeElement;
}
