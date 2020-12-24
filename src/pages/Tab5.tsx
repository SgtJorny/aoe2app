import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab5.css";
import MatchContainer from "../components/MatchContainer";

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Match</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">More</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MatchContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
