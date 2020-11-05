import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  calcular(): Promise<number> {
    return new Promise((resolv,reject) => {
      let numbers = JSON.parse(localStorage.getItem('items'));
      if(numbers != null) {
        let sumatoria = 0;
        let media = 0;
        let len = numbers.length;
        for (let num of numbers) {
          sumatoria += num
        }
        media = sumatoria/len;
        resolv(media);
      }else{
        reject("Error, no exiten datos que calcular");
      }
    });
  } 
}
