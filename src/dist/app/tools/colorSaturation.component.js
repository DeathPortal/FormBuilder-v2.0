"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var RGB = (function () {
    function RGB() {
    }
    return RGB;
}());
exports.RGB = RGB;
var ColorSaturationComponent = (function () {
    function ColorSaturationComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.response = new core_1.EventEmitter();
        this.sliderValue = 0;
        this.sliderLeft = 0;
        this.hueTop = -6;
        this.brightTop = -7;
        this.satLeft = 121;
        this.red = 255;
        this.green = 0;
        this.blue = 0;
        this.hue = 0;
        this.sat = 100;
        this.bright = 100;
        this.width = 128;
        this.height = 128;
        this.offsetRedTop = 0;
        this.offsetGreenTop = 0;
        this.offsetBlueTop = 0;
        this.offsetRedLeft = 255;
        this.offsetGreenLeft = 0;
        this.offsetBlueLeft = 0;
        this.actualRed = Math.round(((this.red + this.offsetRedLeft) / 2) - this.offsetRedTop);
        this.actualGreen = Math.round(((this.green + this.offsetGreenLeft) / 2) - this.offsetGreenTop);
        this.actualBlue = Math.round(((this.blue + this.offsetBlueLeft) / 2) - this.offsetBlueTop);
        this.backgroundColor = "rgba(" + this.red + "," + this.green + "," + this.blue + ",1)";
        this.actualColor = "rgba(" + this.actualRed + "," + this.actualGreen + "," + this.actualBlue + ",1)";
        this.hex = (this.convertToHex(this.actualRed) + this.convertToHex(this.actualGreen) + this.convertToHex(this.actualBlue)).toUpperCase();
        this.complementedColor = ((255 - this.actualRed).toString(16) + (255 - this.actualGreen).toString(16) + (255 - this.actualBlue).toString(16)).toUpperCase();
        this.updateColors();
    }
    ColorSaturationComponent.prototype.onmousemove = function (event) {
        event.preventDefault();
        var top = parseFloat(event.target.style.top.replace("px", "")) + 6;
        this.hue = (top / this.height) * 360;
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
    };
    ColorSaturationComponent.prototype.calcOffset = function (event) {
        event.preventDefault();
        this.element = event;
        this.updateActualColor(event);
    };
    ColorSaturationComponent.prototype.updateActualColor = function (event) {
        try {
            var top = parseFloat(event.target.style.top.replace("px", "")) + 7;
            var left = parseFloat(event.target.style.left.replace("px", "")) + 7;
            this.sat = (left / this.width) * 100;
            this.bright = ((this.height - top) / this.height) * 100;
        }
        catch (err) {
        }
        this.updateColors();
    };
    ColorSaturationComponent.prototype.HSI2RGB = function (h, s, i) {
        var rgb = {};
        if (s == 0) {
            rgb.r = rgb.g = rgb.b = i;
        }
        else {
            var t1 = i;
            var t2 = (1 - s) * i;
            var t3 = (t1 - t2) * (h % 60) / 60;
            if (h == 360)
                h = 0;
            if (h < 60) {
                rgb.r = t1;
                rgb.b = t2;
                rgb.g = t2 + t3;
            }
            else if (h < 120) {
                rgb.g = t1;
                rgb.b = t2;
                rgb.r = t1 - t3;
            }
            else if (h < 180) {
                rgb.g = t1;
                rgb.r = t2;
                rgb.b = t2 + t3;
            }
            else if (h < 240) {
                rgb.b = t1;
                rgb.r = t2;
                rgb.g = t1 - t3;
            }
            else if (h < 300) {
                rgb.b = t1;
                rgb.g = t2;
                rgb.r = t2 + t3;
            }
            else if (h < 360) {
                rgb.r = t1;
                rgb.g = t2;
                rgb.b = t1 - t3;
            }
            else {
                rgb.r = 0;
                rgb.g = 0;
                rgb.b = 0;
            }
        }
        return rgb;
    };
    ColorSaturationComponent.prototype.RGB2HSI = function (r, g, b) {
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var hsi = {};
        var d = max - min;
        s = max == 0 ? 0 : d / max;
        if (max == min) {
            h = 0; // achromatic
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        hsi.h = h;
        hsi.s = s;
        hsi.i = v;
        return hsi;
    };
    ColorSaturationComponent.prototype.updateRGB = function () {
        var hsi = this.RGB2HSI(this.red / 255, this.green / 255, this.blue / 255);
        this.hue = hsi.h * 360;
        this.sat = hsi.s * 100;
        this.bright = hsi.i * 100;
        this.hueTop = (hsi.h * this.height) - 6;
        this.brightTop = (this.height - hsi.i * this.height) - 7;
        this.satLeft = (hsi.s * this.width) - 7;
        this.updateActualColor(null);
        this.updateColors();
    };
    ColorSaturationComponent.prototype.updateColors = function () {
        var rgb = this.HSI2RGB(this.hue, 1, 1);
        this.backgroundColor = "rgba(" + Math.round(rgb.r * 255) + "," + Math.round(rgb.g * 255) + "," + Math.round(rgb.b * 255) + ",1)";
        var rgb = this.HSI2RGB(this.hue, this.sat / 100, this.bright / 100);
        this.red = Math.round(255 * rgb.r);
        this.green = Math.round(255 * rgb.g);
        this.blue = Math.round(255 * rgb.b);
        var blackness = (this.red + this.green + this.blue) / 3;
        if (blackness > 128) {
            this.complementedColor = '#000';
        }
        else {
            if ((1 - this.sliderValue) > 0.5) {
                this.complementedColor = '#FFF';
            }
            else {
                this.complementedColor = '#000';
            }
        }
        this.actualColor = "rgba(" + this.red + "," + this.green + "," + this.blue + ",1)";
        var hsi = this.RGB2HSI(rgb.r, rgb.g, rgb.b);
        this.hex = '#' + (this.convertToHex(this.red) + this.convertToHex(this.green) + this.convertToHex(this.blue)).toUpperCase();
        this.selectedColor = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + (1 - this.sliderValue) + ")";
    };
    ColorSaturationComponent.prototype.convertToHex = function (num) {
        var hex = num.toString(16);
        if (num < 16) {
            hex = '0' + hex;
        }
        return hex;
    };
    ColorSaturationComponent.prototype.sliderMove = function (event) {
        var l = parseInt(event.target.style.left.replace("px", "")) + 5;
        this.sliderLeft = l;
        var width = event.srcElement.parentElement.clientWidth;
        this.sliderValue = l / width;
        event.preventDefault();
        this.updateColors();
    };
    ColorSaturationComponent.prototype.okStatus = function () {
        var evt = {};
        evt.statusCode = 0;
        evt.response = this.selectedColor;
        this.response.next(evt);
    };
    ColorSaturationComponent.prototype.cancelStatus = function () {
        var evt = {};
        evt.statusCode = 1;
        this.response.next(evt);
    };
    return ColorSaturationComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ColorSaturationComponent.prototype, "response", void 0);
ColorSaturationComponent = __decorate([
    core_1.Component({
        selector: "colorsat",
        templateUrl: "./html/colorSaturation.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], ColorSaturationComponent);
exports.ColorSaturationComponent = ColorSaturationComponent;
//# sourceMappingURL=colorSaturation.component.js.map