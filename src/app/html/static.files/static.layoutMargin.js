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
var StaticLayoutMarginComponent = (function () {
    function StaticLayoutMarginComponent() {
        this.unitTop = 'px';
        this.marginTop = 0;
        this.marginRight = 0;
        this.marginLeft = 0;
        this.marginBottom = 0;
        this.unitLeft = 'px';
        this.unitRight = 'px';
        this.unitBottom = 'px';
        this.response = new core_1.EventEmitter();
    }
    Object.defineProperty(StaticLayoutMarginComponent.prototype, "selectedElement", {
        set: function (val) {
            this.selectedEle = val;
        },
        enumerable: true,
        configurable: true
    });
    StaticLayoutMarginComponent.prototype.changeMargin = function () {
        try {
            if (isNaN(this.marginTop)) {
                this.selectedEle.getElement().style.marginTop = this.marginTop;
            }
            else {
                this.selectedEle.getElement().style.marginTop = this.marginTop + this.unitTop;
            }
        }
        catch (err) { }
        try {
            if (isNaN(this.marginRight)) {
                this.selectedEle.getElement().style.marginRight = this.marginRight;
            }
            else {
                this.selectedEle.getElement().style.marginRight = this.marginRight + this.unitRight;
            }
        }
        catch (err) { }
        try {
            if (isNaN(this.marginBottom)) {
                this.selectedEle.getElement().style.marginBottom = this.marginBottom;
            }
            else {
                this.selectedEle.getElement().style.marginBottom = this.marginBottom + this.unitBottom;
            }
        }
        catch (err) { }
        try {
            if (isNaN(this.marginLeft)) {
                this.selectedEle.getElement().style.marginLeft = this.marginLeft;
            }
            else {
                this.selectedEle.getElement().style.marginLeft = this.marginLeft + this.unitLeft;
            }
        }
        catch (err) { }
    };
    StaticLayoutMarginComponent.prototype.processResponseTop = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitTop = evt.response;
                this.selectedEle.getElement().style.marginTop = this.marginTop + this.unitTop;
            }
            catch (err) { }
        }
    };
    StaticLayoutMarginComponent.prototype.processResponseRight = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitRight = evt.response;
                this.selectedEle.getElement().style.marginRight = this.marginRight + this.unitRight;
            }
            catch (err) { }
        }
    };
    StaticLayoutMarginComponent.prototype.processResponseBottom = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitBottom = evt.response;
                this.selectedEle.getElement().style.marginBottom = this.marginBottom + this.unitBottom;
            }
            catch (err) { }
        }
    };
    StaticLayoutMarginComponent.prototype.processResponseLeft = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitLeft = evt.response;
                this.selectedEle.getElement().style.marginLeft = this.marginLeft + this.unitLeft;
            }
            catch (err) { }
        }
    };
    StaticLayoutMarginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter()
            .subscribe(function () { return _this.changed(); });
        this.changed();
    };
    StaticLayoutMarginComponent.prototype.changed = function () {
        try {
            this.marginTop = this.selectedEle.getElement().style.marginTop.match(/\d/g).join("");
        }
        catch (err) {
            this.marginTop = "";
        }
        try {
            this.marginRight = this.selectedEle.getElement().style.marginRight.match(/\d/g).join("");
        }
        catch (err) {
            this.marginRight = "";
        }
        try {
            this.marginBottom = this.selectedEle.getElement().style.marginBottom.match(/\d/g).join("");
        }
        catch (err) {
            this.marginBottom = "";
        }
        try {
            this.marginLeft = this.selectedEle.getElement().style.marginLeft.match(/\d/g).join("");
        }
        catch (err) {
            this.marginLeft = "";
        }
    };
    StaticLayoutMarginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return StaticLayoutMarginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StaticLayoutMarginComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('selectedEle'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StaticLayoutMarginComponent.prototype, "selectedElement", null);
StaticLayoutMarginComponent = __decorate([
    core_1.Component({
        selector: "layout-margin",
        templateUrl: "./layout/static.layoutMargin.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    })
], StaticLayoutMarginComponent);
exports.StaticLayoutMarginComponent = StaticLayoutMarginComponent;
//# sourceMappingURL=static.layoutMargin.js.map