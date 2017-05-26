"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var static_horizontal_alignment_1 = require("./static.horizontal.alignment");
var static_vertical_alignment_1 = require("./static.vertical.alignment");
var static_border_1 = require("./static.border");
var static_borderRadius_1 = require("./static.borderRadius");
var StaticModule = (function () {
    function StaticModule() {
    }
    return StaticModule;
}());
StaticModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
        ],
        declarations: [
            static_horizontal_alignment_1.StaticHorizontalAlignmentComponent,
            static_vertical_alignment_1.StaticVerticalAlignmentComponent,
            static_border_1.StaticBorderComponent,
            static_borderRadius_1.StaticBorderRadiusComponent
        ],
        exports: [static_horizontal_alignment_1.StaticHorizontalAlignmentComponent,
            static_vertical_alignment_1.StaticVerticalAlignmentComponent,
            static_border_1.StaticBorderComponent,
            static_borderRadius_1.StaticBorderRadiusComponent],
    })
], StaticModule);
exports.StaticModule = StaticModule;
//# sourceMappingURL=static.module.js.map