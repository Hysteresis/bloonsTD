import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerListComponent } from './tower-list.component';

describe('TowerListComponent', () => {
  let component: TowerListComponent;
  let fixture: ComponentFixture<TowerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerListComponent]
    });
    fixture = TestBed.createComponent(TowerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
