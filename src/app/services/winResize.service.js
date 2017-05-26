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
function _window() {
    // return the global native browser window object
    return window;
}
var Window = (function () {
    function Window() {
    }
    Object.defineProperty(Window.prototype, "getWindowSize", {
        get: function () {
            if (typeof this.windowSize == 'undefined') {
                this.windowSize = this.nativeWindow.innerWidth;
                console.log(this.windowSize);
            }
            return this.windowSize;
        },
        enumerable: true,
        configurable: true
    });
    Window.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
    };
    Object.defineProperty(Window.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return Window;
}());
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Window.prototype, "onResize", null);
Window = __decorate([
    core_1.Injectable()
], Window);
exports.Window = Window;
//# sourceMappingURL=winResize.service.js.map