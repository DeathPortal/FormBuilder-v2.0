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
var EdgesLabelComponent = (function () {
    function EdgesLabelComponent(winRef) {
        this.winRef = winRef;
        // getting the native window obj
        this.windowSize = winRef.nativeWindow.innerWidth;
    }
    EdgesLabelComponent.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
        if (this.windowSize > 1500) {
            this.displayLabel = this.label[0];
        }
        else if (this.windowSize < 1500 && this.windowSize > 1400) {
            this.displayLabel = this.label[1];
        }
        else {
            this.displayLabel = this.label[2];
        }
    };
    EdgesLabelComponent.prototype.ngOnInit = function () {
        if (this.windowSize > 1500) {
            this.displayLabel = this.label[0];
        }
        else if (this.windowSize < 1500 && this.windowSize > 1400) {
            this.displayLabel = this.label[1];
        }
        else {
            this.displayLabel = this.label[2];
        }
    };
    return EdgesLabelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], EdgesLabelComponent.prototype, "label", void 0);
EdgesLabelComponent = __decorate([
    core_1.Component({
        selector: "edge-label",
        templateUrl: "./html/edgesLabel.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [window_service_1.WindowRef])
], EdgesLabelComponent);
exports.EdgesLabelComponent = EdgesLabelComponent;
//# sourceMappingURL=edgesLabel.component.js.map