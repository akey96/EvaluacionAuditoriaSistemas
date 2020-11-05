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
  valid: Boolean;
  invalid: Boolean;
  count: Number;
  incorrectos: Number;

  constructor(private localSTorageServ: LocalStorageService, private mediaService: MediaService) { 
    this.form = new FormGroup({
      'minimum': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      'maximum': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      'value': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    });

  }
  
  ngOnInit() {
    this.list = this.localSTorageServ.get('items');
    this.valid = false;
    this.valid = false;
    this.count = this.list == null? 0 : this.list.length
    let incorrectos = this.localSTorageServ.get('incorrectos')
    this.incorrectos = (incorrectos == null)? 0 : incorrectos;
  }

  save() {
    const { minimum, maximum, value } = this.form.value;
    let data = this.localSTorageServ.get('items')
    let datos_incorrectos = this.localSTorageServ.get('incorrectos')
    
    if (data == null) {
      data = []
    }

    if (datos_incorrectos == null) {
      datos_incorrectos = 0
    }

    if (minimum <= value && maximum >= value) {
      data.push(value)
      this.localSTorageServ.set('items', data);
    } else {
      this.localSTorageServ.set('incorrectos', datos_incorrectos+1);
    }

    this.ngOnInit()
  }

  validateRange(e){
    const { minimum, maximum, value } = this.form.value;
    if (minimum > maximum) {
      this.valid = true
      this.invalid = false
    } else {
      this.valid = false
      this.invalid = true
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
