import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMethodComponent } from './get-method.component';

describe('GetMethodComponent', () => {
  let component: GetMethodComponent;
  let fixture: ComponentFixture<GetMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
