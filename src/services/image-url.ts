const getCroppedImageUrl = (url: string) => {
  let index = url.indexOf('/games');
  return url.slice(0, index) + '/crop/600/400' + url.slice(index);
};

export default getCroppedImageUrl;
