import { Component, Output, EventEmitter} from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

export class RGB{
    r: number;
    g:number;
    b:number;
}

@Component({
    selector: "colorsat",
    templateUrl: "./html/colorSaturation.component.html",
    styleUrls: ['./css/lib/bootstrap.css','./css/styles.css']
})
export class ColorSaturationComponent{
    @Output() response :EventEmitter<any> = new EventEmitter();
    sliderEle: any;
    sliderValue: number = 0;
    sliderLeft : number = 0;
    selectedColor: string;
    hueTop:number = -6;
    brightTop:number = -7;
    satLeft: number = 121;
    red:number = 255;
    green: number = 0;
    blue: number = 0;
    hue: number = 0;
    sat: number = 100;
    bright: number = 100;
    width: number  = 128;
    height: number  = 128;
    offsetRedTop:number = 0;
    offsetGreenTop:number = 0;
    offsetBlueTop:number = 0;
    offsetRedLeft:number = 255;
    offsetGreenLeft:number = 0;
    offsetBlueLeft:number = 0;
    actualRed: number = Math.round(((this.red+this.offsetRedLeft)/2)-this.offsetRedTop);
    actualGreen: number = Math.round(((this.green+this.offsetGreenLeft)/2)-this.offsetGreenTop);
    actualBlue:number = Math.round(((this.blue+this.offsetBlueLeft)/2)-this.offsetBlueTop);
    backgroundColor : string = "rgba("+this.red+","+this.green+","+this.blue+",1)";
    actualColor: string = "rgba("+this.actualRed+","+this.actualGreen+","+this.actualBlue+",1)";
    element: any;
    gradientMap: SafeStyle;
    hex: string = (this.convertToHex(this.actualRed) + this.convertToHex(this.actualGreen) + this.convertToHex(this.actualBlue)).toUpperCase();
    complementedColor: string = ((255-this.actualRed).toString(16) + (255-this.actualGreen).toString(16) + (255-this.actualBlue).toString(16)).toUpperCase();
    constructor(private _sanitizer: DomSanitizer) {
        this.updateColors();
    }

    onmousemove(event : any){
        event.preventDefault();
        var top = parseFloat(event.target.style.top.replace("px",""))+6
        this.hue = (top/this.height)*360;
        // if((top)<=128/6){
        //      this.green = Math.floor(((12)*(top)));
        //     this.blue = 0;
        //     this.red = 255;
        // }
        // else if((top)>128/6 && (top)<=(128*2/6)){
        //     this.green = 255;
        //     this.blue = 0;
        //     this.red =  Math.floor((255*2) - ((12)*(top)));
        // } else if((top)>128*2/6 && (top)<=(128*3/6)){
        //     this.green = 255;
        //     this.red = 0;
        //     this.blue =  Math.floor(((12)*(top)) - (255*2));
        // }
        // else if((top)>128*3/6 && (top)<=(128*4/6)){
        //     this.blue = 255;
        //     this.red = 0;
        //     this.green =  Math.floor((255*4) - ((12)*(top)));
        // }else if((top)>128*4/6 && (top)<=(128*5/6)){
        //     this.blue = 255;
        //     this.green = 0;
        //     this.red =  Math.floor(((12)*(top)) - (255*4));
        // }else if((top)>128*5/6 && (top)<=(128*6/6)){
        //     this.red = 255;
        //     this.green = 0;
        //     this.blue =  Math.floor((255*6) - ((12)*(top)));
        // }
        this.updateColors;
        this.updateActualColor(this.element);
    }

