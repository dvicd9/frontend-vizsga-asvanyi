import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlushToysComponent } from './plush-toys.component';

describe('PlushToysComponent', () => {
  let component: PlushToysComponent;
  let fixture: ComponentFixture<PlushToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlushToysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlushToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
