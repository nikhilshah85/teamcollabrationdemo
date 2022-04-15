import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: any, buyprice:number, currentprice:number) 
  {
    if(buyprice > currentprice)
    {
      return 'Loss';
    }
    else if(buyprice == currentprice)
    {
      return 'Equal';
    }
    else if(buyprice < currentprice)
    {
      return 'Profit';
    }
    else{
      return '';
    }


  }

}
