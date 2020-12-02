import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab3.css";
import CivContainer from "../components/CivContainer";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Civilizations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Civilizations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CivContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
