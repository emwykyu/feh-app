import React, { Component } from "react";
import "./App.css";
import HeroSearchResults from "./components/HeroSearchResults";
import M from "materialize-css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      charNo: 0,
      name: "",
      title: "",
      moveType: "",
      weaponType: "",
      skillName: ""
    };
    this.handleNameSearch = this.handleNameSearch.bind(this);
  }

  handleNameSearch(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, Option);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="appcontainer">
        <form className="form">
          <input style={{color: "#65a29c"}}
            className="input-field"
            id="heroSearchInputName"
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleNameSearch}
            placeholder="hero name"            
          />
          <input style={{color: "#65a29c"}}
            className="input-field"
            id="heroSearchInputTitle"
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleNameSearch}
            placeholder="hero title"            
          />
{/* 
          <input style={{color: "#65a29c"}}
            className="input-field"
            id="heroSearchInputSkill"
            type="text"
            value={this.state.skillName}
            name="skillName"
            onChange={this.handleNameSearch}
            placeholder="skill search"
            */}

          <div className="formSelect">
            <label>Movement Type:</label>
            <select
              //multiple
              value={this.state.moveType}
              onChange={this.handleNameSearch}
              name="moveType"
            >
              <option value="">All</option>
              <option value="Cavalry">Cavalry</option>
              <option value="Infantry">Infantry</option>
              <option value="Armored">Armored</option>
              <option value="Flying">Flying</option>
            </select>
          </div>

          <div className="formSelect">
            <label>Weapon Type:</label>
            <select
              //multiple
              value={this.state.weaponType}
              onChange={this.handleNameSearch}
              name="weaponType"
            >
              <option value="">All</option>
              <option value="Colorless Staff">Colorless Staff</option>
              <option value="Red Sword">Red Sword</option>
              <option value="Blue Lance">Blue Lance</option>
              <option value="Green Axe">Green Axe</option>
              <option value="Red Tome">Red Tome</option>
              <option value="Blue Tome">Blue Tome</option>
              <option value="Green Tome">Green Tome</option>
              <option value="Colorless Dagger">Colorless Dagger</option>
              <option value="Red Dagger">Red Dagger</option>
              <option value="Blue Dagger">Blue Dagger</option>
              <option value="Green Dagger">Green Dagger</option>
              <option value="Colorless Bow">Colorless Bow</option>
              <option value="Red Bow">Red Bow</option>
              <option value="Blue Bow">Blue Bow</option>
              <option value="Green Bow">Green Bow</option>
              <option value="Red Breath">Red Breath</option>
              <option value="Blue Breath">Blue Breath</option>
              <option value="Green Breath">Green Breath</option>
              {/* <option value="Colorless Beast">Colorless Beast</option>
            <option value="Red Beast">Red Beast</option>
            <option value="Blue Beast">Blue Beast</option>
            <option value="Green Beast">Green Beast</option>              */}
            </select>
          </div>
        </form>
        <div className="searchResult">
          <HeroSearchResults
            name={this.state.name}
            title={this.state.title}
            moveType={this.state.moveType}
            weaponType={this.state.weaponType}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
