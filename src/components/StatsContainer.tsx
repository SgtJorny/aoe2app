import React from "react";
import "./StatsContainer.css";
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
  IonSearchbar
} from "@ionic/react";

interface ContainerProps {
  name: string;
}

const StatsContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonContent>
      {/*-- List of Text Items --*/}
      <IonSearchbar placeholder="Search player name, steam id..."></IonSearchbar>
    </IonContent>
  );
};

export default StatsContainer;
