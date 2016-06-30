'use strict';

import test from 'tape';
import * as get from '../get';

test('DOM className test', (t) => {
  t.plan(1);
  const testNodes = get.className('test');
  const rootNode = get.css('html');
  const rootNodeAll = get.cssAll('html');
  console.log('root node: ', rootNode);
  console.log('root node all: ', rootNodeAll);
  console.log(typeof testNodes, testNodes);
  t.is(typeof testNodes, 'object', 'gets .test class');

});
