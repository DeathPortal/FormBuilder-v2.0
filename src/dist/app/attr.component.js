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
var AttributeComponent = (function () {
    function AttributeComponent(selectedEle) {
        this.selectedEle = selectedEle;
        this.attrs = [];
        this.response = new core_1.EventEmitter();
    }
    AttributeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.selectedEle.getSelectedEleEmitter().subscribe(function () { return _this.changed(); });
        this.changed();
    };
    AttributeComponent.prototype.changed = function () {
        this.attrs = [];
        for (var i = 0; i < this.selectedEle.setAttrs.length; i++) {
            var attr = {};
            attr.nodeName = this.selectedEle.setAttrs[i].nodeName;
            if (attr.nodeName == "class") {
                attr.nodeValue = ((this.selectedEle.setAttrs[i].nodeValue).replace(this.selectedEle.getElement().getAttribute('defClass'), '').replace("drawBorder", "")).trim();
            }
            else {
                attr.nodeValue = (this.selectedEle.setAttrs[i].nodeValue);
            }
            this.attrs.push(attr);
        }
    };
    AttributeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AttributeComponent.prototype.addAttr = function () {
        this.changed();
        var attr = {};
        attr.nodeName = "";
        attr.nodeValue = "";
        this.attrs.push(attr);
    };
    return AttributeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AttributeComponent.prototype, "response", void 0);
AttributeComponent = __decorate([
    core_1.Component({
        selector: 'attr-component',
        template: "\n    <div *ngFor='let attr of attrs' class=\"col\" style=\"width: 10%; min-width:200px; max-width: 200px; height: 50%;\">\n        <div class=\"row\">\n            <predictiveAttr-search [attr] = '[attr.nodeName,attr.nodeValue]'></predictiveAttr-search>\n        </div>\n    </div>\n    <div class=\"col\" style=\"width: 10%; min-width:200px; max-width: 200px;\">\n        <button (click)=\"addAttr()\" class=\"btn btn-default\" style=\"width:50%;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n    </div>\n    ",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SelectedElement])
], AttributeComponent);
exports.AttributeComponent = AttributeComponent;
//# sourceMappingURL=attr.component.js.map