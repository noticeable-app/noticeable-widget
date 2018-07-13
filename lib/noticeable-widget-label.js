/**
 * @license
 * Copyright (c) 2017-2018 Noticeable. All rights reserved.
 */
import '@polymer/polymer/polymer-legacy.js';

import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import 'tinycolor2/tinycolor.js';

/**
 * `noticeable-widget-label` is a colored box used to display a post label.
 *
 * Third party developers should not have to deal with this component.
 *
 * @polymer
 * @customElement
 */
class NoticeableWidgetLabel extends PolymerElement {
  static get template() {
    return html`
        <style>
            .label {
                background-color: var(--noticeable-widget-label-background-color);
                box-sizing: border-box;
                border-radius: 4px;
                color: var(--noticeable-widget-label-foreground-color);
                display: inline-block;
                font-size: 10px;
                font-weight: 800;
                height: 20px;
                line-height: 20px;
                padding: 0 8px;
                text-align: center;
                text-transform: uppercase;
                vertical-align: middle;
                @apply --noticeable-widget-label-mixin;
            }
        </style>

        <div class="label">[[name]]</div>
`;
  }

  static get is() {
      return 'noticeable-widget-label';
  }

  static get properties() {
      return {
          color: {
              type: 'String',
              observer: '_onColorChange'
          },
          name: {
              type: 'String',
              value: 'Label'
          }
      }
  }

  _onColorChange(newColor) {
      this.updateStyles({
          '--noticeable-widget-label-background-color': newColor,
          '--noticeable-widget-label-foreground-color': this._getForegroundColor(newColor),
      });
  }

  _getForegroundColor(backgroundColor) {

      const color = tinycolor(backgroundColor);

      if (color.getBrightness() > 180) {
          return '#000000';
      }

      return '#ffffff';
  }
}

window.customElements.define(NoticeableWidgetLabel.is, NoticeableWidgetLabel);
