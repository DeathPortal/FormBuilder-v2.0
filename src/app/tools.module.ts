import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerComponent } from './tools/colorPicker.component';
import { ColorSaturationComponent } from './tools/colorSaturation.component';
import { ColorToolComponent } from './tools/colorTool.component';
import { MarkerComponent } from './tools/marker.component'
import { SharedVariable } from './tools/shared/shared.variable'
import { Draggable} from './services/draggable.service';
import { GradientComponent } from './tools/gradient.component'

@NgModule({
     imports:      [ 
    CommonModule,
    BrowserModule,
    FormsModule
    ],
  declarations: [ 
      ColorPickerComponent,
      ColorSaturationComponent,
      Draggable,
    ColorToolComponent,
    MarkerComponent,
    GradientComponent
   ],
   exports: [
       ColorPickerComponent,
       ColorSaturationComponent,
    ColorToolComponent,
    MarkerComponent,
    GradientComponent
      ],
      providers:[SharedVariable]

})export class ToolsModule{
  
}