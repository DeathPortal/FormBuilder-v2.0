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
var Droppable2 = (function () {
    function Droppable2(element) {
        this.element = element;
        this.topStart = 0;
        this.leftStart = 0;
        this.md = false;
        this.response = new core_1.EventEmitter();
    }
    Droppable2.prototype.ngOnInit = function () {
    };
    Droppable2.prototype.onDragOver = function (e) {
        e.preventDefault();
        // $scope.element = angular.copy(e);
        //e.dataTransfer.setData('ele', str);
    };
    ;
    Droppable2.prototype.onDrop = function (e) {
        var evt = {};
        evt.statusCode = 0;
        evt.response = e;
        this.response.next(evt);
        // this.style.opacity = '1.0';
        // $scope.element = {};
    };
    Object.defineProperty(Droppable2.prototype, "bounds", {
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    return Droppable2;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Droppable2.prototype, "response", void 0);
__decorate([
    core_1.Input('ng2-droppable2'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Droppable2.prototype, "bounds", null);
Droppable2 = __decorate([
    core_1.Directive({
        selector: '[ng2-droppable2]',
        host: {
            '(dragover)': 'onDragOver($event)',
            '(drop)': 'onDrop($event)'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Droppable2);
exports.Droppable2 = Droppable2;
//# sourceMappingURL=droppable2.service.js.map