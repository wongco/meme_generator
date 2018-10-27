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
      if (imageurl.value === '') {
        alert('Error: Please fill out an Image URL');
      } else {
        var newMemeElement = createMemeDisplayElement(
          imageurl.value,
          toptext.value,
          bottomtext.value
        );
        memesContainer.appendChild(newMemeElement);
        clearInput();
      }
    } else if (submitButton === 'Clear Fields') {
      clearInput();
    } else if (submitButton === 'Sample Meme') {
      imageurl.value = 'https://loremflickr.com/600/400';
      toptext.value = 'i haz most hunger';
      bottomtext.value = 'when huuumans come home 😋😋';
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
    if (event.target.parentNode.tagName === 'DIV') {
      event.target.parentElement.remove();
    }
  });
  // Mouse Hover Event - Mime Image
  memeContainer.addEventListener('mouseover', function(event) {
    if (event.target.parentNode.tagName === 'DIV') {
      var memeItem = event.target.parentElement;
      memeItem.classList.add('meme--container-transparent');
      memeItem.childNodes[3].classList.add('meme--remove_sign-viewable');
    }
  });
  // Mouse Remove Hover Event - Mime Image
  memeContainer.addEventListener('mouseout', function(event) {
    if (event.target.parentNode.tagName === 'DIV') {
      var memeItem = event.target.parentElement;
      memeItem.classList.remove('meme--container-transparent');
      memeItem.childNodes[3].classList.remove('meme--remove_sign-viewable');
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

  var removeElement = document.createElement('div');
  removeElement.innerText = 'X';
  removeElement.classList.add('meme--remove_sign-transparent');
  newMemeElement.appendChild(removeElement);

  return newMemeElement;
}
