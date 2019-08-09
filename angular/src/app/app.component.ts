import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import * as _  from "lodash";
import * as $ from 'jquery';
import { DxPopupComponent, DxSelectBoxComponent, DxDataGridComponent } from 'devextreme-angular';
import Speech from "speak-tts";


const transactionsFeed = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsGba8XS8kyMsGypKaKZ9YqFm3TJJT_UDQGlv1n6PoIAikIDsnJSvTyTqfNbP-YuDFZk5sYVp9GDUo/pub?gid=0&single=true&output=tsv";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild("grid", {static: false}) grid: DxDataGridComponent;
  


  constructor(
    private http: HttpClient, 
    private papa: Papa, 
    private route: ActivatedRoute,
  ){}

  json = [];

  loading = false;

  async onClick_playButton(){
    const speech = new Speech();
    try {
      this.loading = true;
      const response = await this.http.get("https://script.googleusercontent.com/macros/echo?user_content_key=M9Z7xUDa9ol9tkB5FS5BXlOoANXym5bNoqDrnGIzxARsA51_gTBJqsCyXB9AVdNa_Y-PquiNi1azYt_9iOoOrzMWylRsX1SSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPyySyFA2D7Wx5QGOfgphKKqvjtxwmYlKROwb74w5qURcla3lhynye5-wiAoC_aJF-nUQB89xM0YTx23RkhIoXxz8RZk66tUeA&lib=MebMyHykNr_5Ot9OVNzvuE-QS4Zb9zntk").toPromise()
      speech.cancel();
      speech.init({
        voice: "Google UK English Female",
        rate: 1
      }).then((data) => {
          // The "data" object contains the list of available voices and the voice synthesis params
          speech.speak({
            text: response['text'],
        }).then(() => {
            console.log("Success !")
        }).catch(e => {
            console.error("An error occurred :", e)
        })
      }).catch(e => {
          console.error("An error occured while initializing : ", e)
      })
    } finally {
      this.loading = false;
    }

  }
  

  text = "";

  startTime = null;

  timeElapsed () {
      return _.last(this.json).ms
  }

  private async getData(): Promise<any[]>{
    return new Promise<any[]>(resolve => {
      this.papa.parse(transactionsFeed,{
        download: true,
        delimiter : '	',
        header: true,
        complete: (result) => {
          resolve(result.data);
        }
      });
    })
  }
}

