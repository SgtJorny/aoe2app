import React from "react";
import "./CivContainer.css";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonSearchbar,
  IonAvatar,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";
import axios from "axios";

// https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations

export default class CivContainer extends React.Component {
  state = {
    civilizations: [],
    loading: false,
    results: []
  };

  componentDidMount() {
    axios.get("./assets/civ.json").then(res => {
      const civilizations = res.data.civilizations;
      this.setState({ civilizations });
      console.log(civilizations);
    });
  }

  searchCivs(value: any) {
    const filtered = this.state.civilizations.filter((civ: any) => {
      return civ.name.toLowerCase().includes(value.toLowerCase());
    });

    console.log(filtered);
    this.setState({
      civlizations: filtered
    });
  }

  // componentWillReceiveProps(nextProps: any) {
  //   this.setState({
  //     filtered: nextProps.items
  //   });
  // }

  render() {
    if (this.state.civilizations) {
      return (
        <IonContent>
          {/*-- List of Text Items --*/}
          <IonSearchbar
            onIonChange={e => this.searchCivs(e.detail.value)}
          ></IonSearchbar>
          {/*-- List of Text Items --*/}
          <IonList lines="none">
            <IonRow>
              {this.state.civilizations.map((civ: any) => {
                return (
                  <IonCol size="12">
                    <IonCard>
                      <IonCardHeader>
                        <IonRow>
                          <IonCol size="2">
                            <IonAvatar>
                              <img
                                src={
                                  "./assets/civ-images/" +
                                  civ.name.toLocaleLowerCase() +
                                  ".png"
                                }
                              ></img>
                            </IonAvatar>
                          </IonCol>
                          <IonCol size="10">
                            <IonCardSubtitle>{civ.army_type}</IonCardSubtitle>
                            <IonCardTitle>{civ.name}</IonCardTitle>
                          </IonCol>
                        </IonRow>
                      </IonCardHeader>

                      <IonCardContent>
                        {civ.civilization_bonus.map((bonus: any, i: any) => {
                          return <p>-{civ.civilization_bonus[i]}</p>;
                        })}
                        <br></br>

                        <h3>Unique Tech</h3>
                        {civ.unique_tech.map((bonus: any, i: any) => {
                          return <p>-{civ.unique_tech[i].name}</p>;
                        })}
                        <br></br>

                        <h3>Unique Unit</h3>
                        {civ.unique_unit.map((bonus: any, i: any) => {
                          return <p>-{civ.unique_unit[i].name}</p>;
                        })}
                        <br></br>

                        <h3>Team Bonus</h3>
                        <p>-{civ.team_bonus}</p>
                      </IonCardContent>
                    </IonCard>

                    {/* <IonCard>
                      <IonItem key={civ.id}>
                        <IonAvatar>
                          <img src={civ.image}></img>
                        </IonAvatar>
                        <IonLabel>
                          <h1>{civ.name}</h1>
                          <h3>{civ.army_type}</h3>
                          {civ.civilization_bonus.map((bonus: any, i: any) => {
                            return <p>-{civ.civilization_bonus[i]}</p>;
                          })}
                          <h3>Team Bonus</h3>
                          <p>-{civ.team_bonus}</p>
                        </IonLabel>
                      </IonItem>
                    </IonCard> */}
                  </IonCol>
                );
              })}
            </IonRow>
          </IonList>
        </IonContent>
      );
    }
  }
}
