# 绘制一只解构风格的皮卡丘
![pikachu.gif](https://i.loli.net/2021/01/05/AuXzraMPF4TcOKN.gif)
# 在线预览

# 实现思路
- 把预先写好的css字符串逐字 `substring` 放进要在页面上展示的字符串中
- 并配合 `setTimeout` 以达到可视化动态绘制的风格

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
