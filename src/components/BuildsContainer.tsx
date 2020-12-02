import React from "react";
import "./BuildsContainer.css";
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
  IonAvatar
} from "@ionic/react";

interface ContainerProps {
  name: string;
}

const BuildsContainer: React.FC<ContainerProps> = ({ name }) => {
  return <IonContent></IonContent>;
};

export default BuildsContainer;
