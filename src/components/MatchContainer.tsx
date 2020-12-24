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
  IonSearchbar,
  IonAvatar,
  IonTitle,
  IonRow,
  IonCard
} from "@ionic/react";
import axios from "axios";
import * as _ from "lodash";

interface ContainerProps {
  name: string;
}

// https://aoe2.net/api/player/lastmatch?game=aoe2de&steam_id=76561198065536762
// Carl Steam ID: 76561198065536762


function ResultBanner(props: any) {
  if (props.results.length == 0) {
    return null;
  }

  if (props.results.length == 1) {
    return <IonLabel>{props.results.length} result.</IonLabel>;
  } else {
    return <IonLabel>{props.results.length} results.</IonLabel>;
  }
}

export default class StatsContainer extends React.Component {
  state = {
    leaderboards: [],
    loading: false,
    results: []
  };

  componentDidMount() {
    axios.get(`https://aoe2.net/api/leaderboard`).then(res => {
      const leaderboards = res.data.leaderboard;
      this.setState({ leaderboards });
      console.log(leaderboards);
    });
  }

  onChangeHandler(e: any) {
    this.search(e.target.value);
    // this.setState({ value: e.target.value });
  }

  search(val: any) {
    axios
      .get(
        `https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=4&search=` +
          val
      )
      .then(res => {
        const results = res.data.leaderboard;
        this.setState({ results });
        console.log(res.data);
      });
  }

  render() {
    if (this.state.leaderboards) {
      return (
        <IonContent>
          {/*-- List of Text Items --*/}
          <IonSearchbar
            onIonChange={_.debounce(e => this.onChangeHandler(e), 1500)}
            placeholder="Search player name..."
          ></IonSearchbar>
          {/* <IonLabel>{this.state.results.length} result(s).</IonLabel> */}
          <ResultBanner results={this.state.results}></ResultBanner>
          {this.state.results.map((result: any) => {
            return (
              <span>
                <IonList>
                  <IonItem key={result.profile_id}>
                    #{result.rank} - {result.name} - {result.rating} -{" "}
                    {Number((result.wins / result.games) * 100).toFixed(0)}%
                  </IonItem>
                </IonList>
              </span>
            );
          })}
          <h1>Random Map</h1>
          <IonList lines="none">
            <IonCard>
              {this.state.leaderboards.map((leader: any) => {
                return (
                  <IonItem
                    key={leader.profile_id}
                    href="/stats"
                    className={`${
                      Number(leader.rank) % 2 ? "ion-activated" : ""
                    }`}
                  >
                    {/* <IonAvatar>
                      <img src={leader.country}></img>
                    </IonAvatar> */}
                    <IonLabel>
                      {leader.rank} - {leader.name} - {leader.rating} -{" "}
                      {Number((leader.wins / leader.games) * 100).toFixed(0)}%
                      W/L
                    </IonLabel>
                  </IonItem>
                );
              })}
            </IonCard>
          </IonList>
        </IonContent>
      );
    }
  }
}
