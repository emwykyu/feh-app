import React from "react";
import fehData from "../fehData";

class HeroCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    //return first element in array that satisfies the condition - allows us to search for characters 
    let filterHeroesByTitle = fehData.heroes.find(person => {
      return person.id === this.props.id;
    });


    if (typeof filterHeroesByTitle === "undefined") {
      return "";
    } else {
      //display image for hero rarity based on returned rarity of hero
      let rarityImg = rarity => {
        if (rarity === "5" || rarity === "4-5") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://vignette.wikia.nocookie.net/nintendo/images/7/71/FEH_Rarity_Star.png/revision/latest?cb=20171220181705&path-prefix=en"
              alt=""
            />
          );
        }
        if (rarity === "3-4" || rarity === "4") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://vignette.wikia.nocookie.net/nintendo/images/c/ca/FEH_Icon_%28Rarity_4%29.png/revision/latest?cb=20171110150246&path-prefix=en"
              alt=""
            />
          );
        }
        if (rarity === "1-4" || rarity === "3") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://vignette.wikia.nocookie.net/nintendo/images/e/eb/FEH_Icon_%28Rarity_3%29.png/revision/latest?cb=20171125013231&path-prefix=en"
              alt=""
            />
          );
        }
      };
      //display image for hero movement type based on returned movement type of hero
      let movementImg = movement => {
        if (movement === "Cavalry") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/9/9f/Icon_Move_Cavalry.png?version=c5359b16154323030fc18026709e00a8"
              alt=""
            />
          );
        }
        if (movement === "Armored") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/8/80/Icon_Move_Armored.png?version=32ca273daf1fa54406d167559b14bdf5"
              alt=""
            />
          );
        }
        if (movement === "Infantry") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/4/45/Icon_Move_Infantry.png?version=48298429557885fd28568fa2caa71e81"
              alt=""
            />
          );
        }
        if (movement === "Flying") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/7/73/Icon_Move_Flying.png?version=269f3db261a540cdc7651e791b9f126d"
              alt=""
            />
          );
        }
      };
      //display image for hero weapon based on returned weapon of hero
      let weaponImg = weapon => {
        if (weapon === "Colorless Staff") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/c/cd/Icon_Class_Colorless_Staff.png?version=326ec3c07813a70d4e83643168c94ae7"
              alt=""
            />
          );
        }
        if (weapon === "Red Sword") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/4/47/Icon_Class_Red_Sword.png?version=df446f90f227b3b298e98095c5ee60d1"
              alt=""
            />
          );
        }
        if (weapon === "Blue Lance") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/6/60/Icon_Class_Blue_Lance.png?version=cdcefb832480f5a5021f1a9c301b876f"
              alt=""
            />
          );
        }
        if (weapon === "Green Axe") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/6/6e/Icon_Class_Green_Axe.png?version=b907aa471bf5262e27723646457a3d1f"
              alt=""
            />
          );
        }
        if (weapon === "Red Tome") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/8/8a/Icon_Class_Red_Tome.png?version=9adf19544712c8d64f6b4a421255f15b"
              alt=""
            />
          );
        }
        if (weapon === "Blue Tome") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/8/8e/Icon_Class_Blue_Tome.png?version=3360ea108340ee2c91471f7d873382f1"
              alt=""
            />
          );
        }
        if (weapon === "Green Tome") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/7/75/Icon_Class_Green_Tome.png?version=758f522c4fc8b42f96cfa8ccd6393a0e"
              alt=""
            />
          );
        }
        if (weapon === "Colorless Dagger") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/6/68/Icon_Class_Colorless_Dagger.png?version=8e3b8b6ced5ad573a84c1b4da5634c6e"
              alt=""
            />
          );
        }
        if (weapon === "Red Dagger") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/a/a0/Icon_Class_Red_Dagger.png?version=9bfa37022e3c032376b1981d59d1c547"
              alt=""
            />
          );
        }
        if (weapon === "Blue Dagger") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/8/81/Icon_Class_Blue_Dagger.png?version=7edd40ff5b27bfae03b6f72cd8ea4aa4"
              alt=""
            />
          );
        }
        if (weapon === "Green Dagger") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/9/9d/Icon_Class_Green_Dagger.png?version=15e117d5627c9c602157cb1f8f58d0f2"
              alt=""
            />
          );
        }
        if (weapon === "Colorless Bow") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/c/c1/Icon_Class_Colorless_Bow.png?version=233f6b550ab3053108bc8b1a88341f1f"
              alt=""
            />
          );
        }
        if (weapon === "Red Bow") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/2/25/Icon_Class_Red_Bow.png?version=31ccf8c9967ebe4a45a24b9f03d39a14"
              alt=""
            />
          );
        }
        if (weapon === "Blue Bow") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/1/1e/Icon_Class_Blue_Bow.png?version=70e7607678a74f26859988c825d56946"
              alt=""
            />
          );
        }
        if (weapon === "Green Bow") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/7/76/Icon_Class_Green_Bow.png?version=b9ba1ddbb694eb0b75b34d90a6523342"
              alt=""
            />
          );
        }
        if (weapon === "Red Breath") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/e/ee/Icon_Class_Red_Breath.png?version=feb9621d577f87151a7497e7196495c2"
              alt=""
            />
          );
        }
        if (weapon === "Blue Breath") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/3/3d/Icon_Class_Blue_Breath.png?version=c8f95eb95cc39bdf85966ed39dd77b95"
              alt=""
            />
          );
        }
        if (weapon === "Green Breath") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/e/eb/Icon_Class_Green_Breath.png?version=8bf219da75497c35fda35e9708840127"
              alt=""
            />
          );
        }
        if (weapon === "Colorless Beast") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/0/02/Icon_Class_Colorless_Beast.png?version=ece357081b29d2b07469328fa51e54c5"
              alt=""
            />
          );
        }
        if (weapon === "Red Beast") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/2/2f/Icon_Class_Red_Beast.png?version=e9709b3c5b163c650c81c8ed96f3142f"
              alt=""
            />
          );
        }
        if (weapon === "Blue Beast") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/3/30/Icon_Class_Blue_Beast.png?version=e35f251190f265a825b31c04d7a191bf"
              alt=""
            />
          );
        }
        if (weapon === "Green Beast") {
          return (
            <img
              className="statsIcons"
              height="25"
              src="https://gamepedia.cursecdn.com/feheroes_gamepedia_en/d/d7/Icon_Class_Green_Beast.png?version=159dbd847cbf63d390a8599eeab29e8b"
              alt=""
            />
          );
        }
      };

      //get skills from json and display it in a table
      function getSkills() {
        return filterHeroesByTitle.skills.map(skill => (
          <tr>
            <td>{skill.name}</td>
            <td>{skill.rarity}</td>
          </tr>
        ));
      }

      //get stats for the hero from json. There are always 5 stats retrieved.
      function getStats() {
        for (let i = 1; i <= 5; i++) {
          if (typeof filterHeroesByTitle.stats["1"][i] === "undefined") {
            console.log(filterHeroesByTitle.stats["1"][i] + " get stats failed");
          } else {
            return (
              <div>
                <table>
                  <tr>
                    <th>Lv 1</th>
                    <tbody>
                      <td>
                      </td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>HP</td>
                      <td>{filterHeroesByTitle.stats["1"][i].hp}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>ATK</td>
                      <td>{filterHeroesByTitle.stats["1"][i].atk}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>SPD</td>
                      <td>{filterHeroesByTitle.stats["1"][i].spd}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>DEF</td>
                      <td>{filterHeroesByTitle.stats["1"][i].def}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>RES</td>
                      <td>{filterHeroesByTitle.stats["1"][i].res}</td>
                    </tbody>
                  </tr>
                </table>

                <table>
                  <tr>
                    <th>Lv 40</th>
                    <tbody>
                      <td>
                      </td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>HP</td>
                      <td>{filterHeroesByTitle.stats["40"][i].hp + ""}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>ATK</td>
                      <td>{filterHeroesByTitle.stats["40"][i].atk + ""}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>SPD</td>
                      <td>{filterHeroesByTitle.stats["40"][i].spd + ""}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>DEF</td>
                      <td>{filterHeroesByTitle.stats["40"][i].def + ""}</td>
                    </tbody>
                  </tr>
                  <tr>
                    <th />
                    <tbody>
                      <td>RES</td>
                      <td>{filterHeroesByTitle.stats["40"][i].res + ""}</td>
                    </tbody>
                  </tr>
                </table>
              </div>

              
            );
          }
        }
      }

      return (
        <div
        //dynamically insert background image based on hero selected
          style={{
            backgroundImage: `url(${
              filterHeroesByTitle.assets.heroArt.attack
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="cardContainer">
            <h1>{filterHeroesByTitle.name}</h1>
            <p>{filterHeroesByTitle.origin}</p>

            <div className="cardStats">
              <div>
                Weapon: <span>{weaponImg(filterHeroesByTitle.weaponType)}</span>
              </div>
              <div>
                Movement:{" "}
                <span>{movementImg(filterHeroesByTitle.moveType)}</span>
              </div>
              <div>
                Rarity: <span>{rarityImg(filterHeroesByTitle.rarities)}</span>
              </div>
            </div>

            <div className="heroData">
              <div className="skillsSection">
                <table>
                  <thead>
                    <tr>
                      <th>Skill Name</th>
                      <th>Rarity</th>
                    </tr>
                  </thead>
                  <tbody>{getSkills()}</tbody>
                </table>
              </div>

              <div className="statsSection">{getStats()}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HeroCard;

//https://www.reddit.com/r/OrderOfHeroes/comments/87isdl/all_hero_stats_and_skill_data_statsjson_sourced/
//https://raw.githubusercontent.com/ajhyndman/fire-emblem-working-title/master/packages/fire-emblem-heroes-stats/stats.json
