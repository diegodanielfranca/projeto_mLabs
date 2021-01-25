import { of } from 'rxjs';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let dialogRef;

  function setup() {

    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    const component = new DialogComponent(dialogRef);

    return {
      component,
      dialogRef
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

  describe('should closeDialog', () => {
    const {
      component,
      dialogRef
    } = setup();

    it('closeDialog', () => {
      dialogRef.close.and.returnValue(of());

      component.closeDialog();
      expect(component.closeDialog)
        .toBeDefined();
    });
  });
});
