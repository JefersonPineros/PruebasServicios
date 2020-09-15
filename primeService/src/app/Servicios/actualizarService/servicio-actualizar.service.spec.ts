import { TestBed } from '@angular/core/testing';

import { ServicioActualizarService } from './servicio-actualizar.service';

describe('ServicioActualizarService', () => {
  let service: ServicioActualizarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActualizarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
