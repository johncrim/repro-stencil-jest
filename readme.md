# Stencil + Jest bug Reproduction

To reproduce:

```bash
git clone git@github.com:johncrim/repro-stencil-jest.git
npm install
npm run test.spec
```

Yields this error:

```
    C:\src\github\johncrim\repro-stencil-jest\libs\util\util.mjs:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import { Observable, NEVER } from 'rxjs';
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      1 | import { Component, Prop, h, Element } from '@stencil/core';
      2 | import { format } from '../../utils/utils';
    > 3 | import { resizeObservable } from '../../../libs/util/util';
        | ^
      4 | import { Subscription } from 'rxjs';
      5 |
      6 | @Component({

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1728:14)
      at Object.<anonymous> (src/components/my-component/my-component.tsx:3:1)
```
