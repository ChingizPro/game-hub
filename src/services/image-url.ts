import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  if(!url) return noImage;
  let target = '/media';
  let index = url.lastIndexOf(target) + target.length;
  return url.slice(0, index) + '/crop/600/400' + url.slice(index);
};

export default getCroppedImageUrl;
