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
var StaticBorderRadiusComponent = (function () {
    function StaticBorderRadiusComponent() {
        this.unitTopLeft = 'px';
        this.borderTopLeftRadius = 0;
        this.borderTopRightRadius = 0;
        this.borderBottomLeftRadius = 0;
        this.borderBottomRightRadius = 0;
        this.unitBottomLeft = 'px';
        this.unitTopRight = 'px';
        this.unitBottomRight = 'px';
    }
    Object.defineProperty(StaticBorderRadiusComponent.prototype, "selectedElement", {
        set: function (val) {
            this.selectedEle = val;
        },
        enumerable: true,
        configurable: true
    });
    StaticBorderRadiusComponent.prototype.changeBorderRadius = function () {
        try {
            this.selectedEle.getElement().style.borderTopLeftRadius = this.borderTopLeftRadius + this.unitTopLeft;
        }
        catch (err) { }
        try {
            this.selectedEle.getElement().style.borderTopRightRadius = this.borderTopRightRadius + this.unitTopRight;
        }
        catch (err) { }
        try {
            this.selectedEle.getElement().style.borderBottomLeftRadius = this.borderBottomLeftRadius + this.unitBottomLeft;
        }
        catch (err) { }
        try {
            this.selectedEle.getElement().style.borderBottomRightRadius = this.borderBottomRightRadius + this.unitBottomRight;
        }
        catch (err) { }
    };
    StaticBorderRadiusComponent.prototype.processResponseTopLeft = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitTopLeft = evt.response;
                this.selectedEle.getElement().style.borderTopLeftRadius = this.borderTopLeftRadius + this.unitTopLeft;
            }
            catch (err) { }
        }
    };
    StaticBorderRadiusComponent.prototype.processResponseTopRight = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitTopRight = evt.response;
                this.selectedEle.getElement().style.borderTopRightRadius = this.borderTopRightRadius + this.unitTopRight;
            }
            catch (err) { }
        }
    };
    StaticBorderRadiusComponent.prototype.processResponseBottomLeft = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitBottomLeft = evt.response;
                this.selectedEle.getElement().style.borderBottomLeftRadius = this.borderBottomLeftRadius + this.unitBottomLeft;
            }
            catch (err) { }
        }
    };
    StaticBorderRadiusComponent.prototype.processResponseBottomRight = function (evt) {
        if (evt.statusCode == 2) {
            try {
                this.unitBottomRight = evt.response;
                this.selectedEle.getElement().style.borderBottomRightRadius = this.borderBottomRightRadius + this.unitBottomRight;
            }
            catch (err) { }
        }
    };
    StaticBorderRadiusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter()
            .subscribe(function () { return _this.changed(); });
        this.changed();
    };
    StaticBorderRadiusComponent.prototype.changed = function () {
        try {
            this.borderTopLeftRadius = this.selectedEle.getElement().style.borderTopLeftRadius.match(/\d/g).join("");
        }
        catch (err) {
            this.borderTopLeftRadius = "";
        }
        try {
            this.borderTopRightRadius = this.selectedEle.getElement().style.borderTopRightRadius.match(/\d/g).join("");
        }
        catch (err) {
            this.borderTopRightRadius = "";
        }
        try {
            this.borderBottomLeftRadius = this.selectedEle.getElement().style.borderBottomLeftRadius.match(/\d/g).join("");
        }
        catch (err) {
            this.borderBottomLeftRadius = "";
        }
        try {
            this.borderBottomRightRadius = this.selectedEle.getElement().style.borderBottomRightRadius.match(/\d/g).join("");
        }
        catch (err) {
            this.borderBottomRightRadius = "";
        }
    };
    StaticBorderRadiusComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return StaticBorderRadiusComponent;
}());
__decorate([
    core_1.Input('selectedEle'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StaticBorderRadiusComponent.prototype, "selectedElement", null);
StaticBorderRadiusComponent = __decorate([
    core_1.Component({
        selector: "border-radius-static",
        templateUrl: "./border/static.borderRadius.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    })
], StaticBorderRadiusComponent);
exports.StaticBorderRadiusComponent = StaticBorderRadiusComponent;
//# sourceMappingURL=static.borderRadius.js.map