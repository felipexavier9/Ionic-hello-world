import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bolsa',
  templateUrl: 'bolsa.page.html',
  styleUrls: ['bolsa.page.scss']
})
export class BolsaPage {
  resultado = false;
  resultadoMensagem = "";
  mensagemError = false;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formulario = this.formBuilder.group({
      symbol: [null, Validators.required]
    });
  }


  buscar(){
    if(this.formulario.value.symbol == null){
      this.mensagemError = true;
    } else {
      this.mensagemError = false;
      this.http.get('https://api.hgbrasil.com/finance/stock_price?format=json-cors&key=d1220388&symbol='+this.formulario.value.symbol)
        .subscribe((response) => {
          let symbol = this.formulario.value.symbol;
          
          var dados = response["results"];
          if(dados[Object.keys(dados)[0]]["price"] != undefined){
            this.resultadoMensagem = "Empresa: "+dados[Object.keys(dados)[0]]["company_name"]+" - Preço: $"+dados[Object.keys(dados)[0]]["price"];
          } else {
            this.resultadoMensagem = dados[Object.keys(dados)[0]]["error"];
          }
          this.resultado = true;
        });

    }
  }
}
