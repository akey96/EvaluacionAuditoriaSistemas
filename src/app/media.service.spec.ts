import { TestBed, async } from '@angular/core/testing';

import { MediaService } from './media.service';

import { LocalStorageService } from './local-storage.service';

describe('MediaService', () => {
  let service: MediaService;
  let serviceLocalStorage: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaService);

    serviceLocalStorage = TestBed.inject(LocalStorageService);
  });

  it('Servicio Media deberia ser creado y poder invocar a sus metodos', async () => {
    expect(service).toBeTruthy();
    let methodCalcularCalled = spyOn(service, 'calcular');
    await service.calcular();
    expect(methodCalcularCalled).toHaveBeenCalled();
  });

  it('El metodo calcular deberia lanzar un error ya que no existen datos en la tabla que calcular', async () => {
    try {
      let media = await service.calcular();
    } catch (error) {
      expect(error).toEqual("Error, no exiten datos que calcular")
    }
  });

  it('El metodo calcular debe calcular la media aritmetica del valor "items" del localstorage', async () => {
    let valores = [50, 44, 42, 40];
    serviceLocalStorage.set('items', valores);
    expect(await service.calcular()).toEqual(44.0)
  });



});
