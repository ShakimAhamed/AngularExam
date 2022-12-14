import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDetailsComponent } from './bookmark-details.component';

describe('BookmarkDetailsComponent', () => {
  let component: BookmarkDetailsComponent;
  let fixture: ComponentFixture<BookmarkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
