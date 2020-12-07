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
  IonCard
} from "@ionic/react";
import axios from "axios";

// https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations

export default class CivContainer extends React.Component {
  state = {
    civilizations: []
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`
      )
      .then(res => {
        const civilizations = res.data.civilizations;
        this.setState({ civilizations });
        console.log(civilizations);
      });
  }

  render() {
    if (this.state.civilizations) {
      return (
        <IonContent>
          {/*-- List of Text Items --*/}
          <IonSearchbar></IonSearchbar>
          <IonContent>
            {/*-- List of Text Items --*/}
            <IonList lines="none">
              <IonRow>
                {this.state.civilizations.map((civ: any) => {
                  return (
                    <IonCol size="12" class="ion-text-center">
                      <IonCard>
                        <IonItem key={civ.id}>
                          {/* <IonAvatar>
                          <img src={civ.image}></img>
                        </IonAvatar> */}
                          <IonLabel>
                            <h1>{civ.name}</h1>
                            <h3>{civ.army_type}</h3>
                            {civ.civilization_bonus.map(
                              (bonus: any, i: any) => {
                                return <p>-{civ.civilization_bonus[i]}</p>;
                              }
                            )}
                            <h3>Team Bonus</h3>
                            <p>-{civ.team_bonus}</p>
                          </IonLabel>
                        </IonItem>
                      </IonCard>
                    </IonCol>
                  );
                })}
              </IonRow>
            </IonList>
          </IonContent>
        </IonContent>
      );
    }
  }
}
