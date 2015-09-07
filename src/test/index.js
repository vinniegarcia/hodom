'use strict';

import test from 'tape';
import * as get from '../get';

test('DOM test', (t) => {
  t.plan(2);
  t.is(typeof get.tag('html'), 'object', 'gets html object');
  t.is(typeof get.tag('body'), 'object', 'gets doc body');
});
