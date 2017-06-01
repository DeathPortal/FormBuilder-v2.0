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
var shared_variable_1 = require("./shared/shared.variable");
var ColorToolComponent = (function () {
    function ColorToolComponent(shared) {
        this.shared = shared;
        this.event = new core_1.EventEmitter();
        this.colorPicker = false;
        this.status = false;
        this.response = new core_1.EventEmitter();
    }
    ColorToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shared.getSelectedEleEmitter()
            .subscribe(function (item) { return _this.changed(item); });
    };
    ColorToolComponent.prototype.changed = function (item) {
        var color = item;
        try {
            for (var i = 0; i < this.ref.length; i++) {
                color = color[this.ref[i]];
            }
            this.bgcolor = color;
        }
        catch (err) {
        }
    };
    ColorToolComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Object.defineProperty(ColorToolComponent.prototype, "Color", {
        set: function (val) {
            this.ref = val;
        },
        enumerable: true,
        configurable: true
    });
    ColorToolComponent.prototype.processResponse = function (evt) {
        if (evt.statusCode == 0) {
            this.colorPicker = false;
            this.bgcolor = evt.response;
            this.status = true;
        }
        else {
            this.colorPicker = false;
            this.status = true;
        }
        this.response.next(evt);
    };
    ColorToolComponent.prototype.openColorPicker = function () {
        if (this.status == false) {
            this.colorPicker = true;
        }
        else {
            this.colorPicker = false;
            this.status = false;
        }
    };
    return ColorToolComponent;
}());
__decorate([
    core_1.Input('defaultColor'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ColorToolComponent.prototype, "Color", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ColorToolComponent.prototype, "response", void 0);
ColorToolComponent = __decorate([
    core_1.Component({
        selector: "color-tool",
        templateUrl: "./html/colorTool.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    }),
    __metadata("design:paramtypes", [shared_variable_1.SharedVariable])
], ColorToolComponent);
exports.ColorToolComponent = ColorToolComponent;
//# sourceMappingURL=colorTool.component.js.map