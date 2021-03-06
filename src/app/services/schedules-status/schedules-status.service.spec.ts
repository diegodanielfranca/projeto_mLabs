import { of } from 'rxjs';
import { SchedulesStatusService } from './schedules-status.service';

describe('SchedulesStatusService', () => {

  let service;
  let httpClient;

  function setup() {

    httpClient = jasmine.createSpyObj('HttpClient', ['get']);

    service = new SchedulesStatusService(httpClient);

    return {
      service,
      httpClient
    }
  }

  describe('should getSocialMidiasSchedules', () => {
    const {
      service,
      httpClient
    } = setup();

    
    it('should be created', () => {
      // httpClient.get.and.returnValue(of())
      service.getSocialMidiasSchedules();
      expect(service.getSocialMidiasSchedules)
        .toBeDefined();
    });
  });
});
