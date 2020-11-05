import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { MediaService } from './media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mediaAritmetica';
  list: Number[] = [];
  form: FormGroup;
  value: number;

  constructor(private localSTorageServ: LocalStorageService, private mediaService: MediaService) { 
    this.form = new FormGroup({
      'minimum': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      'maximum': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      'value': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    });

  }
  
  ngOnInit() {
    this.list = this.localSTorageServ.get('items');
  }

  save() {
    const { value } = this.form.value;
    this.localSTorageServ.set('items', value);
    this.list = this.localSTorageServ.get('items')
  }

  validate(){
    const { minimum, maximum, value } = this.form.value;
    if (typeof value === 'number' || typeof minimum === 'number' || typeof maximum === 'number') {
      return false
    } else {
      return true
    }
  }

  calcular() {
    let promise = this.mediaService.calcular();
    promise.then((media) => {
      this.value = media;
    })
    .catch((err)=>{});
  } 
}
