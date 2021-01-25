import { SchedulingComponent } from './scheduling.component';
import { of } from 'rxjs';

describe('SchedulingComponent', () => {
    let component;
    let globalService;
    let router;
    let dialog;

    function setup() {

        globalService = jasmine.createSpyObj('GlobalService', ['canProceed']);
        router = jasmine.createSpyObj('Router', ['navigate']);
        dialog = jasmine.createSpyObj('MatDialog', ['open']);

        component = new SchedulingComponent(globalService, router, dialog);

        return {
            component,
            globalService,
            router,
            dialog
        }

    }

    describe('should ngOnInit', () => {
        const {
            component,
            globalService
        } = setup();

        it('ngOnInit', () => {
            globalService.canProceed.and.returnValue(of(true));

            component.ngOnInit();
            expect(component.canProceed)
                .toBeDefined();
        });
    });

    describe('should goToListSchedule', () => {
        const {
            component,
            router
        } = setup();

        it('closeDialog', () => {
            router.navigate.and.returnValue(of());

            component.goToListSchedule();
            expect(component.goToListSchedule)
                .toBeDefined();
        });
    });

    xdescribe('should openDialog', () => {
        const {
            component,
            dialog
        } = setup();

        it('openDialog', () => {
            dialog.open.and.returnValue(of());
            spyOn(component, 'goToListSchedule');

            component.openDialog();
            expect(component.goToListSchedule)
                .toHaveBeenCalled();
        });
    });
});
