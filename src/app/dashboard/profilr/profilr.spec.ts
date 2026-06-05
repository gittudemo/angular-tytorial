import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilr } from './profilr';

describe('Profilr', () => {
  let component: Profilr;
  let fixture: ComponentFixture<Profilr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profilr],
    }).compileComponents();

    fixture = TestBed.createComponent(Profilr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
