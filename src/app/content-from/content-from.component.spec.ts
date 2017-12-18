import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFromComponent } from './content-from.component';

describe('ContentFromComponent', () => {
  let component: ContentFromComponent;
  let fixture: ComponentFixture<ContentFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
