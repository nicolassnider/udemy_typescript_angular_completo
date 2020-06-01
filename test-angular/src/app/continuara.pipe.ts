import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(valor: string): string {
    if (valor.toString().length > 5) {
      valor = valor.substr(0, 5)
      valor = valor + " truncado";
    }
    return valor
  }

}
