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
var StyleComponent = (function () {
    function StyleComponent(selectedEle) {
        this.selectedEle = selectedEle;
        this.styles = [];
        this.response = new core_1.EventEmitter();
    }
    StyleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter().subscribe(function () { return _this.changed(); });
        this.changed();
    };
    StyleComponent.prototype.changed = function () {
        this.styles = [];
        for (var i = 0; i < this.selectedEle.setStyles.length; i++) {
            var style = {};
            style.name = this.selectedEle.setStyles[i].name;
            style.value = this.selectedEle.setStyles[i].value;
            this.styles.push(style);
        }
    };
    StyleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StyleComponent.prototype.addStyle = function () {
        this.changed();
        var style = {};
        style.nodeName = "";
        style.nodeValue = "";
        this.styles.push(style);
    };
    return StyleComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StyleComponent.prototype, "response", void 0);
StyleComponent = __decorate([
    core_1.Component({
        selector: 'style-component',
        template: "\n    <div *ngFor='let style of styles' class=\"col\" style=\"width: 10%; min-width:200px; max-width: 200px; height: 50%;\">\n        <div class=\"row\">\n            <predictiveStyle-search [styles] = '[style.name,style.value]'></predictiveStyle-search>\n        </div>\n    </div>\n    <div class=\"col\" style=\"width: 10%; min-width:200px; max-width: 200px;\">\n        <button (click)=\"addStyle()\" class=\"btn btn-default\" style=\"width:50%;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n    </div>\n    ",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SelectedElement])
], StyleComponent);
exports.StyleComponent = StyleComponent;
//# sourceMappingURL=style.component.js.map