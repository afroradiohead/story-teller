import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { DxDataGridModule, DxPopupModule, DxSelectBoxModule, DxTextBoxModule, DxButtonModule,
  DxSwitchModule, DxPivotGridModule
} from "devextreme-angular";
import { HttpClientModule } from '@angular/common/http';
import { PapaParseModule } from 'ngx-papaparse';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    DxDataGridModule, 
    DxPopupModule,
    DxSelectBoxModule,
    DxTextBoxModule, 
    DxButtonModule,
    HttpClientModule, 
    PapaParseModule, 
    DxSwitchModule,
    DxPivotGridModule,
    RouterModule.forRoot([])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }