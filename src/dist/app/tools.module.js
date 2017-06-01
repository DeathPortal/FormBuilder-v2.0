"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var colorPicker_component_1 = require("./tools/colorPicker.component");
var colorSaturation_component_1 = require("./tools/colorSaturation.component");
var colorTool_component_1 = require("./tools/colorTool.component");
var marker_component_1 = require("./tools/marker.component");
var shared_variable_1 = require("./tools/shared/shared.variable");
var draggable_service_1 = require("./services/draggable.service");
var gradient_component_1 = require("./tools/gradient.component");
var ToolsModule = (function () {
    function ToolsModule() {
    }
    return ToolsModule;
}());
ToolsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            colorPicker_component_1.ColorPickerComponent,
            colorSaturation_component_1.ColorSaturationComponent,
            draggable_service_1.Draggable,
            colorTool_component_1.ColorToolComponent,
            marker_component_1.MarkerComponent,
            gradient_component_1.GradientComponent
        ],
        exports: [
            colorPicker_component_1.ColorPickerComponent,
            colorSaturation_component_1.ColorSaturationComponent,
            colorTool_component_1.ColorToolComponent,
            marker_component_1.MarkerComponent,
            gradient_component_1.GradientComponent
        ],
        providers: [shared_variable_1.SharedVariable]
    })
], ToolsModule);
exports.ToolsModule = ToolsModule;
//# sourceMappingURL=tools.module.js.map