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
var StaticLayoutPaddingComponent = (function () {
    function StaticLayoutPaddingComponent() {
        this.unitTop = 'px';
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingLeft = 0;
        this.paddingBottom = 0;
        this.unitLeft = 'px';
        this.unitRight = 'px';
        this.unitBottom = 'px';
        this.response = new core_1.EventEmitter();
    }
    Object.defineProperty(StaticLayoutPaddingComponent.prototype, "selectedElement", {
        set: function (val) {
            this.selectedEle = val;
        },
        enumerable: true,
        configurable: true
    });
    StaticLayoutPaddingComponent.prototype.changePadding = function () {
        try {
            this.selectedEle.getElement().style.paddingTop = this.paddingTop + this.unitTop;
        }
        catch (err) { }
        try {
            this.selectedEle.getElement().style.paddingRight = this.paddingRight + this.unitRight;
        }
        catch (err) { }
        try {
            this.selectedEle.getElement().style.paddingBottom = this.paddingBottom + this.unitBottom;
        }
        catch (err) { }
        try {
            this.selectedEle.getElement().style.paddingLeft = this.paddingLeft + this.unitLeft;
        }
        catch (err) { }
    };
    StaticLayoutPaddingComponent.prototype.processResponseTop = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitTop = evt.response;
                this.selectedEle.getElement().style.paddingTop = this.paddingTop + this.unitTop;
            }
            catch (err) { }
        }
    };
    StaticLayoutPaddingComponent.prototype.processResponseRight = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitRight = evt.response;
                this.selectedEle.getElement().style.paddingRight = this.paddingRight + this.unitRight;
            }
            catch (err) { }
        }
    };
    StaticLayoutPaddingComponent.prototype.processResponseBottom = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitBottom = evt.response;
                this.selectedEle.getElement().style.paddingBottom = this.paddingBottom + this.unitBottom;
            }
            catch (err) { }
        }
    };
    StaticLayoutPaddingComponent.prototype.processResponseLeft = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitLeft = evt.response;
                this.selectedEle.getElement().style.paddingLeft = this.paddingLeft + this.unitLeft;
            }
            catch (err) { }
        }
    };
    StaticLayoutPaddingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter()
            .subscribe(function () { return _this.changed(); });
        this.changed();
    };
    StaticLayoutPaddingComponent.prototype.changed = function () {
        try {
            this.paddingTop = this.selectedEle.getElement().style.paddingTop.match(/\d/g).join("");
        }
        catch (err) {
            this.paddingTop = "";
        }
        try {
            this.paddingRight = this.selectedEle.getElement().style.paddingRight.match(/\d/g).join("");
        }
        catch (err) {
            this.paddingRight = "";
        }
        try {
            this.paddingBottom = this.selectedEle.getElement().style.paddingBottom.match(/\d/g).join("");
        }
        catch (err) {
            this.paddingBottom = "";
        }
        try {
            this.paddingLeft = this.selectedEle.getElement().style.paddingLeft.match(/\d/g).join("");
        }
        catch (err) {
            this.paddingLeft = "";
        }
    };
    StaticLayoutPaddingComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return StaticLayoutPaddingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StaticLayoutPaddingComponent.prototype, "label", void 0);
__decorate([
    core_1.Input('selectedEle'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StaticLayoutPaddingComponent.prototype, "selectedElement", null);
StaticLayoutPaddingComponent = __decorate([
    core_1.Component({
        selector: "layout-padding",
        templateUrl: "./layout/static.layoutPadding.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    })
], StaticLayoutPaddingComponent);
exports.StaticLayoutPaddingComponent = StaticLayoutPaddingComponent;
//# sourceMappingURL=static.layoutPadding.js.map