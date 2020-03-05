
import { randomNumber, randomColor } from "./helper";
let installed = false
export default {
  install: function (Vue) {
    if (installed) {
      throw new Error('vue plugin named "vue-identify" has regidted, Do not register twice')
    }
    installed = true
    Vue.component('v-captura', {
      template: `<div>
                  <canvas width="120" height="40" id="c1" />
                </div>`,
      methods: {
        setPic() {
          debugger
          var w = 120;
          var h = 40;
          var fs = randomNumber(18, 40);//字体的大小
          let c = this.code;
          let c1 = document.querySelector("#c1");
          let ctx = c1.getContext("2d");
          ctx.fillStyle = randomColor(180, 230);
          ctx.fillRect(0, 0, w, h);
          // 处理字体
          let deg = randomNumber(-30, 30); //字体的旋转角度
          ctx.font = fs + "px Simhei";
          ctx.textBaseline = "top";
          ctx.fillStyle = randomColor(80, 150);
          ctx.save();
          // ctx.translate(30 * i + 15, 15);
          // ctx.rotate((deg * Math.PI) / 180);
          ctx.fillText(c, 0, 0, 20);
          ctx.restore();
          for (var i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(randomNumber(0, w), randomNumber(0, h));
            ctx.lineTo(randomNumber(0, w), randomNumber(0, h));
            ctx.strokeStyle = randomColor(180, 230);
            ctx.closePath();
            ctx.stroke();
          }
          //6.随机产生40个干扰的小点
          for (var i = 0; i < 40; i++) {
            ctx.beginPath();
            ctx.arc(randomNumber(0, w), randomNumber(0, h), 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = randomColor(150, 200);
            ctx.fill();
          }
        }
      },
      props: {
        code: {
          type: String,
          default: ""
        }
      },
      mounted() {
        this.setPic();
      },
      watch: {
        code(newVal, oldVal) {
          if (oldVal) {
            this.setPic();
          }
        }
      }

    })
    installed = true
  }
}