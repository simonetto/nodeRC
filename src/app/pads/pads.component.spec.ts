import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadsComponent } from './pads.component';

describe('PadsComponent', () => {
  let component: PadsComponent;
  let fixture: ComponentFixture<PadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
