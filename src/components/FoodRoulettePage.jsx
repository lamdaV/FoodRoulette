var React = require("react");
var Random = require("random-js");

var mockData = ["JGumbos", "Fudruckers", "Popeyes", "Royal Mandarin", "Rick's", "Pie Company", "Five Guys", "Fizolis", "Qdoba"];

var FoodRoulettePage = React.createClass({
  getInitialState: function() {
    this.generator = new Random(Random.engines.mt19937().autoSeed());
    return ({place: null});
  },

  roll: function(event) {
    event.preventDefault();
    console.log("[ INFO ]: you see me rolling.");
    this.setState({place: mockData[this.generator.integer(0, mockData.length - 1)]});
  },

  render: function() {
    return (
      <div className = "col-md-12 jumbotron">
        <div className = "panel panel-primary">
          <div className = "panel-heading">
            Food Roulette
          </div>

          <div className = "panel-body">
            {/* TODO: onClick/onSubmit event */}
            <button className = "btn btn-primary btn-block" type = "button" onClick = {this.roll}>
              Roll!
            </button>



            {this.state.place ? <div> <br></br> <div className = "alert alert-info"> {this.state.place} </div> </div> : <div></div>}

          </div>
        </div>
      </div>
    );
  }
});

module.exports = FoodRoulettePage;
