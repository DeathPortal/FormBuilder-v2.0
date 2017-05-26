"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var static_horizontal_alignment_1 = require("./html/static.files/static.horizontal.alignment");
var static_vertical_alignment_1 = require("./html/static.files/static.vertical.alignment");
var static_border_1 = require("./html/static.files/static.border");
var static_borderRadius_1 = require("./html/static.files/static.borderRadius");
var static_font_1 = require("./html/static.files/static.font");
var static_textstyle1_1 = require("./html/static.files/static.textstyle1");
var static_textstyle2_1 = require("./html/static.files/static.textstyle2");
var static_layoutMargin_1 = require("./html/static.files/static.layoutMargin");
var static_layoutPadding_1 = require("./html/static.files/static.layoutPadding");
var unitsButton_component_1 = require("./unitsButton.component");
var edgesLabel_component_1 = require("./edgesLabel.component");
var tools_module_1 = require("./tools.module");
var components_component_1 = require("./html/static.files/components.component");
var form_component_1 = require("./form.component");
var draggable2_service_1 = require("./services/draggable2.service");
var droppable2_service_1 = require("./services/droppable2.service");
var StaticModule = (function () {
    function StaticModule() {
    }
    return StaticModule;
}());
StaticModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            tools_module_1.ToolsModule
        ],
        declarations: [
            static_horizontal_alignment_1.StaticHorizontalAlignmentComponent,
            static_vertical_alignment_1.StaticVerticalAlignmentComponent,
            static_border_1.StaticBorderComponent,
            static_borderRadius_1.StaticBorderRadiusComponent,
            static_font_1.StaticFontComponent,
            static_textstyle1_1.StaticTextStyle1Component,
            static_textstyle2_1.StaticTextStyle2Component,
            static_layoutMargin_1.StaticLayoutMarginComponent,
            static_layoutPadding_1.StaticLayoutPaddingComponent,
            unitsButton_component_1.UnitsButtonComponent,
            edgesLabel_component_1.EdgesLabelComponent,
            draggable2_service_1.Draggable2,
            droppable2_service_1.Droppable2,
            components_component_1.ComponentsComponent,
            form_component_1.FormCanvasComponent
        ],
        exports: [static_horizontal_alignment_1.StaticHorizontalAlignmentComponent,
            static_vertical_alignment_1.StaticVerticalAlignmentComponent,
            static_border_1.StaticBorderComponent,
            static_borderRadius_1.StaticBorderRadiusComponent,
            static_font_1.StaticFontComponent,
            static_textstyle1_1.StaticTextStyle1Component,
            static_textstyle2_1.StaticTextStyle2Component,
            static_layoutMargin_1.StaticLayoutMarginComponent,
            static_layoutPadding_1.StaticLayoutPaddingComponent,
            unitsButton_component_1.UnitsButtonComponent,
            edgesLabel_component_1.EdgesLabelComponent,
            components_component_1.ComponentsComponent,
            form_component_1.FormCanvasComponent
        ]
    })
], StaticModule);
exports.StaticModule = StaticModule;
//# sourceMappingURL=static.module.js.map