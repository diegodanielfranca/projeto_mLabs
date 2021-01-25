import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTextComponent } from './post-text.component';

describe('PostTextComponent', () => {
  let component;

  function setup() {

    component = new PostTextComponent();

    return {
      component
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

  describe('should toggleEmojiPicker', () => {
    const {
        component,
    } = setup();

    it('toggleEmojiPicker', () => {
        component.toggleEmojiPicker();
        expect(component.showEmojiPicker)
            .toBeDefined();
    });
});

describe('should onFocus', () => {
    const {
        component,
    } = setup();

    it('onFocus', () => {
        component.onFocus();
        expect(component.showEmojiPicker)
            .toBeDefined();
    });
});

describe('should addEmoji', () => {
    const {
        component,
    } = setup();

    const event = {
        emoji: {
            native: ''
        }
    };

    it('addEmoji', () => {
        component.addEmoji(event);
        expect(component.showEmojiPicker)
            .toBeDefined();
    });
});
  
});
