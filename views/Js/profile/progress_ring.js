
import Colors from "./colors.js"

console.log(Colors)

class ProgressRing extends HTMLElement {

    percent;
    lock = 0;

    constructor() {
      super();
      
        
      var height = (5)*(document.getElementById('skills-container').clientHeight)/10;
      var width = (7)*(document.getElementById('skill-per-id').clientWidth)/10;

      var size = Math.min(width,height);


      console.log(width,height,size);



      console.log(width,size);

      const stroke = size/40;
      const radius = size/2;
      const normalizedRadius = radius - stroke * 2;
      this.percent = this.getAttribute('percent');
      this._circumference = normalizedRadius * 2 * Math.PI;
  
      this._root = this.attachShadow({mode: 'open'});
      this._root.innerHTML = `
        <svg
            class="progress-ring"
            height="${radius * 2}"
            width="${radius * 2}">
            <circle
                z-index=1;
                stroke="${Colors.mediumback}"
                stroke-width="${stroke}"
                fill="transparent"
                r="${normalizedRadius}"
                cx="${radius}"
                cy="${radius}"
            />
            <circle
                class="progress-circle"
                z-index=2;
                stroke="${Colors.lightfont}"
                stroke-dasharray="${this._circumference} ${this._circumference}"
                style="stroke-dashoffset:${this._circumference}"
                stroke-width="${stroke}"
                fill="transparent"
                r="${normalizedRadius}"
                cx="${radius}"
                cy="${radius}"
            />
            <text x="50%" y="50%" stroke-width="2px" text-anchor="middle" fill="${Colors.textfont}" dy=".3em">${this.percent}%</text>
            
        </svg>

        <style>
            circle {
                transition: stroke-dashoffset 0s;
                transform: rotate(-90deg);
                transform-origin: 50% 50%;
            }
            text {
                font-size: 2em;
                font-family: 'Lato';
            }
        </style>  
      `;
    }
    
    setProgress(progress) {
      const offset = this._circumference - (progress / 100 * this._circumference);
      const circle = this._root.querySelectorAll('circle');

      circle[1].style.strokeDashoffset = offset; 
    }


    progressAnimation() {
        if(this.lock == 1) {
            return;
        }
        this.lock = 1;

        console.log(this.percent)
        var progress = 0;
        const interval = setInterval(() => {
            progress += 0.1;
            this.setProgress(progress);
            if (progress >= this.percent) {
                clearInterval(interval);
                this.lock = 0;
            }
        }, 1);     
    }



    setRadius () {
        
        
        var height = (2)*(document.getElementById('skills-container').clientHeight)/10;
        var width = (7)*(document.getElementById('skill-per-id').clientWidth)/10;

        var size = Math.min(width,height);


        console.log(width,height,size);
  
        var stroke = size/40;
        var radius = width/2;
        var normalizedRadius = radius - stroke * 2;
        this._circumference = normalizedRadius * 2 * Math.PI;
    
        this._root.innerHTML = `
          <svg
              class="progress-ring"
              height="${radius * 2}"
              width="${radius * 2}">
              <circle
                  z-index=1;
                  stroke="${Colors.mediumback}"
                  stroke-width="${stroke}"
                  fill="transparent"
                  r="${normalizedRadius}"
                  cx="${radius}"
                  cy="${radius}"
              />
              <circle
                  class="progress-circle"
                  z-index=2;
                  stroke="${Colors.lightfont}"
                  stroke-dasharray="${this._circumference} ${this._circumference}"
                  style="stroke-dashoffset:${this._circumference}"
                  stroke-width="${stroke}"
                  fill="transparent"
                  r="${normalizedRadius}"
                  cx="${radius}"
                  cy="${radius}"
              />
              <text x="50%" y="50%" stroke-width="2px" text-anchor="middle" fill="${Colors.textfont}" dy=".3em">${this.percent}%</text>
              
          </svg>
  
          <style>
              circle {
                  transition: stroke-dashoffset 0s;
                  transform: rotate(-90deg);
                  transform-origin: 50% 50%;
              }
              text {
                  font-size: 2em;
                  font-family: 'Lato';
              }
          </style>  
        `;

    }
}
  
window.customElements.define('progress-ring', ProgressRing);
