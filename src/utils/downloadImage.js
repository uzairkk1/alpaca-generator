import download from "downloadjs";

export const downloadImg = () => {
  const width = 500;
  const height = 500;

  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const img = document.querySelectorAll(".image-container")[0].children;
  for (let item of img) {
    ctx.drawImage(item, 0, 0, width, height);
  }
  const jpegFile = canvas.toDataURL("image/jpeg");

  download(jpegFile, "alpaca.png");

  // WORKING SOLUTION
  // html2canvas(document.getElementById("image-container")).then(function (
  //   canvas
  // ) {
  //   var jpegFile = canvas.toDataURL("image/jpeg");
  //   download(jpegFile);
  // });
};
