import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeroComponent } from './main-hero.component';

describe('MainHeroComponent', () => {
  let component: MainHeroComponent;
  let fixture: ComponentFixture<MainHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHeroComponent]
    });
    fixture = TestBed.createComponent(MainHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
