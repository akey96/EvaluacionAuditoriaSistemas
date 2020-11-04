import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('Servicio LocalStorage deberia ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia poder crear variables en el localStorage', () => {
    expect(service.set('edad', 12)).toBeTruthy();
  });

  it('Deberia poder obtener el valor del una variable guardada en el localstorage', () => {
    service.set('edad', 12);
    expect(service.get('edad')).toEqual(12);
  });
  
  it('Deberia poder eliminar una variable guardada en el localstorage', () => {
    service.set('edad', 12)
    expect(service.remove('edad')).toBeTruthy();
    expect(service.get('edad')).toBeNull();
  });
});
