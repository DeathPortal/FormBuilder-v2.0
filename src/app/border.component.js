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
var window_service_1 = require("./services/window.service");
var shared_service_1 = require("./shared/shared.service");
var BorderComponent = (function () {
    function BorderComponent(winRef, selectedEle) {
        this.winRef = winRef;
        this.selectedEle = selectedEle;
        this.showBorder = false;
        this.showBorderRadius = false;
        this.windowSize = winRef.nativeWindow.innerWidth;
    }
    BorderComponent.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
    };
    return BorderComponent;
}());
BorderComponent = __decorate([
    core_1.Component({
        selector: "border-menu",
        templateUrl: "./html/border.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [window_service_1.WindowRef, shared_service_1.SelectedElement])
], BorderComponent);
exports.BorderComponent = BorderComponent;
//# sourceMappingURL=border.component.js.map