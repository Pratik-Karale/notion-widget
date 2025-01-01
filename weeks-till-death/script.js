var App = React.createClass({ displayName: "App",

  getInitialState: function () {
    return {
      birthdayString: '2005-06-16',
      yearsToLive: 50 };

  },

  componentWillUpdate: function () {

  },

  calcWeeks: function () {
    this.birthdate = moment(this.state.birthdayString);
    this.deathdate = this.birthdate.clone().add(this.state.yearsToLive, 'years');

    this.weeksTillDeath = this.deathdate.diff(this.birthdate, 'week');
    this.weeksUsed = moment().diff(this.birthdate, 'week');
    this.weeksLeft = this.deathdate.diff(moment(), 'week');
    console.log(this.weeksTillDeath);
  },

  createWeeks: function () {
    console.log('create');
    let weeks = [];

    for (let i = 0; i < this.weeksTillDeath; i++) {
      const weekStatus = i < this.weeksUsed ? 'week-used' : 'week-todo';

      const classes = `${weekStatus} week`;

      weeks.push( /*#__PURE__*/React.createElement("div", { className: classes }, "#"));


    }
    return weeks;
  },

  render: function () {
    this.calcWeeks();
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("label", null, "Birthday:", /*#__PURE__*/

      React.createElement("input", { type: "text", value: this.state.birthdayString, onChange: e => this.setState({ birthdayString: e.target.value }) })), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("label", null, "How old you want to be:", /*#__PURE__*/

      React.createElement("input", { type: "text", value: this.state.yearsToLive, onChange: e => this.setState({ yearsToLive: e.target.value }) }))), /*#__PURE__*/


      React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("em", null, "You have ", /*#__PURE__*/React.createElement("u", null, this.weeksLeft), " weeks left."))), /*#__PURE__*/
      React.createElement("div", { className: "weekboxes-wrapper" },
      this.createWeeks()), /*#__PURE__*/

      React.createElement("p", null, "You'll be dead around ", this.deathdate.format('YYYY'), ". You have used ", /*#__PURE__*/React.createElement("strike", null, this.weeksUsed), " weeks. Please spend them well.")));


  } });


React.render( /*#__PURE__*/React.createElement(App, { birthdate: "", deathdate: "" }), document.querySelector("#root"));