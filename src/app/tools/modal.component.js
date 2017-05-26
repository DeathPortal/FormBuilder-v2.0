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
var shared_service_1 = require("../shared/shared.service");
var ModalComponent = (function () {
    function ModalComponent(service) {
        this.service = service;
        this.modal = false;
        this.header = "Header";
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.service.modal.subscribe(function (item) { return _this.setModalBody(item); });
    };
    ModalComponent.prototype.setModalBody = function (item) {
        this.modal = true;
        this.modalBody.nativeElement.appendChild(item.dom);
        this.header = item.header;
        this.statusCode = item.statusCode;
        this.okfunction = item.okfunction;
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ModalComponent.prototype.returnForm = function () {
        var evt = {};
        this.modal = false;
        evt.statusCode = this.statusCode;
        evt.dom = this.modalBody.nativeElement.firstChild;
        this.okfunction();
        this.modalBody.nativeElement.innerHTML = "";
    };
    ModalComponent.prototype.cancelForm = function () {
        var evt = {};
        evt.statusCode = "cancel";
        evt.dom = this.modalBody;
    };
    return ModalComponent;
}());
__decorate([
    core_1.ViewChild('modalBody'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalBody", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: "modal-component",
        template: "\n        <div [hidden]=\"!modal\" style=\"position: fixed; z-index:999; top:0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); display: flex; align-items: center;\">\n            <div style=\"margin: 0 auto; min-width: 250px; \">\n            <div style=\"width: 100%; text-align: center;box-shadow: rgb(255, 255, 255) 0px 1px 0px 0px inset; background: linear-gradient(rgb(249, 249, 249) 5%, rgb(233, 233, 233) 100%) rgb(249, 249, 249); border-radius: 6px 6px 0px 0px; border: 1px solid rgb(220, 220, 220); cursor: pointer; color: rgb(102, 102, 102); font-family: Arial; font-size: 15px; font-weight: bold; padding: 6px 24px; text-decoration: none; text-shadow: rgb(255, 255, 255) 0px 1px 0px;\"><h4>{{header}}</h4></div>\n            <div #modalBody style=\"width: 100%; background: #FFF; padding: 6px 24px; border:1px solid white;\"></div>\n            <div style=\"width:100%; box-shadow: rgb(242, 250, 220) 0px 0px 14px -3px inset; background: linear-gradient(rgb(219, 230, 196) 5%, rgb(155, 168, 146) 100%) rgb(219, 230, 196); border-radius: 0px 0px 6px 6px; border: 1px solid rgb(178, 184, 173); cursor: pointer; color: rgb(117, 125, 111); font-family: Arial; font-size: 15px; font-weight: bold; padding: 6px 24px; text-decoration: none; text-shadow: rgb(206, 217, 191) 0px 1px 0px;\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <button class=\"btn btn-success\" (click)=\"returnForm()\" style=\"float:right;\">Ok</button>\n                    </div>\n                    <div class=\"col-4\">\n                        <button class=\"btn btn-danger\" (click)=\"cancelForm()\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>\n        ",
        styleUrls: ['./css/lib/bootstrap.css', './css/styles.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SelectedElement])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map