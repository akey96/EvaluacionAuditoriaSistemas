import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

import {resetValueMedia, resetValueIncorrect} from './helpers/helpers';

import { LocalStorageService } from './local-storage.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Los campos de rangos de valores se crean con valores vacios', () => {
    const elementHTML: HTMLElement = fixture.nativeElement;
    const minimoElement = elementHTML.querySelector('#idMinimo');
    const maximoElement = elementHTML.querySelector('#idMaximo');
    expect(minimoElement.innerHTML).toEqual('');
    expect(maximoElement.innerHTML).toEqual('');
  });

  it('Los valores de rango de valor minimo tiene que ser menor al campo mayor', () => {
    const elementHTML: HTMLElement = fixture.nativeElement;
    
    let inputMin = fixture.debugElement.query(By.css('#idMinimo')).nativeElement;
    let inputMax = fixture.debugElement.query(By.css('#idMaximo')).nativeElement;

    let inputAgregar = fixture.debugElement.query(By.css('#idNumber')).nativeElement;    
    let buttonAgregar = fixture.debugElement.query(By.css('#idButtomAgregar')).nativeElement;
    
    let countCorrectos:number = parseInt(component.count.toString()) 

    inputMin.value = 45;
    inputMax.value = 75;
    
    inputAgregar.value = 65

    inputMin.dispatchEvent(new Event('input'));
    inputMax.dispatchEvent(new Event('input'));
    inputAgregar.dispatchEvent(new Event('input'));
    buttonAgregar.dispatchEvent(new Event('click'));

    expect(parseInt(inputMin.value)).toEqual(45)
    expect(parseInt(inputMax.value)).toEqual(75)
    expect(parseInt(inputAgregar.value)).toEqual(65)
    expect(component.count).toEqual(countCorrectos + 1)

  });

 
  it('Los valores fuera del rango de valores no deben deben ser contados como datos incorrectos', async () =>  {
    const elementHTML: HTMLElement = fixture.nativeElement;
    
    let inputMin = fixture.debugElement.query(By.css('#idMinimo')).nativeElement;
    let inputMax = fixture.debugElement.query(By.css('#idMaximo')).nativeElement;

    let inputAgregar = fixture.debugElement.query(By.css('#idNumber')).nativeElement;    
    let buttonAgregar = fixture.debugElement.query(By.css('#idButtomAgregar')).nativeElement;
    
    let countIncorrectos: number = parseInt(component.incorrectos.toString()) 
    resetValueIncorrect()
    let textE = fixture.debugElement.query(By.css('#idDatosIncorrectos')).nativeElement;

    inputMin.value = 45;
    inputMax.value = 75;
    
    inputAgregar.value = 955

    inputMin.dispatchEvent(new Event('input'));
    inputMax.dispatchEvent(new Event('input'));
    inputAgregar.dispatchEvent(new Event('input'));
    buttonAgregar.dispatchEvent(new Event('click'));

    expect(parseInt(inputMin.value)).toEqual(45)
    expect(parseInt(inputMax.value)).toEqual(75)
    expect(parseInt(inputAgregar.value)).toEqual(955)
    expect(parseInt(localStorage.getItem('incorrectos'))).toEqual(countIncorrectos + 1)

  });


  it('Calculo de la media aritmetica', async () => {
    
    const elementHTML: HTMLElement = fixture.nativeElement;
    
    let inputMin = fixture.debugElement.query(By.css('#idMinimo')).nativeElement;
    let inputMax = fixture.debugElement.query(By.css('#idMaximo')).nativeElement;

    let inputAgregar = fixture.debugElement.query(By.css('#idNumber')).nativeElement;    
    let buttonAgregar = fixture.debugElement.query(By.css('#idButtomAgregar')).nativeElement;
    let buttonMedia = fixture.debugElement.query(By.css('#idButtomMedia')).nativeElement;
    let countCorrectos:number = parseInt(component.count.toString()) 
    resetValueMedia()

    inputMin.value = 45;
    inputMax.value = 75;
    
    inputMin.dispatchEvent(new Event('input'));
    inputMax.dispatchEvent(new Event('input'));
    
    
    inputAgregar.value = 60
    inputAgregar.dispatchEvent(new Event('input'));
    buttonAgregar.dispatchEvent(new Event('click'));

    inputAgregar.value = 70
    inputAgregar.dispatchEvent(new Event('input'));
    buttonAgregar.dispatchEvent(new Event('click'));

    inputAgregar.value = 86
    inputAgregar.dispatchEvent(new Event('input'));
    buttonAgregar.dispatchEvent(new Event('click'));

    inputAgregar.value = 40
    inputAgregar.dispatchEvent(new Event('input'));
    buttonAgregar.dispatchEvent(new Event('click'));



    let textMedia = fixture.debugElement.query(By.css('#idMediaAritmetica')).nativeElement;
    let mediaA = await component.calcular()
    expect(parseInt(inputMin.value)).toEqual(45)
    expect(parseInt(inputMax.value)).toEqual(75)
    expect(localStorage.getItem('media')).toEqual('64')

  });

});
