/**
 * @license
 * Copyright (c) 2017-2018 Noticeable. All rights reserved.
 */
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg size="24" name="noticeable-widget">
    <svg>
        <defs>
            <g id="arrow-back">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </g>
        </defs>
    </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
