"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var static_horizontal_alignment_1 = require("./static.files/static.horizontal.alignment");
var static_vertical_alignment_1 = require("./static.files/static.vertical.alignment");
var static_border_1 = require("./static.files/static.border");
var static_borderRadius_1 = require("./static.files/static.borderRadius");
var static_font_1 = require("./static.files/static.font");
var static_textstyle_1 = require("./static.files/static.textstyle");
var static_layoutMargin_1 = require("./static.files/static.layoutMargin");
var static_layoutPadding_1 = require("./static.files/static.layoutPadding");
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
            static_borderRadius_1.StaticBorderRadiusComponent,
            static_font_1.StaticFontComponent,
            static_textstyle_1.StaticTextStyleComponent,
            static_layoutMargin_1.StaticLayoutMarginComponent,
            static_layoutPadding_1.StaticLayoutPaddingComponent
        ],
        exports: [static_horizontal_alignment_1.StaticHorizontalAlignmentComponent,
            static_vertical_alignment_1.StaticVerticalAlignmentComponent,
            static_border_1.StaticBorderComponent,
            static_borderRadius_1.StaticBorderRadiusComponent,
            static_font_1.StaticFontComponent,
            static_textstyle_1.StaticTextStyleComponent,
            static_layoutMargin_1.StaticLayoutMarginComponent,
            static_layoutPadding_1.StaticLayoutPaddingComponent]
    })
], StaticModule);
exports.StaticModule = StaticModule;
//# sourceMappingURL=static.module.js.map