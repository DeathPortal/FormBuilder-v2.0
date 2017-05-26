"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var menu_component_1 = require("./menu.component");
var menuBar_component_1 = require("./menuBar.component");
var alignment_component_1 = require("./alignment.component");
var textStyles_component_1 = require("./textStyles.component");
var layout_component_1 = require("./layout.component");
var border_component_1 = require("./border.component");
var tool_component_1 = require("./tool.component");
var app_component_1 = require("./app.component");
var static_module_1 = require("./static.module");
var tools_module_1 = require("./tools.module");
var conponentsContainer_components_1 = require("./conponentsContainer.components");
var shared_service_1 = require("./shared/shared.service");
var shared_services2_1 = require("./shared/shared.services2");
var window_service_1 = require("./services/window.service");
var attr_autoComplete_1 = require("./tools/attr.autoComplete");
var styles_autoComplete_1 = require("./tools/styles.autoComplete");
var attr_component_1 = require("./attr.component");
var style_component_1 = require("./style.component");
var css_prop_1 = require("./shared/css.prop");
var modal_component_1 = require("./tools/modal.component");
require("jqueryui");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            static_module_1.StaticModule,
            tools_module_1.ToolsModule
        ],
        declarations: [app_component_1.AppComponent,
            menuBar_component_1.MenuBarComponent,
            menu_component_1.MenuComponent,
            alignment_component_1.AlignmentComponent,
            textStyles_component_1.TextStylesComponent,
            layout_component_1.LayoutComponent,
            border_component_1.BorderComponent,
            tool_component_1.ToolComponent,
            conponentsContainer_components_1.ComponentsContainerComponent,
            attr_autoComplete_1.AutoCompleteAttr,
            attr_component_1.AttributeComponent,
            styles_autoComplete_1.AutoCompleteStyle,
            style_component_1.StyleComponent,
            modal_component_1.ModalComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [shared_service_1.SelectedElement, shared_services2_1.Services, window_service_1.WindowRef, css_prop_1.CSSProp]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map