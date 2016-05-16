import React from 'react';
import validate from '../imports/validation/validate';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.startup(() => {
  injectTapEventPlugin();
  render(<App />, document.getElementById('target'));

});

