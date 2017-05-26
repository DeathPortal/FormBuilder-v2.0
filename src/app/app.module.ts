import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MenuComponent } from './menu.component';
import { MenuBarComponent } from './menuBar.component';
import { AlignmentComponent } from './alignment.component';
import { TextStylesComponent } from './textStyles.component';
import { LayoutComponent } from './layout.component';
import { BorderComponent } from './border.component';
import { ToolComponent } from './tool.component';
import { AppComponent }  from './app.component';
import { StaticModule } from './static.module';
import { ToolsModule } from './tools.module';
import { ComponentsContainerComponent } from './conponentsContainer.components';
import { SelectedElement } from './shared/shared.service';
import { Services } from './shared/shared.services2';
import { WindowRef } from './services/window.service';
import { AutoCompleteAttr } from './tools/attr.autoComplete';
import { AutoCompleteStyle } from './tools/styles.autoComplete';
import { AttributeComponent } from './attr.component';
import { StyleComponent } from './style.component';
import { CSSProp } from './shared/css.prop';
import { ModalComponent } from './tools/modal.component';
import 'jqueryui'

@NgModule({
  imports:      [ CommonModule,
    BrowserModule,
    FormsModule,
    StaticModule,
    ToolsModule
    ],
  declarations: [ AppComponent,
    MenuBarComponent,
    MenuComponent,
    AlignmentComponent,
    TextStylesComponent,
    LayoutComponent,
    BorderComponent,
    ToolComponent,
    ComponentsContainerComponent,
    AutoCompleteAttr,
    AttributeComponent,
    AutoCompleteStyle,
    StyleComponent,
    ModalComponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [SelectedElement, Services , WindowRef, CSSProp]
})
export class AppModule {
 }
