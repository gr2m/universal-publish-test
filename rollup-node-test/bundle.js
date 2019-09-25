'use strict';

function subDependency() {
  console.log('[@gr2m/universal-sub-dependency] "module" entry point');
}

function dependency() {
  console.log('[@gr2m/universal-dependency] "module" entry point');
  subDependency();
}

dependency();
