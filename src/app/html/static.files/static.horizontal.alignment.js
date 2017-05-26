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
var StaticHorizontalAlignmentComponent = (function () {
    function StaticHorizontalAlignmentComponent() {
    }
    Object.defineProperty(StaticHorizontalAlignmentComponent.prototype, "selectedElement", {
        set: function (val) {
            this.selectedEle = val;
        },
        enumerable: true,
        configurable: true
    });
    StaticHorizontalAlignmentComponent.prototype.onResize = function (event) {
        this.windowSize = event.target.innerWidth;
    };
    StaticHorizontalAlignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter()
            .subscribe(function () { return _this.changed(); });
        this.changed();
        this.windowSize = window.innerWidth;
    };
    StaticHorizontalAlignmentComponent.prototype.changed = function () {
        try {
            this.align = this.selectedEle.getElement().style.textAlign;
        }
        catch (err) { }
    };
    StaticHorizontalAlignmentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StaticHorizontalAlignmentComponent.prototype.textAlign = function (align) {
        if (this.align == align) {
            this.selectedEle.getElement().style.textAlign = "";
            this.align = "";
        }
        else {
            this.selectedEle.getElement().style.textAlign = align;
            this.align = align;
        }
    };
    return StaticHorizontalAlignmentComponent;
}());
__decorate([
    core_1.Input('selectedEle'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StaticHorizontalAlignmentComponent.prototype, "selectedElement", null);
StaticHorizontalAlignmentComponent = __decorate([
    core_1.Component({
        selector: "horizontal-alignment",
        templateUrl: "./alignment/static.horizontal.alignment.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css'],
        host: {
            '(window:resize)': 'onResize($event)'
        },
    })
], StaticHorizontalAlignmentComponent);
exports.StaticHorizontalAlignmentComponent = StaticHorizontalAlignmentComponent;
//# sourceMappingURL=static.horizontal.alignment.js.map