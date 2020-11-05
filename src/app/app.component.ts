import { Component } from '@angular/core';
import { MediaService } from './media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mediaAritmetica';
  value: number;

  constructor(public mediaService: MediaService) { }

  calcular() {
    let promise = this.mediaService.calcular();
    promise.then((media) => {
      this.value = media;
    })
    .catch((err)=>{});
  } 
}
