import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));
  it('deve garantir que 1&4=0',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, '&');
      expect(soma).toEqual(0);
    }) 
  );
  it('deve garantir que 1+4=5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }) 
  );
  it('deve garantir que 1/4=0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let div = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(div).toEqual(0.25);
    }) 
  );
  it('deve garantir que 1*4=4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let mult = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(mult).toEqual(4);
    }) 
  );
  it('deve garantir que 1-4=-3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sub = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(sub).toEqual(-3);
    }) 
  );
});
