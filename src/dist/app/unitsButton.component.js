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
var shared_service_1 = require("./shared/shared.service");
var UnitsButtonComponent = (function () {
    function UnitsButtonComponent(selectedElement) {
        this.selectedElement = selectedElement;
        this.selectedUnit = 'px';
        this.response = new core_1.EventEmitter();
        this.units = ["px",
            "%",
            "em",
            "ex",
            "cm",
            "mm",
            "in",
            "pt",
            "pc",
            "ch",
            "rem",
            "vw",
            "vh",
            "vmin",
            "vmax"];
    }
    Object.defineProperty(UnitsButtonComponent.prototype, "Value", {
        set: function (val) {
            this.ref = val;
        },
        enumerable: true,
        configurable: true
    });
    UnitsButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedElement.getSelectedEleEmitter().subscribe(function () { return _this.changed(); });
    };
    UnitsButtonComponent.prototype.changed = function () {
        try {
            var path = this.selectedElement.getElement();
            for (var i = 0; i < this.ref.length; i++) {
                path = path[this.ref[i]];
            }
            this.selectedUnit = path.replace(/[0-9]/g, '');
        }
        catch (err) {
            this.selectedUnit = 'px';
        }
        if (this.selectedUnit == '' || this.selectedUnit == undefined) {
            this.selectedUnit = 'px';
        }
    };
    UnitsButtonComponent.prototype.onchange = function (unit) {
        this.selectedUnit = unit;
        var evt = {};
        evt.statusCode = 2;
        evt.response = unit;
        this.response.next(evt);
    };
    return UnitsButtonComponent;
}());
__decorate([
    core_1.Input('refPath'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], UnitsButtonComponent.prototype, "Value", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UnitsButtonComponent.prototype, "response", void 0);
UnitsButtonComponent = __decorate([
    core_1.Component({
        selector: "units-menu",
        templateUrl: "./html/unitsButton.component.html",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SelectedElement])
], UnitsButtonComponent);
exports.UnitsButtonComponent = UnitsButtonComponent;
//# sourceMappingURL=unitsButton.component.js.map