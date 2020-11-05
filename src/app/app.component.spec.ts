import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';



import { LocalStorageService } from './local-storage.service';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let serviceLocalStorage: LocalStorageService;

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

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'mediaAritmetica'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('mediaAritmetica');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('mediaAritmetica app is running!');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('mediaAritmetica app is running!');
  // });

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

    inputMin.value = 45;
    inputMax.value = 75;
    
    inputAgregar.value = 95

    inputMin.dispatchEvent(new Event('input'));
    inputMax.dispatchEvent(new Event('input'));
    inputAgregar.dispatchEvent(new Event('input'));
    buttonAgregar.dispatchEvent(new Event('click'));

    expect(parseInt(inputMin.value)).toEqual(45)
    expect(parseInt(inputMax.value)).toEqual(75)
    expect(parseInt(inputAgregar.value)).toEqual(95)
    expect(component.incorrectos).toEqual(countIncorrectos + 1)

  });

});
