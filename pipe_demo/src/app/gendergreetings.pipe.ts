import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gendergreetings'
})
export class GendergreetingsPipe implements PipeTransform {

 transform(value: string,gender:string) {
   if (gender == 'Male')
   {
      return 'Mr.' + value;  
   }
   else
   {
     return 'Miss' + value;
   }
 }

}
