import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreuiSidebarComponent } from './coreui-sidebar.component';

describe('CoreuiSidebarComponent', () => {
  let component: CoreuiSidebarComponent;
  let fixture: ComponentFixture<CoreuiSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreuiSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreuiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
