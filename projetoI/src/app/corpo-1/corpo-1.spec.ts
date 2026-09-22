import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corpo1 } from './corpo-1';

describe('Corpo1', () => {
  let component: Corpo1;
  let fixture: ComponentFixture<Corpo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Corpo1],
    }).compileComponents();

    fixture = TestBed.createComponent(Corpo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
