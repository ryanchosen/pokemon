const string=`/*你看，我是这样画一个皮卡丘的*/
.skin * {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.skin *::before {
  box-sizing: border-box;
}
.skin *::after {
  box-sizing: border-box;
}
@keyframes shakeNose {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.skin {
  position: relative;
  background: #ffe600;
  min-height: 50vh;
}
@media screen and (max-width: 400px) {
  .skin {
    top: -50px;
  }
}
.nose {
  border: 10px solid black;
  border-color: black transparent transparent transparent;
  width: 0px;
  height: 0px;
  position: relative;
  top: 145px;
  left: 50%;
  z-index: 10;
  margin-left: -5px; 
}
.nose:hover{
    animation: shakeNose 300ms infinite;
    transform-origin:50% 100%; 
    cursor:pointer;
}
.banyuan {
  background-color: black;
  position: absolute;
  width: 20px;
  height: 6px;
  transform: translateX(-50%);
  top: -16px;
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0% ;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  background: #2e2e2e;
  border-radius: 50%; 
}
.eye.left {
  transform: translateX(-210%);
}
.eye.right {
  transform: translateX(110%);
}
.eye::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 8px;
  top: 4px;
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth :hover{
  cursor:pointer
}
.mouth .up {
  position: relative;
  top: -34px;
  z-index:2
}
.mouth .up .lip.left {
  border: 5px solid black;
  border-color: transparent transparent black black;
  height: 30px;
  width: 100px;
  border-radius: 0% 0% 0% 31% / 0% 0% 0% 100%;
  position: absolute; 
  left: 27%;
  top: 28px;
  transform:  translateX(-50%) rotate(-15deg);/* rotate(-15deg)*/
  background: #ffe600;
}
.mouth .up .lip.left::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  right: -6px;
  bottom: 0;
  background: #ffe600;
}
/* 解决边框四舍五入问题，用一块cover */
.mouth .up .lip.left .cover{
  width: 95px;
  height: 5px;
  background: #ffe600;
  position: relative;
  top: -7px;
  margin-left: 1px;
}
.mouth .up .lip.right {
  border: 5px solid black;
  border-color: transparent transparent black black;
  height: 30px;
  width: 100px;
  border-radius: 0% 0% 31% 0% / 0% 0% 100% 0%;
  position: absolute; 
  left: 77%;
  top: 28px;
  transform:  translateX(-50%) rotate(15deg);
  background: #ffe600;
}
.mouth .up .lip.right::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  right: 89px;
  bottom: 0;
  background: #ffe600;
}
.mouth .down {
  width: 64%;
  height: 191px;
  position: absolute;
  top: 1px;
  border-radius: 0% 0% 50% 50% / 0% 0% 100% 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: #9b010a;
  border: 4px solid black;
  overflow: hidden;
}
.mouth .down .circle {
  width: 145px;
  height: 145px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  border-radius: 50%;
  background: #ff485f;
}
.face.left {
  width: 100px;
  height: 100px;
  border: 3px solid black;
  position: absolute;
  left: 50%;
  transform: translateX(-200%);
  border-radius: 50%;
  background: #ff1800;
  top: 216px;
}
.face.right {
  width: 100px;
  height: 100px;
  border: 3px solid black;
  position: absolute;
  left: 50%;
  transform: translateX(100%);
  border-radius: 50%;
  background: #ff1800;
  top: 216px;
}
.face.left,.face.right {
  cursor:pointer
}
.face img{
    position: absolute;
    left: 50%;
    top: 50%;
}
.face.left img{
    transform:rotateY(180deg);
    transform-origin:0 0;
}
@media screen and (max-width: 400px) {
  .face.left {
    transform: translateX(-185%);
  }
  .face.right{
    transform: translateX(85%);
  }
}
/*最后祭出皮卡丘的大招，十万伏特*/
.thunder {
  display: inline;
}
/*画完啦，摸摸它的鼻子看它放电吧~*/`

export default string;