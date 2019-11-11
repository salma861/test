import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsListeComponent } from './films-liste.component';

describe('FilmsListeComponent', () => {
  let component: FilmsListeComponent;
  let fixture: ComponentFixture<FilmsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
