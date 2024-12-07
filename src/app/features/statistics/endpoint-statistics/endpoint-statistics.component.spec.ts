import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointStatisticsComponent } from './endpoint-statistics.component';

describe('EndpointStatisticsComponent', () => {
  let component: EndpointStatisticsComponent;
  let fixture: ComponentFixture<EndpointStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndpointStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndpointStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
