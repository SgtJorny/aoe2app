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
  IonCol
} from "@ionic/react";

interface ContainerProps {
  name: string;
}

var civilizations = [
  {
    name: "Britons",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Byzantines",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  },
  {
    name: "Berbers",
    image:
      "https://static.ageofempires.com/aoe/wp-content/uploads/2020/05/avatar_mayhem_lahire_ketchup.png"
  }
];

const CivContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonContent>
      {/*-- List of Text Items --*/}
      <IonSearchbar></IonSearchbar>
      <IonContent>
        {/*-- List of Text Items --*/}
        <IonList lines="none">
          <IonRow>
            {civilizations.map(civ => {
              return (
                <IonCol size="6" class="ion-text-center">
                  <IonItem>
                    <IonAvatar>
                      <img src={civ.image}></img>
                    </IonAvatar>
                    <IonLabel>{civ.name}</IonLabel>
                  </IonItem>
                </IonCol>
              );
            })}
          </IonRow>
        </IonList>
      </IonContent>
    </IonContent>
  );
};

export default CivContainer;
