import string from "./string.js";
/*如何保留空格？？？*/




let audioPlayer = {
    n:1,
    substr:"",
    v:100,
    id:undefined,
    init:()=>{
        audioPlayer.substr = string.slice(0, audioPlayer.n);
        demo.innerHTML = audioPlayer.substr;
        style.innerHTML = audioPlayer.substr;
        audioPlayer.play(); // 一进页面运行定时器
        audioPlayer.bindEvents();
    },
    bindEvents:()=>{
        btnPause.onclick = audioPlayer.stop;
        btnPlay.onclick = () => {
            console.log(audioPlayer.id);
            if (!audioPlayer.id) {
                audioPlayer.play();
            }
        };
        btnSlow.onclick = audioPlayer.slow;
        btnNormal.onclick = audioPlayer.normal;
        btnFast.onclick = audioPlayer.fast;
    },
    fn: () => { /*111111 面向对象的函数写法有三种注意哈 普通函数两种 箭头函数一种*/
        console.log(audioPlayer.n, string.length)
        if (audioPlayer.n === string.length) {
            clearInterval(audioPlayer.id);
            return;
        }
        audioPlayer.n < string.length && (audioPlayer.n = audioPlayer.n + 1);
        // 每次从string中追加一个字符到substr里，如果遇到空格就追加转义字符，如果遇到换行就追加<br>
        if (
            string
                .slice(0, audioPlayer.n)
                .slice(audioPlayer.n - 1, audioPlayer.n)
                .charCodeAt() === 32
        ) {
            // 当前指向的string的最后一个字是空格的话 我就给子字符串转移符号
            audioPlayer.substr += "&nbsp;";
        } else if (
            string
                .slice(0, audioPlayer.n)
                .slice(audioPlayer.n - 1, audioPlayer.n)
                .charCodeAt() === 10
        ) {
            audioPlayer.substr += "<br>";
        } else {
            audioPlayer.substr += string.slice(0, audioPlayer.n).slice(audioPlayer.n - 1, audioPlayer.n);
        }
        demo.innerHTML = audioPlayer.substr;
        style.innerHTML = string.slice(0, audioPlayer.n); // style里无所谓，直接扔过去即可
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
    },
    play: () => audioPlayer.id=setInterval(audioPlayer.fn, audioPlayer.v),
    stop: () => {
        clearInterval(audioPlayer.id); // 仅仅是把定时器的功能停止了，但不会将id置空
        audioPlayer.id = null; // 将id置空是为了布尔判断
    },
    slow: () => {
        audioPlayer.v = 100;
        audioPlayer.stop();
        audioPlayer.play();
    },
    normal: () => {
        audioPlayer.v = 30;
        audioPlayer.stop();
        audioPlayer.play();
    },
    fast: () => {
        audioPlayer.v = 10;
        audioPlayer.stop();
        audioPlayer.play();
    }
}
audioPlayer.init();


mouth.onmouseover = () => {
    myAudio.play();
}


