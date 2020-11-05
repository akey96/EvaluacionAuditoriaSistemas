import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('Servicio LocalStorage deberia ser creado y poder invocar a sus metodos', () => {
    expect(service).toBeTruthy();
    let methodSetCalled = spyOn(service, 'set');
    let methodGetCalled = spyOn(service, 'get');
    let methodRemoveCalled = spyOn(service, 'remove');
    
    service.set('edad', 12);
    service.get('edad');
    service.remove('edad');
    
    expect(methodSetCalled).toHaveBeenCalled();
    expect(methodGetCalled).toHaveBeenCalled();
    expect(methodRemoveCalled).toHaveBeenCalled();
  });

  it('Servicio LocalStorage deberia poder crear y obtener variables', () => {
    expect(service.set('edad', 12)).toBeTruthy();
    expect(service.get('edad')).toEqual(12);
  });

  
  it('Servicio LocalStorage deberia poder eliminar una variable', () => {
    service.set('edad', 12)
    expect(service.remove('edad')).toBeTruthy();
    expect(service.get('edad')).toBeNull();
  });
  
});