    calcOffset(event: any) {
        event.preventDefault();
        this.element = event;
       this.updateActualColor(event);
    }
    updateActualColor(event: any){
       
        try{
          var top = parseFloat(event.target.style.top.replace("px",""))+7;
        var left = parseFloat(event.target.style.left.replace("px",""))+7;
        this.sat = (left/this.width)*100;
        this.bright = ((this.height-top)/this.height)*100;
        // this.offsetRedLeft = ((255 - (this.red)) * ((this.width - left)/this.width));
        // this.offsetGreenLeft = ((255 - (this.green)) * ((this.width - left)/this.width));
        // this.offsetBlueLeft = ((255 - (this.blue)) * ((this.width - left)/this.width));
        // this.offsetRedTop = ((this.red + this.offsetRedLeft) * (top/this.width));
        // this.offsetGreenTop = ((this.green + this.offsetGreenLeft) * (top/this.width));
        // this.offsetBlueTop = ((this.blue + this.offsetBlueLeft) * (top/this.width));
        // // this.offsetRedLeft = ((255 - (this.red- this.offsetRedTop)) * ((this.width - left)/this.width));
        // // this.offsetGreenLeft = ((255 - (this.green - this.offsetGreenTop)) * ((this.width - left)/this.width));
        // // this.offsetBlueLeft = ((255 - (this.blue - this.offsetBlueTop)) * ((this.width - left)/this.width));
        // this.actualRed = Math.round(((this.red+this.offsetRedLeft))-this.offsetRedTop);
        // this.actualGreen = Math.round(((this.green+this.offsetGreenLeft))-this.offsetGreenTop);
        // this.actualBlue = Math.round(((this.blue+this.offsetBlueLeft))-this.offsetBlueTop);
        // this.actualColor = "rgba("+this.actualRed+","+this.actualGreen+","+this.actualBlue+",1)";
        // this.hex = (this.convertToHex(this.actualRed) + this.convertToHex(this.actualGreen) + this.convertToHex(this.actualBlue)).toUpperCase();
        // this.complementedColor = ((255-this.actualRed).toString(16) + (255-this.actualGreen).toString(16) + (255-this.actualBlue).toString(16)).toUpperCase();
        }catch(err){
           
        }
        this.updateColors();
    }

    HSI2RGB(h:number,s:number,i:number): any{
        var rgb : any = {};
        if (s == 0) {

        rgb.r = rgb.g = rgb.b = i;
        } else {
        var t1 = i;
        var t2 = (1 - s) * i;
        var t3 = (t1 - t2) * (h % 60) / 60;

            if (h == 360) h = 0;

                if (h < 60) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3 }
                else if (h < 120) { rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3 }
                else if (h < 180) { rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3 }
                else if (h < 240) { rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3 }
                else if (h < 300) { rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3 }
                else if (h < 360) { rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3 }
                else { rgb.r = 0; rgb.g = 0; rgb.b = 0 }
        }
       return rgb;
        
    }

    RGB2HSI(r:number, g:number, b:number) :any {

        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var hsi: any = {};
        var d = max - min;
        s = max == 0 ? 0 : d / max;

        if(max == min){
            h = 0; // achromatic
        }else{
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
  hsi.h = h;
  hsi.s = s;
  hsi.i = v;
  return hsi;
}

updateRGB(){
    var hsi = this.RGB2HSI(this.red/255,this.green/255,this.blue/255);
    this.hue = hsi.h*360;
    this.sat = hsi.s*100;
    this.bright = hsi.i*100;
    this.hueTop = (hsi.h*this.height)-6;
    this.brightTop = (this.height -  hsi.i*this.height)-7;
    this.satLeft = (hsi.s*this.width)-7;
    this.updateActualColor(null);
    this.updateColors();
    
}

updateColors(){
    var rgb: RGB = this.HSI2RGB(this.hue,1,1);
    this.backgroundColor = "rgba("+Math.round(rgb.r*255)+","+Math.round(rgb.g*255)+","+Math.round(rgb.b*255)+",1)";
    var rgb:RGB = this.HSI2RGB(this.hue,this.sat/100,this.bright/100);
         this.red = Math.round(255*rgb.r);
        this.green = Math.round(255*rgb.g);
        this.blue = Math.round(255*rgb.b);
        var blackness =  (this.red+this.green+this.blue)/3;
        if(blackness > 128){
            this.complementedColor = '#000';
        }else{
             if((1-this.sliderValue)>0.5){
            this.complementedColor = '#FFF';
            }else{
            this.complementedColor = '#000';
            }
        }
         this.actualColor = "rgba("+this.red+","+this.green+","+this.blue+",1)";
         var hsi = this.RGB2HSI(rgb.r,rgb.g,rgb.b);
         this.hex = '#'+(this.convertToHex(this.red) + this.convertToHex(this.green) + this.convertToHex(this.blue)).toUpperCase();
         this.selectedColor = "rgba("+this.red+","+this.green+","+this.blue+","+(1-this.sliderValue)+")";
}

    convertToHex(num: number): string{
        var hex = num.toString(16); 
        if(num < 16){
            hex = '0'+hex;
        } 
        return hex;
    }

    sliderMove(event: any){
        var l = parseInt(event.target.style.left.replace("px","")) + 5;
        this.sliderLeft = l;
        var width = event.srcElement.parentElement.clientWidth;
        this.sliderValue = l/width;
        event.preventDefault();
        this.updateColors();
    }
     okStatus(){
        var evt: any = {};
        evt.statusCode = 0;
        evt.response = this.selectedColor;
        this.response.next(evt);
    }

    cancelStatus(){
        var evt: any = {};
        evt.statusCode = 1;
        this.response.next(evt);
    }

}