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
var StaticBorderComponent = (function () {
    function StaticBorderComponent() {
        this.selectedBorder = "Style";
        this.unit = 'px';
        this.borders = ["dotted",
            "dashed",
            "solid",
            "double",
            "groove",
            "ridge",
            "inset",
            "outset"];
        this.response = new core_1.EventEmitter();
        this.bgcolor = '#FFF'; // change after update
        this.colorPicker = false;
        this.status = false;
    }
    Object.defineProperty(StaticBorderComponent.prototype, "selectedElement", {
        set: function (val) {
            this.selectedEle = val;
        },
        enumerable: true,
        configurable: true
    });
    StaticBorderComponent.prototype.changeBorderStyle = function (style) {
        this.selectedBorder = style;
        this.selectedEle.getElement().style.borderStyle = style;
    };
    StaticBorderComponent.prototype.changeBorderSize = function () {
        try {
            this.selectedEle.getElement().style.borderWidth = this.borderSize + this.unit;
        }
        catch (err) {
        }
    };
    StaticBorderComponent.prototype.processResponse = function (evt) {
        if (evt.statusCode == 0) {
            this.colorPicker = false;
            this.bgcolor = evt.response;
            this.selectedEle.getElement().style.borderColor = this.bgcolor;
            this.status = true;
        }
        else if (evt.statusCode == 2) {
            try {
                this.unit = evt.response;
                this.selectedEle.getElement().style.borderWidth = this.borderSize + this.unit;
            }
            catch (err) { }
        }
    };
    StaticBorderComponent.prototype.openColorPicker = function () {
        if (this.status == false) {
            this.colorPicker = true;
        }
        else {
            this.colorPicker = false;
            this.status = false;
        }
    };
    StaticBorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter()
            .subscribe(function () { return _this.changed(); });
        this.changed();
    };
    StaticBorderComponent.prototype.changed = function () {
        try {
            this.selectedBorder = this.selectedEle.getElement().style.borderStyle;
            this.borderSize = (this.selectedEle.getElement().style.borderWidth.match(/\d/g)).join("");
        }
        catch (err) {
            this.borderSize = '';
            this.selectedBorder = "";
        }
    };
    StaticBorderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return StaticBorderComponent;
}());
__decorate([
    core_1.Input('selectedEle'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], StaticBorderComponent.prototype, "selectedElement", null);
StaticBorderComponent = __decorate([
    core_1.Component({
        selector: "border-static",
        templateUrl: "./border/static.border.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    })
], StaticBorderComponent);
exports.StaticBorderComponent = StaticBorderComponent;
//# sourceMappingURL=static.border.js.map