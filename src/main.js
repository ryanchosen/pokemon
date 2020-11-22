import string from "./string.js";
/*如何保留空格？？？*/
let n = 1;
let substr = "";
substr = string.slice(0, n);
demo.innerHTML = substr;
style.innerHTML = substr;
// 定时器函数
let fn = () => {
  console.log(n === string.length)
  n === string.length && clearInterval(id);
  n += 1;
  // 每次从string中追加一个字符到substr里，如果遇到空格就追加转义字符，如果遇到换行就追加<br>
  if (
    string
      .slice(0, n)
      .slice(n - 1, n)
      .charCodeAt() === 32
  ) {
    // 当前指向的string的最后一个字是空格的话 我就给子字符串转移符号
    substr += "&nbsp;";
  } else if (
    string
      .slice(0, n)
      .slice(n - 1, n)
      .charCodeAt() === 10
  ) {
    substr += "<br>";
  } else {
    substr += string.slice(0, n).slice(n - 1, n);
  }
  demo.innerHTML = substr;
  style.innerHTML = string.slice(0, n); // style里无所谓，直接扔过去即可
  demo.scrollTop = 9999;
  // 文本中的空格和转义符号都会被浏览器读到，但是具体如何展示的，这是听浏览器的，
  // 浏览器会把html页面中多个手打的空格都给整理成1个

  // 浏览器读到你这个是innerText字符串时，如果字符串里有tag
  // 不会帮你把tag解析出来，会把多个手打的空格都给整理成1个
  // 但是浏览器会帮你保留innerText字符串中的换行，你有多个换行它就展示多个换行，

  // 浏览器读到你这个是innerHTML字符串时，会帮你把tag解析出来，也会把转义字符正确打印，
  // 有多少个&nbsp;就会生效多少个空格，但依旧会把多个手打的空格都给整理成1个
  // 如果innerHTML中出现一个换行符号，则展示为一个空格，
  // 如果innerHTML中出现多个换行符号，则展示为一个空格
};

let v = 100; // 设置速率
const play = () => setInterval(fn, v);
const stop = () => clearInterval(id);

let id = play(); // 一进页面运行定时器

// 只要代码重复了就丑，‘优化’一下代码，其实就是让他们看着好看些
btnPause.onclick = () => {
  stop();
};
btnPlay.onclick = () => {
  id = play();
};
btnSlow.onclick = () => {
  v = 100;
  stop();
  id = play();
};
btnNormal.onclick = () => {
  v = 30;
  stop();
  id = play();
};
btnFast.onclick = () => {
  v = 10;
  stop();
  id = play();
};
mouth.onmouseover=()=>{
  myAudio.play();
}


