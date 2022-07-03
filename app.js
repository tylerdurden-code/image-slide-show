const frame = document.querySelector('.frame');
const nextBtn = document.querySelector('[data-next-button]');
const previousBtn = document.querySelector('[data-previous-button]');

const myImages = [
  { name: 'astronaut', imgUrl: 'img/astronaut.jpg' },
  { name: 'cyberpunk', imgUrl: 'img/cyberpunk.jpg' },
  { name: 'forest1', imgUrl: 'img/forest1.jpg' },
  { name: 'mountain', imgUrl: 'img/mountain.jpg' },
  { name: 'retro', imgUrl: 'img/retro.jpg' },
];
function appendImg(imgUrl) {
  const img = document.createElement('img');
  img.setAttribute('src', imgUrl);

  return img;
}
function renderImg(imgUrl) {
  const img = appendImg(imgUrl);
  frame.innerHTML = '';
  frame.appendChild(img);
}
function firstImgUrl() {
  const url = myImages[0].imgUrl;
  return url;
}
function lastImgUrl() {
  const url = myImages[myImages.length - 1].imgUrl;

  return url;
}

function firstImgDiv() {
  const img = document.createElement('img');
  const firstImgUrl1 = firstImgUrl();
  img.setAttribute('src', firstImgUrl1);

  return img;
}
function lastImgDiv() {
  const img = document.createElement('img');
  const lastImgUrl1 = lastImgUrl();
  img.setAttribute('src', lastImgUrl1);

  return img;
}
function renderFirstPhoto() {
  frame.innerHTML = '';
  const firstImg = firstImgDiv();

  frame.appendChild(firstImg);
}
function renderLastPhoto() {
  frame.innerHTML = '';
  const lastImg = lastImgDiv();

  frame.appendChild(lastImg);
}
function findCurrentPhoto() {
  return frame.firstChild.attributes.src.nodeValue;
}

function next() {
  for (let i = 0; i < myImages.length; i += 1) {
    if (i === (myImages.length - 1)) {
      renderFirstPhoto();
    }
    if (myImages[i].imgUrl === findCurrentPhoto()) {
      console.log(myImages[i + 1].imgUrl);
      renderImg(myImages[i + 1].imgUrl);
      return;
    }
  }
}
function previous() {
  for (let i = myImages.length - 1; i > -1; i -= 1) {
    if (i === 0) {
      renderLastPhoto();
    }
    if (myImages[i].imgUrl === findCurrentPhoto()) {
      console.log(myImages[i - 1].imgUrl);
      renderImg(myImages[i - 1].imgUrl);
      return;
    }
  }
}
nextBtn.addEventListener('click', () => {
  next();
});
previousBtn.addEventListener('click', () => {
  previous();
});
renderFirstPhoto();
findCurrentPhoto();
// next();
