var React = require("react");
// var NavBar = require("../nav/NavBar.jsx");

var initialNavLinks = [
  {
    title: "GitHub",
    href: "https://github.com/lamdaV"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/lamdav"
  },
  {
    title: "Resume",
    href: "/resume"
  },
  {
    title: "Project",
    href: "/project"
  },
  {
    title: "Game of Life",
    href: "/gameOfLife"
  }
];

var Base = React.createClass({
  /*
    Define propTypes.
  */
  propTypes: {
    children: React.PropTypes.object
  },

  /*
    Set router for dynamic pushing.
  */
  contextTypes: {
    router: React.PropTypes.object
  },

  /*
    Set the state.
  */
  getInitialState: function() {
    return ({navLinks: initialNavLinks, canSignOut: false, brandLink: "/home"});
  },

  /*
    Render the component.
  */
  render: function() {
    var childrenStyle = {
      marginTop: 80
    };

    return (
      <div>
        {/* Header/Navbar */}
        {/*<NavBar bgColor = "#563d7c" titleColor = "#fff" linkColor = "cyan" navData = {this.state.navLinks} brandName = "Home" brandLink = {this.state.brandLink} enableSignOut = {false} />*/}

        {/* Content */}
        <div className = "container">
          <div style = {childrenStyle}>
            {this.props.children}
          </div>
        </div>

        {/* Footer */}
        <div className = "container">
          <div className = "row">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Base;
