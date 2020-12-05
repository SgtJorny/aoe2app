import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  ellipse,
  square,
  triangle,
  barChartOutline,
  hammerOutline,
  manOutline,
  trophyOutline,
  peopleOutline,
  ellipseOutline,
  ellipseSharp,
  ellipsisHorizontalCircleOutline,
  ellipsisHorizontalOutline
} from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Tab4 from "./pages/Tab4";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/stats" component={Tab1} exact={true} />
          <Route path="/builds" component={Tab2} exact={true} />
          <Route path="/civilizations" component={Tab3} exact={true} />
          <Route path="/more" component={Tab4} exact={true} />
          <Route
            path="/"
            render={() => <Redirect to="/stats" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/stats">
            <IonIcon icon={trophyOutline} />
            <IonLabel>Stats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/builds">
            <IonIcon icon={barChartOutline} />
            <IonLabel>Builds</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/civilizations">
            <IonIcon icon={peopleOutline} />
            <IonLabel>Civilizations</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/more">
            <IonIcon icon={ellipsisHorizontalOutline} />
            <IonLabel>More</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
