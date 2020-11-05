import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

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
    const minimoElement = elementHTML.querySelector('#idMinimo');
    const maximoElement = elementHTML.querySelector('#idMaximo');

    minimoElement.innerHTML = '23'
    maximoElement.innerHTML = '45'

    expect(minimoElement.classList.contains('is-valid')).toBeTruthy()

  });


});
