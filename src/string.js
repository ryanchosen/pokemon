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
`

export default string;