import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfundComponent } from './editfund.component';

describe('EditfundComponent', () => {
  let component: EditfundComponent;
  let fixture: ComponentFixture<EditfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
