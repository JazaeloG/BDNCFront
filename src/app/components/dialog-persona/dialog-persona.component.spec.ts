import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPersonaComponent } from './dialog-persona.component';

describe('DialogPersonaComponent', () => {
  let component: DialogPersonaComponent;
  let fixture: ComponentFixture<DialogPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
