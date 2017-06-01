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
var RGB = (function () {
    function RGB() {
    }
    return RGB;
}());
exports.RGB = RGB;
var MarkerComponent = (function () {
    function MarkerComponent() {
        this.response = new core_1.EventEmitter();
        this.markerColors = [
            ['FFFF00',
                '00FF00',
                '00FFFF',
                'FF00FF',
                '0000FF',],
            ['FF0000',
                '000080',
                '008080',
                '008000',
                '800080',],
            ['800000',
                '808000',
                '808080',
                'C0C0C0',
                '000000']
        ];
    }
    MarkerComponent.prototype.sendMarker = function (color) {
        var evt = {};
        evt.statusCode = 0;
        evt.response = color;
        this.response.next(evt);
    };
    return MarkerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MarkerComponent.prototype, "response", void 0);
MarkerComponent = __decorate([
    core_1.Component({
        selector: "marker-color",
        templateUrl: "./html/marker.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    })
], MarkerComponent);
exports.MarkerComponent = MarkerComponent;
//# sourceMappingURL=marker.component.js.map