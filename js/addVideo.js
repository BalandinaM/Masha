class Video {
  constructor(srcMp4, srcOgv, srcAvi, parent) {
    this.srcMp4 = srcMp4;
    this.srcOgv = srcOgv;
    this.srcAvi = srcAvi;
    this.parent = document.querySelector(parent);;
  }

  render() {
    const element = document.createElement("video");
    element.setAttribute('controls', '');
    element.setAttribute('muted', '');
    //element.setAttribute('loop', 'true');
    element.setAttribute('width', '232');
    element.setAttribute('height', '424')
    element.innerHTML = `
                <source src=${this.srcMp4} type="video/mp4">
                <source src=${this.srcOgv} type="video/ogg">
                <source src=${this.srcAvi} type="video/avi">
                Ваш браузер не поддерживает встроенные видео.
            `;
    this.parent.append(element);
  }
}

new Video(
  "./video/beautyPresentation.mp4",
  "./video/beautyPresentation.ogv",
  "./video/beautyPresentation.avi",
  ".exsamplesOfWorks__video"
).render();

// new Video(
//   "./video/changeSpace.mp4",
//   "./video/changeSpace.ogv",
//   "./video/changeSpace.avi",
//   ".exsamplesOfWorks__wrapper"
// ).render();
