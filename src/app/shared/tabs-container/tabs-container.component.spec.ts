import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TabsContainerComponent } from './tabs-container.component';
import { TabComponent } from '../tab/tab.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <app-tabs-container>
      <app-tab tabTitle="Tab1">Tab1</app-tab>
      <app-tab tabTitle="Tab2">Tab2</app-tab>
    </app-tabs-container>
  `,
})
class TestHostComonent {}

describe('TabsContainerComponent', () => {
  let component: TestHostComonent;
  let fixture: ComponentFixture<TestHostComonent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsContainerComponent, TabComponent, TestHostComonent],
    });
    fixture = TestBed.createComponent(TestHostComonent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have two tabs', () => {
    const tabs = fixture.debugElement.queryAll(By.css('li'));
    const containerComponent = fixture.debugElement.query(
      By.directive(TabsContainerComponent)
    );

    const tabsProp = containerComponent.componentInstance.tabs;

    expect(tabs.length).withContext('Tabs did not render').toBe(2);
    expect(tabsProp.length)
      .withContext('Could not grab component property')
      .toBe(2);
  });
});
