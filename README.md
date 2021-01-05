![pikachu.gif](https://i.loli.net/2021/01/05/AuXzraMPF4TcOKN.gif)
# 在线预览
- ![42_259_99e6be0de62fee6b3bd735ac2070c7ca_d293766769c876c3e22301f1e92f18c3.png](https://i.loli.net/2021/01/06/bBCv5DHIUm7uoVi.png)

- https://ryanchosen.github.io/pokemon/dist/
# 实现思路
- 先保证 页面结构 和 样式 能满足静态显示一只皮卡丘
- 把完成的css字符串放入 `string.js`
- `main.js` 中导入 `string.js` 将字符串逐字向后 `slice` 并判断子字符串的最后一个字是否为空格符或者换行符
- 将空格符替换为 `&nbsp;` , 将换行符替换为 `<br>` 放回子字符串，
- 然后，将`slice` 下的子字符串放进页面上用于展示的 `element.innerHTML`
```
// 比如: '123 ' ===> '123&nbsp;'
```
- 最后，配合 `setTimeout` 以达到可视化动态绘制的风格
> *注意 `innerHTML` 和 `innerText`的区别：  
> 浏览器会把页面中多个手打的空格都给整理成1个，不论 `innerHTML` 还是 `innerText`  
> 浏览器不会把`innerText`字符串里的tag解析成dom,但是会保留 `innerText`字符串中的多个换行
> 浏览器会把 `innerHTML` 字符串中的tag解析出来，也会把转义字符正确打印，有多少个&nbsp;就会生效多少个空格，
>但依旧会把多个手打的空格都给整理成1个, innerHTML中的一个或多个换行符号，都展示为一个空格，

# 功能描述
* 布局支持 pc端 和 移动端
* 可调节整个绘制过程的播放速度
* 可以与皮卡丘简单地音效动效交互

# 使用方法
```
下载后本地运行
parcel src/index.html 
编译发布
parcel build src/index.html --no-minify --public-url ./
```
