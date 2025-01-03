const generateButton = document.querySelector("#generateButton");
const gallaryList = document.querySelector("#gallaryList");

generateButton.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const newPhoto = document.createElement('li');
            const newImg = document.createElement('img');

            newImg.setAttribute('src', `${data.message}`);
            
            newPhoto.appendChild(newImg);
            gallaryList.append(newPhoto);
        })
    .catch(err => console.log(err))
})