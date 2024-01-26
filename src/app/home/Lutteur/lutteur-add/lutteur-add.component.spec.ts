import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutteurAddComponent } from './lutteur-add.component';

describe('LutteurAddComponent', () => {
  let component: LutteurAddComponent;
  let fixture: ComponentFixture<LutteurAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LutteurAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LutteurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
