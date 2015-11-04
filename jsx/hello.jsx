const React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <p>{this.props.salutation || 'Oh hai, world!'}</p>
    );
  }
});
