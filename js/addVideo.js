import { dataBase } from "./dataVideo.js";

class Video {
  constructor(srcMp4, srcOgv, srcAvi, parent) {
    this.srcMp4 = srcMp4;
    this.srcOgv = srcOgv;
    this.srcAvi = srcAvi;
    this.parent = document.querySelector(parent);;
  }

  render() {
    // const element = document.createElement("video");
    // element.setAttribute('controls', '');
    // element.setAttribute('muted', '');
    // //element.setAttribute('loop', 'true');
    // element.setAttribute('width', '232');
    // element.setAttribute('height', '424')
    // element.innerHTML = `
    //             <source src=${this.srcMp4} type="video/mp4">
    //             <source src=${this.srcOgv} type="video/ogg">
    //             <source src=${this.srcAvi} type="video/avi">
    //             Ваш браузер не поддерживает встроенные видео.
    //         `;
    // this.parent.append(element);

    const elementTemplate = document.querySelector('#video-item').content.querySelector('.exsamplesOfWorks__video');
    const elem = elementTemplate.cloneNode(true);

    // elem.querySelector('sourse[type="video/mp4"]').setAttribute(src, this.srcMp4);
    // elem.querySelector('sourse[type="video/ogg"]').setAttribute(src, this.srcOgv);
    // elem.querySelector('sourse[type="video/avi"]').setAttribute(src, this.srcAvi);

    elem.querySelector('.video-item--mp4').setAttribute('src', this.srcMp4);
    elem.querySelector('.video-item--ogg').setAttribute('src', this.srcOgv);
    elem.querySelector('.video-item--avi').setAttribute('src', this.srcAvi);

    // elem.querySelector('.video-item--mp4').setAttribute('src', this.srcMp4);
    // elem.querySelector('.video-item--ogg').setAttribute('src', this.srcOgv);
    // elem.querySelector('.video-item--avi').setAttribute('src', this.srcAvi);

    this.parent.append(elem);
  }
}

// dataBase.forEach(({srcMp4, srcOgv, srcAvi}) => {
//   new Video(srcMp4, srcOgv, srcAvi, '.exsamplesOfWorks__wrapper').render();
// })

dataBase.forEach(elem => {
  new Video(elem.mp4, elem.ogv,elem.avi, '.exsamplesOfWorks__wrapper').render();
})

// new Video(
//   "./video/beautyPresentation.mp4",
//   "./video/beautyPresentation.ogv",
//   "./video/beautyPresentation.avi",
//   ".exsamplesOfWorks__video"
// ).render();

// new Video(
//   "./video/changeSpace.mp4",
//   "./video/changeSpace.ogv",
//   "./video/changeSpace.avi",
//   ".exsamplesOfWorks__wrapper"
// ).render();
