const React = require('react');
const SayHai = require('./hello.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <SayHai />
      </div>
    );
  }
});
