import React from "react";
import "./MoreContainer.css";
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
  IonIcon
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";

interface ContainerProps {
  name: string;
}

const MoreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonContent>
      <IonItem button onClick={() => {}}>
        <IonLabel>My Profile</IonLabel>
        <IonIcon icon={closeCircle} slot="end" />
      </IonItem>
      <IonItem button onClick={() => {}}>
        <IonLabel>Leaderboards</IonLabel>
        <IonIcon icon={closeCircle} slot="end" />
      </IonItem>
      <IonItem button onClick={() => {}}>
        <IonLabel>Units</IonLabel>
        <IonIcon icon={closeCircle} slot="end" />
      </IonItem>
      <IonItem button onClick={() => {}}>
        <IonLabel>Buildings</IonLabel>
        <IonIcon icon={closeCircle} slot="end" />
      </IonItem>
      <IonItem button onClick={() => {}}>
        <IonLabel>Settings</IonLabel>
        <IonIcon icon={closeCircle} slot="end" />
      </IonItem>
      <IonItem button onClick={() => {}}>
        <IonLabel>About</IonLabel>
        <IonIcon icon={closeCircle} slot="end" />
      </IonItem>
    </IonContent>
  );
};

export default MoreContainer;
