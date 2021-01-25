import { SocialMidiaService } from './social-midias.service';
import { of } from 'rxjs';

describe('SocialMidiaService', () => {

  let service;
  let httpClient;

  function setup() {

    httpClient = jasmine.createSpyObj('HttpClient', ['get']);

    service = new SocialMidiaService(httpClient);

    return {
      service,
      httpClient
    }
  }

  describe('should getSocialMidias', () => {
    const {
      service,
      httpClient
    } = setup();

    
    it('getSocialMidias', () => {
      // httpClient.get.and.returnValue(of())
      service.getSocialMidias();
      expect(service.getSocialMidias)
        .toBeDefined();
    });
  });
});
