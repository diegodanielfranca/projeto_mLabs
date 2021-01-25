import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScheduleComponent } from './list-schedule.component';

describe('ListScheduleComponent', () => {
  let component;
  let schedulesService;
  let schedulesStatusService;

  function setup() {

    schedulesService = jasmine.createSpyObj('SchedulesService', ['getSchedules']);
    schedulesStatusService = jasmine.createSpyObj('SchedulesStatusService', ['getSocialMidiasSchedules']);

    component = new ListScheduleComponent(
      schedulesService,
      schedulesStatusService
    )

    return {
      component,
      schedulesService,
      schedulesStatusService
    }
  }


  describe('should ngOnInit', () => {
    const {
      component
    } = setup();

    it('ngOnInit', () => {
      spyOn(component, 'getSchedule')

      component.ngOnInit();
      expect(component.getSchedule)
        .toHaveBeenCalled();
    });
  });

  describe('should getSchedule', () => {
    const {
      component,
      schedulesService
    } = setup();

    it('getSchedule', () => {
      schedulesService.getSchedules.and.returnValue(of({
        data: {
          id: 1,
          media: 'aaa',
          publication_date: '2013-01-08T20:11:48Z',
          social_network_key: [1, 2],
          status_key: 'aaa',
          text: 'aaa',
        }
      }));

      spyOn(component, 'formatDate');
      spyOn(component, 'getStatus');

      component.getSchedule();
      expect(component.getStatus)
        .toHaveBeenCalled();
    });
  });

  describe('should formatDate', () => {
    const {
      component
    } = setup();

    component.schedule =
      [{
        id: 1,
        media: 'aaa',
        publication_date: '2013-01-08T20:11:48Z',
        social_network_key: [1, 2],
        status_key: 'aaa',
        text: 'aaa',
      }];

    it('formatDate', () => {

      component.formatDate();
      expect(component.formatDate)
        .toBeDefined();
    });
  });

  describe('should getStatus', () => {
    const {
      component,
      schedulesStatusService
    } = setup();

    it('schedulesStatusService', () => {
      schedulesStatusService.getSocialMidiasSchedules
        .and.returnValue(of(''));

      spyOn(component, 'filterStatus');

      component.getStatus();
      expect(component.filterStatus)
        .toHaveBeenCalled();
    });
  });

  describe('should filterStatus', () => {
    const {
      component,
    } = setup();

    it('filterStatus', () => {

      component.schedule =
        [{
          id: 1,
          media: 'aaa',
          publication_date: 'aaa',
          social_network_key: [1, 2],
          status_key: 'aaa',
          text: 'aaa',
        }];

      const statusArray = [{
        id: 1,
        name: 'aaa',
        color: 'aaa',
        socialName: 'aaa',
      }]

      spyOn(component, 'changeSocialMidiaIcon');

      component.filterStatus(statusArray);
      expect(component.changeSocialMidiaIcon)
        .toHaveBeenCalled();
    });

    describe('should changeSocialMidiaIcon', () => {
      const {
        component,
      } = setup();

      it('changeSocialMidiaIcon', () => {

        component.schedule =
          [{
            id: 1,
            media: 'aaa',
            publication_date: 'aaa',
            social_network_key: [1, 2],
            status_key: 'aaa',
            text: 'aaa',
          }];

        spyOn(component, 'changeSocialMidiaIcon');

        component.changeSocialMidiaIcon(1);
        expect(component.changeSocialMidiaIcon)
          .toHaveBeenCalled();
      });
    });
  });
});
