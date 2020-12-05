import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab4.css";
import MoreContainer from "../components/MoreContainer";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>More</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">More</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MoreContainer name="Tab 4 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
