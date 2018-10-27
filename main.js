document.addEventListener('DOMContentLoaded', function() {
  var imageurl = document.getElementById('imageurl');
  var toptext = document.getElementById('toptext');
  var bottomtext = document.getElementById('bottomtext');
  var memesContainer = document.querySelector('.memes');

  var inputContainer = document.querySelector('.submit');
  inputContainer.addEventListener('click', function(event) {
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

    function clearInput() {
      imageurl.value = '';
      toptext.value = '';
      bottomtext.value = '';
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
  topTextElement.innerText = toptext;
  topTextElement.classList.add('toptext');
  newMemeElement.appendChild(topTextElement);

  var bottomTextElement = document.createElement('div');
  bottomTextElement.innerText = bottomtext;
  bottomTextElement.classList.add('bottomtext');
  newMemeElement.appendChild(bottomTextElement);

  return newMemeElement;
}
