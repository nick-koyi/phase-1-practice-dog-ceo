// load jjavascript after HTML has loaded
document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dropDownMenu = document.querySelector('#breed-dropdown');
  dropDownMenu.value = 'a';
  const ul = document.getElementById('dog-breeds');

  fetch(imgUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.message.forEach((image) => {
        document.querySelector(
          '#dog-image-container'
        ).innerHTML = `<img src=${image}>`;
      });
    });

  fetch(breedUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // returns an array of keys from the message object
      const breeds = Object.keys(data.message);
      //listening to changes in the dropDownMenu
      dropDownMenu.addEventListener('change', () => {
        ul.innerHTML = '';
        const filteredBreeds = breeds.filter((breed) => {
          return breed.startsWith(dropDownMenu.value);
        });
        filteredBreeds.forEach((breed) => {
          const li = document.createElement('li');
          li.addEventListener('click', () => {
            li.style.color = 'steelblue'
          })
          li.textContent = breed;
          ul.appendChild(li);
        });
      });
    });
});
