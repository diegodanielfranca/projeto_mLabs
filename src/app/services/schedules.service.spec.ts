import { of } from 'rxjs';
import { SchedulesService } from './schedules.service';


describe('SchedulesService', () => {

  let service;
  let httpClient;

  function setup() {

    httpClient = jasmine.createSpyObj('HttpClient', ['get']);

    service = new SchedulesService(httpClient);

    return {
      service,
      httpClient
    }
  }

  describe('should getSchedules', () => {
    const {
      service,
      httpClient
    } = setup();

    
    it('getSchedules', () => {
      // httpClient.get.and.returnValue(of())
      service.getSchedules();
      expect(service.getSchedules)
        .toBeDefined();
    });
  });
});
