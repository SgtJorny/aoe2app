import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab2.css";
import BuildsContainer from "../components/BuildsContainer";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Builds</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Builds</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BuildsContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
