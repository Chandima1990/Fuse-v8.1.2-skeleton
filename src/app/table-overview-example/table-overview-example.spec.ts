import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOverviewExample  } from './table-overview-example';

describe('TableOverviewExampleComponent', () => {
  let component: TableOverviewExample;
  let fixture: ComponentFixture<TableOverviewExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOverviewExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
