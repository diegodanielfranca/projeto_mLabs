import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

    let component;
    let router;

    function setup() {

        router = jasmine.createSpyObj('Router', ['navigate'])


        component = new HomeComponent(
            router
        );

        return {
            component,
            router
        }
    }

    describe('should ngOnInit', () => {
        const {
            component
        } = setup();

        it('ngOnInit', () => {
            component.ngOnInit();
            expect(component.ngOnInit)
                .toBeDefined();
        });
    });

    describe('should goToScheduling', () => {
        const {
            component,
            router
        } = setup();

        it('schedule', () => {
            router.navigate.and.returnValue(of());

            component.goToScheduling();
            expect(component.goToScheduling)
                .toBeDefined();
        });
    });
});
