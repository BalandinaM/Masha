import { dataBase } from "./dataVideo.js";

class Video {
  constructor(srcMp4, srcOgv, srcAvi, parent) {
    this.srcMp4 = srcMp4;
    this.srcOgv = srcOgv;
    this.srcAvi = srcAvi;
    this.parent = document.querySelector(parent);;
  }

  render() {

    const elementTemplate = document.querySelector('#video-item').content.querySelector('.exsamplesOfWorks__video');
    const elem = elementTemplate.cloneNode(true);

    elem.querySelector('.video-item--mp4').setAttribute('src', this.srcMp4);
    elem.querySelector('.video-item--ogg').setAttribute('src', this.srcOgv);
    elem.querySelector('.video-item--avi').setAttribute('src', this.srcAvi);

    this.parent.append(elem);
  }
}

dataBase.forEach(elem => {
  new Video(elem.mp4, elem.ogv,elem.avi, '.exsamplesOfWorks__wrapper').render();
});

