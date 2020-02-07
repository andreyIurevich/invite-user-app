import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserListComponent } from './invite-user-list.component';

describe('InviteUserListComponent', () => {
  let component: InviteUserListComponent;
  let fixture: ComponentFixture<InviteUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
