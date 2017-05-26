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
var Draggable2 = (function () {
    function Draggable2(element, selectedEle) {
        this.element = element;
        this.selectedEle = selectedEle;
        this.topStart = 0;
        this.leftStart = 0;
        this.md = false;
    }
    Draggable2.prototype.ngOnInit = function () {
        this.element.nativeElement.setAttribute('draggable', 'true');
    };
    Draggable2.prototype.onDragStart = function (e) {
        e.srcElement.style.opacity = '0.4';
        e.dataTransfer.setData("srcElement", e.srcElement.getAttribute('id'));
        // $scope.element = angular.copy(e);
        //e.dataTransfer.setData('ele', str);
    };
    ;
    Draggable2.prototype.onDragEnd = function (e) {
        e.preventDefault();
        e.srcElement.style.opacity = '1';
        // this.style.opacity = '1.0';
        // $scope.element = {};
    };
    Draggable2.prototype.addtoSelected = function (event) {
        event.preventDefault();
        var evt = {};
        evt.statusCode = 0;
        evt.response = event.srcElement;
        this.selectedEle.touchEvent(evt);
    };
    Object.defineProperty(Draggable2.prototype, "bounds", {
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    return Draggable2;
}());
__decorate([
    core_1.Input('ng2-draggable2'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Draggable2.prototype, "bounds", null);
Draggable2 = __decorate([
    core_1.Directive({
        selector: '[ng2-draggable2]',
        host: {
            '(dragstart)': 'onDragStart($event)',
            '(dragend)': 'onDragEnd($event)',
            '(touchstart)': 'addtoSelected($event)'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, shared_service_1.SelectedElement])
], Draggable2);
exports.Draggable2 = Draggable2;
//# sourceMappingURL=draggable2.service.js.map