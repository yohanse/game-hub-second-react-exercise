const getCroppedImage = (url: string) => {
  if (url === null || url.length === 0){
    return 
  }
  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;
