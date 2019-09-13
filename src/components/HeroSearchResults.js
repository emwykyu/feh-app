import React from "react";
import fehData from "../fehData";
//import feh_Data from "../feh_Data.json"
import "../index.css";
import HeroCard from "./HeroCard";
import "../App.css";
import default_img from "../components/feh_default_75x75.jpg"

class HeroSearchResults extends React.Component {
  constructor() {
    super();
    this.state = { heroTempName: "", heroTempTitle: "", heroid: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({
      heroid: id
    });
  }


  /*
  Use the filter method to search heroes based on search parameters.
  The filters are chained, i.e. the result of one feeds into another  
  */
  render() {
    const filterHeroesByName = fehData.heroes.filter(word =>
      word.shortName.toLowerCase().includes(this.props.name.toLowerCase())
    );

    const filterHeroesByTitle = filterHeroesByName.filter(word =>
      word.title.toLowerCase().includes(this.props.title.toLowerCase())
    );

    const filterHeroesByMovementType = filterHeroesByTitle.filter(movement =>
      movement.moveType.includes(this.props.moveType)
    );

    const filterHeroesByWeaponType = filterHeroesByMovementType.filter(weapon =>
      weapon.weaponType.includes(this.props.weaponType)
    );
    

    //From the filtered list of heroes, click on the hero to pass the id of that hero to the HeroCard function, to generate the page.
    let heroSearchResultsList = filterHeroesByWeaponType.map(hero => {
      return (
        <div className="heroListItem"
          style={{ display: "flex" }}
          key={hero.id}
          onClick={() => {
            this.handleClick(hero.id);
          }}
        >
          <img
            src={hero.assets.portrait["75px"]}
            height="75"
            alt=""
            onError={e => {
              e.target.onerror = null;
              //e.target.src = "https://bit.ly/2OLBnGc";
              e.target.src = {default_img};
            }}
          />
          <p>{`${hero.shortName} ${hero.title}`}</p>
        </div>
      );
    });

    return (
      <div className="resultsGridContainer">
        <div className="searchResultTable">{heroSearchResultsList}</div>

        <div className="heroCard">
          <HeroCard id={this.state.heroid} />
        </div>
      </div>
    );
  }
}

export default HeroSearchResults;
