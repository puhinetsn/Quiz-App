import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImLuckyComponent } from './im-lucky.component';

describe('ImLuckyComponent', () => {
  let component: ImLuckyComponent;
  let fixture: ComponentFixture<ImLuckyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImLuckyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImLuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
