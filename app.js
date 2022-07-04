const frame = document.querySelector('.frame');
const nextBtn = document.querySelector('[data-next-button]');
const previousBtn = document.querySelector('[data-previous-button]');
const dots = document.querySelector('[data-dots]');

const myImages = [
  { name: 'astronaut', imgUrl: 'img/astronaut.jpg', active: true },
  { name: 'cyberpunk', imgUrl: 'img/cyberpunk.jpg', active: false },
  { name: 'forest1', imgUrl: 'img/forest1.jpg', active: false },
  { name: 'mountain', imgUrl: 'img/mountain.jpg', active: false },
  { name: 'retro', imgUrl: 'img/retro.jpg', active: false },
];

function makeActive() {
  myImages.forEach((img) => {
    if (img.active === false) {
      const dot = document.querySelector(`[data-image-attached = "${img.name}"]`);
      console.log(dot, img.name);
      if (dot.classList.contains('active')) {
        dot.classList.remove('active');
        return;
      }
    }
    if (img.active === true) {
      const dot = document.querySelector(`[data-image-attached = "${img.name}"]`);
      console.log(dot, img.name);
      dot.classList.add('active');
    }
  });
}

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
  myImages[myImages.length - 1].active = false;
  myImages[0].active = true;
  return url;
}
function lastImgUrl() {
  const url = myImages[myImages.length - 1].imgUrl;
  myImages[0].active = false;
  myImages[myImages.length - 1].active = true;
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
function findCurrentDiv() {
  return frame.firstChild;
}

function next() {
  for (let i = 0; i < myImages.length; i += 1) {
    if (i === (myImages.length - 1)) {
      renderFirstPhoto();
      makeActive();
    }
    if (myImages[i].imgUrl === findCurrentPhoto()) {
      console.log(myImages[i + 1].imgUrl);
      renderImg(myImages[i + 1].imgUrl);
      myImages[i].active = false;
      myImages[i + 1].active = true;
      makeActive();
      console.log(myImages);
      return;
    }
  }
}
function previous() {
  for (let i = myImages.length - 1; i > -1; i -= 1) {
    if (i === 0) {
      renderLastPhoto();
      makeActive();
    }
    if (myImages[i].imgUrl === findCurrentPhoto()) {
      console.log(myImages[i - 1].imgUrl);
      renderImg(myImages[i - 1].imgUrl);
      myImages[i].active = false;
      myImages[i - 1].active = true;
      makeActive();
      console.log(myImages);
      return;
    }
  }
}
function bulletClick(dot) {
  const picture = dot.dataset.imageAttached;
  myImages.forEach((img) => {
    if (picture === img.name) {
      myImages.forEach((imgo) => {
        if (imgo.imgUrl === findCurrentPhoto()) {
          imgo.active = false;
        }
      });
      renderImg(img.imgUrl);
      img.active = true;
      makeActive();
    }
  });
}
function appendBullets() {
  for (let i = 0; i < myImages.length; i += 1) {
    const dot = document.createElement('div');
    if (i === 0) {
      dot.classList.add('dot');
      dot.dataset.imageAttached = myImages[i].name;
    } else {
      dot.classList.add('dot');
      dot.dataset.imageAttached = myImages[i].name;
    }
    dot.addEventListener('click', () => {
      bulletClick(dot);
    });
    dots.appendChild(dot);
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
appendBullets();
findCurrentDiv();
makeActive();
// next();
