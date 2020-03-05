//产生随机数
export const randomNumber = (min, max) => parseInt(Math.random() * (max - min) + min);

// 产生随机颜色
export const randomColor = (min, max) => {
  var r = randomNumber(min, max);
  var g = randomNumber(min, max);
  var b = randomNumber(min, max);
  return `rgb(${r},${g},${b})`;
}
