import { ImgUploaderComponent } from './img-uploader.component';

describe('ImgUploaderComponent', () => {
  let component;

  function setup() {
    component = new ImgUploaderComponent();

    return {
      component,
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

  xdescribe('should fileChangeEvent', () => {
    const {
      component
    } = setup();

    const fileInput = {
      fileInput: '',
      target: {
        fileInput: '',
        files: [
          '1',
          '2'
        ]
      }
    }

    it('fileChangeEvent', () => {
      component.fileChangeEvent(fileInput);
      expect(component.fileChangeEvent)
        .toBeDefined();
    });
  });

});
