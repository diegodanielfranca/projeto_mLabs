import { SocialMediasComponent } from './social-medias.component';
import { of } from 'rxjs';


describe('SocialMediasComponent', () => {
    let component;
    let socialMidiasService;

    function setup() {

        socialMidiasService = jasmine.createSpyObj('SocialMidiaService', ['getSocialMidias']);

        component = new SocialMediasComponent(socialMidiasService);

        return {
            component,
            socialMidiasService
        }
    }

    describe('should ngOnInit', () => {
        const {
            component
        } = setup();

        it('ngOnInit', () => {
            spyOn(component, 'getSocialMidias');
            component.ngOnInit();
            expect(component.getSocialMidias)
                .toHaveBeenCalled();
        });
    });

    xdescribe('should getSocialMidias', () => {
        const {
            component,
            socialMidiasService
        } = setup();

        const data = JSON.parse(
            `{
                "data": [{
                    "id": 1,
                    "name": "Facebook",
                    "icon": "facebook-f",
                    "status": "disabled"
                }]
            }`
        );

        it('getSocialMidias', () => {
            socialMidiasService.getSocialMidias.and.returnValue(of({}));

            component.getSocialMidias();
            expect(component.getSocialMidias)
                .toBeDefined();
        });
    });


});