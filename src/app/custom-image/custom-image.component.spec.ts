import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomImageComponent } from './custom-image.component';

describe('CustomImageComponent', () => {
  let component: CustomImageComponent;
  let fixture: ComponentFixture<CustomImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
