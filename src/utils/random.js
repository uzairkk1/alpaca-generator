export const random = (imgData, setImgData, setImg) => {
  let randomNumber;

  let currentDirectory;
  let currentValue;
  let result;

  const elementClone = [...imgData];

  elementClone.forEach((element) => {
    currentDirectory = element.directory;
    randomNumber = Math.floor(Math.random() * element.items.length);
    currentValue = element.items[randomNumber].filename;
    element.items.forEach((item) => (item.selected = false));
    element.items[randomNumber].selected = true;
    result = { ...result, [currentDirectory]: currentValue };
  });

  setImgData(elementClone);
  setImg(result);
};
