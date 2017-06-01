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
var Draggable = (function () {
    function Draggable(element) {
        this.element = element;
        this.topStart = 0;
        this.leftStart = 0;
        this.boundsUp = 0;
        this.boundsRight = 0;
        this.boundsDown = 0;
        this.boundsLeft = 0;
        this.md = false;
    }
    Draggable.prototype.ngOnInit = function () {
        // css changes
        this.element.nativeElement.style.position = 'absolute';
        this.element.nativeElement.className += ' cursor-draggable';
    };
    Draggable.prototype.onMouseDown = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.button === 2)
            return; // prevents right click drag, remove his if you don't want it
        this.md = true;
        this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px', '');
        this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px', '');
        if ((event.clientY - this.topStart) > this.boundsDown) {
            this.element.nativeElement.style.top = this.boundsDown + 'px';
        }
        else if ((event.clientY - this.topStart) < this.boundsUp) {
            this.element.nativeElement.style.top = this.boundsUp + 'px';
        }
        if ((event.clientX - this.leftStart) > this.boundsRight) {
            this.element.nativeElement.style.left = this.boundsRight + 'px';
        }
        else if ((event.clientX - this.leftStart) < this.boundsLeft) {
            this.element.nativeElement.style.left = this.boundsLeft + 'px';
        }
    };
    Draggable.prototype.onMouseUp = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.md = false;
    };
    Draggable.prototype.onMouseMove = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.md == true) {
            if ((event.clientY - this.topStart) > this.boundsDown) {
                this.element.nativeElement.style.top = this.boundsDown + 'px';
            }
            else if ((event.clientY - this.topStart) < this.boundsUp) {
                this.element.nativeElement.style.top = this.boundsUp + 'px';
            }
            else {
                this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
            }
            if ((event.clientX - this.leftStart) > this.boundsRight) {
                this.element.nativeElement.style.left = this.boundsRight + 'px';
            }
            else if ((event.clientX - this.leftStart) < this.boundsLeft) {
                this.element.nativeElement.style.left = this.boundsLeft + 'px';
            }
            else {
                this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
            }
        }
    };
    Draggable.prototype.onmouseleave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.md) {
            if ((event.clientY - this.topStart) > this.boundsDown) {
                this.element.nativeElement.style.top = this.boundsDown + 'px';
            }
            else if ((event.clientY - this.topStart) < this.boundsUp) {
                this.element.nativeElement.style.top = this.boundsUp + 'px';
            }
            if ((event.clientX - this.leftStart) > this.boundsRight) {
                this.element.nativeElement.style.left = this.boundsRight + 'px';
            }
            else if ((event.clientX - this.leftStart) < this.boundsLeft) {
                this.element.nativeElement.style.left = this.boundsLeft + 'px';
            }
        }
        this.md = false;
    };
    Object.defineProperty(Draggable.prototype, "bounds", {
        set: function (bounds) {
            try {
                if (bounds[1].split(',')[0] == "full") {
                    bounds[1] = this.element.nativeElement.parentNode.clientWidth + parseInt(bounds[1].split(',')[1]);
                }
            }
            catch (err) { }
            try {
                if (bounds[2].split(',')[0] == "full") {
                    bounds[2] = this.element.nativeElement.parentNode.clientHeight + parseInt(bounds[2].split(',')[1]);
                }
            }
            catch (err) { }
            this.boundsUp = bounds[0];
            this.boundsRight = bounds[1];
            this.boundsDown = bounds[2];
            this.boundsLeft = bounds[3];
        },
        enumerable: true,
        configurable: true
    });
    return Draggable;
}());
__decorate([
    core_1.HostListener('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "onMouseDown", null);
__decorate([
    core_1.HostListener('document:mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "onMouseUp", null);
__decorate([
    core_1.HostListener('document:mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "onMouseMove", null);
__decorate([
    core_1.HostListener('document:mouseleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "onmouseleave", null);
__decorate([
    core_1.Input('ng2-draggable'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], Draggable.prototype, "bounds", null);
Draggable = __decorate([
    core_1.Directive({
        selector: '[ng2-draggable]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Draggable);
exports.Draggable = Draggable;
//# sourceMappingURL=draggable.service.js.map