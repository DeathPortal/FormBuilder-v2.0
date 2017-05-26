import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StaticHorizontalAlignmentComponent } from './html/static.files/static.horizontal.alignment'
import { StaticVerticalAlignmentComponent } from './html/static.files/static.vertical.alignment'
import { StaticBorderComponent } from './html/static.files/static.border'
import { StaticBorderRadiusComponent } from './html/static.files/static.borderRadius'
import { StaticFontComponent } from './html/static.files/static.font'
import { StaticTextStyle1Component } from './html/static.files/static.textstyle1'
import { StaticTextStyle2Component } from './html/static.files/static.textstyle2'
import { StaticLayoutMarginComponent } from './html/static.files/static.layoutMargin'
import { StaticLayoutPaddingComponent } from './html/static.files/static.layoutPadding'
import { UnitsButtonComponent } from './unitsButton.component'
import { EdgesLabelComponent } from './edgesLabel.component';
import { ToolsModule } from './tools.module';
import { ComponentsComponent } from './html/static.files/components.component';
import { FormCanvasComponent } from './form.component';
import { Draggable2} from './services/draggable2.service';
import { Droppable2} from './services/droppable2.service';

@NgModule({
     imports:      [ 
    CommonModule,
    BrowserModule,
    FormsModule,
    ToolsModule
    ],
  declarations: [ 
      StaticHorizontalAlignmentComponent,
      StaticVerticalAlignmentComponent,
      StaticBorderComponent,
      StaticBorderRadiusComponent,
      StaticFontComponent,
      StaticTextStyle1Component,
      StaticTextStyle2Component,
      StaticLayoutMarginComponent,
      StaticLayoutPaddingComponent,
      UnitsButtonComponent,
      EdgesLabelComponent,
      Draggable2,
      Droppable2,
      ComponentsComponent,
      FormCanvasComponent

   ],
   exports: [StaticHorizontalAlignmentComponent,
   StaticVerticalAlignmentComponent,
      StaticBorderComponent,
      StaticBorderRadiusComponent,
      StaticFontComponent,
      StaticTextStyle1Component,
      StaticTextStyle2Component,
      StaticLayoutMarginComponent,
      StaticLayoutPaddingComponent,
      UnitsButtonComponent,
      EdgesLabelComponent,
      ComponentsComponent,
      FormCanvasComponent
      ]

})export class StaticModule{
  
}