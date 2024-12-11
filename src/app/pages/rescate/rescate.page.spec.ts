import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RescatePage } from './rescate.page';

describe('RescatePage', () => {
  let component: RescatePage;
  let fixture: ComponentFixture<RescatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RescatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
