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
var ColorPickerComponent = (function () {
    function ColorPickerComponent() {
        this.response = new core_1.EventEmitter();
        this.selectedColorOption = 'Palettes';
        this.palettesStore = [
            [
                '#FFFFFF',
                '#EEEEEE',
                '#DDDDDD',
                '#CCCCCC',
                '#AAAAAA',
                '#999999',
                '#777777',
                '#666666',
                '#555555',
                '#333333',
                '#111111',
                '#000000'
            ],
            [
                '#FFD8D8',
                '#FFA5A5',
                '#FF7F7F',
                '#FF3F3F',
                '#FF0C0C',
                '#FF0000',
                '#DD0000',
                '#BB0000',
                '#990000',
                '#770000',
                '#550000',
                '#330000'
            ],
            [
                '#D8FFD8',
                '#A5FFA5',
                '#7FFF7F',
                '#3FFF3F',
                '#0CFF0C',
                '#00FF00',
                '#00DD00',
                '#00BB00',
                '#009900',
                '#007700',
                '#005500',
                '#003300'
            ],
            [
                '#D8D8FF',
                '#A5A5FF',
                '#7F7FFF',
                '#3F3FFF',
                '#0C0CFF',
                '#0000FF',
                '#0000DD',
                '#0000BB',
                '#000099',
                '#000077',
                '#000055',
                '#000033'
            ],
            [
                '#FFFFD8',
                '#FFFFA5',
                '#FFFF7F',
                '#FFFF3F',
                '#FFFF0C',
                '#FFFF00',
                '#DDDD00',
                '#BBBB00',
                '#999900',
                '#777700',
                '#555500',
                '#333300'
            ],
            [
                '#FFD8FF',
                '#FFA5FF',
                '#FF7FFF',
                '#FF3FFF',
                '#FF0CFF',
                '#FF00FF',
                '#DD00DD',
                '#BB00BB',
                '#990099',
                '#770077',
                '#550055',
                '#330033'
            ],
            [
                '#D8FFFF',
                '#A5FFFF',
                '#7FFFFF',
                '#3FFFFF',
                '#0CFFFF',
                '#00FFFF',
                '#00DDDD',
                '#00BBBB',
                '#009999',
                '#007777',
                '#005555',
                '#003333'
            ],
        ];
        this.webColors = ['#FFFFFF',
            '#C0C0C0',
            '#808080',
            '#000000',
            '#FF0000',
            '#800000',
            '#FFFF00',
            '#808000',
            '#00FF00',
            '#008000',
            '#00FFFF',
            '#008080',
            '#0000FF',
            '#000080',
            '#FF00FF',
            '#800080'
        ];
    }
    ColorPickerComponent.prototype.okStatus = function () {
        var evt = {};
        evt.statusCode = 0;
        evt.response = this.selectedColor;
        this.response.next(evt);
        this.selectedColorOption = 'Palettes';
    };
    ColorPickerComponent.prototype.cancelStatus = function () {
        var evt = {};
        evt.statusCode = 1;
        this.response.next(evt);
        this.selectedColorOption = 'Palettes';
    };
    ColorPickerComponent.prototype.processResponse = function (evt) {
        if (evt.statusCode == 0) {
            this.selectedColor = evt.response;
            this.okStatus();
        }
        else {
            this.cancelStatus();
        }
    };
    ColorPickerComponent.prototype.onSelect = function (palette) {
        this.selectedColor = palette;
    };
    return ColorPickerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ColorPickerComponent.prototype, "response", void 0);
ColorPickerComponent = __decorate([
    core_1.Component({
        selector: "colorpicker",
        templateUrl: "./html/colorPicker.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    })
], ColorPickerComponent);
exports.ColorPickerComponent = ColorPickerComponent;
//# sourceMappingURL=colorPicker.component.js.map