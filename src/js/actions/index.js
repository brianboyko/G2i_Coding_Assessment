// ==========================
// ./actions/index.js
// ==========================

import * as todo from './todo_actions';
// this allows a central import for *all* actions in the application.
// since actions are static function definitions and do not cause a re-render,
// it is okay to give components that might not need all the actions superfluous actions
// without a performance penalty.
// Even though this is only one set of actions, larger applications might need multiple
// grouped actions, thus the "Object.assign()"
export default Object.assign({}, todo);
