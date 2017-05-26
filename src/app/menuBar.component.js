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
var MenuBarComponent = (function () {
    function MenuBarComponent(winRef, selectedEle) {
        this.winRef = winRef;
        this.selectedEle = selectedEle;
        this.menu = "Alignment";
        this.showFontFamily = false;
        this.menuType = 'menu';
        this.windowSize = winRef.nativeWindow.innerWidth;
    }
    MenuBarComponent.prototype.processResponse = function (event) {
    };
    MenuBarComponent.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
    };
    MenuBarComponent.prototype.changeMenu = function (type) {
        this.menuType = type;
    };
    MenuBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter().subscribe(function () { return _this.changed(); });
    };
    MenuBarComponent.prototype.changed = function () {
        try {
            var acols = this.selectedEle.getElement().attributes.length;
            this.attrcols = acols / 2 + acols % 2 + 2;
        }
        catch (err) {
            this.attrcols = 2;
        }
        try {
            var scols = (this.selectedEle.getElement().getAttribute('style')).split(';').length;
            this.stylecols = scols / 2 + scols % 2 + 2;
        }
        catch (err) {
            this.stylecols = 2;
        }
    };
    MenuBarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return MenuBarComponent;
}());
MenuBarComponent = __decorate([
    core_1.Component({
        selector: "top-menu",
        templateUrl: "./html/menuBar.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        },
        providers: [window_service_1.WindowRef]
    }),
    __metadata("design:paramtypes", [window_service_1.WindowRef, shared_service_1.SelectedElement])
], MenuBarComponent);
exports.MenuBarComponent = MenuBarComponent;
//# sourceMappingURL=menuBar.component.js.map