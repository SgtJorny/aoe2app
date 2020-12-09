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

// var leaderboards = [
//   {
//     profile_id: 196240,
//     rank: 1,
//     rating: 2481,
//     steam_id: "76561197984749679",
//     icon: null,
//     name: "GL.TheViper",
//     clan: null,
//     country: "NO",
//     previous_rating: 2492,
//     highest_rating: 2509,
//     streak: -1,
//     lowest_streak: -5,
//     highest_streak: 22,
//     games: 728,
//     wins: 500,
//     losses: 228,
//     drops: 2,
//     last_match: 1607018003,
//     last_match_time: 1607018003
//   },
//   {
//     profile_id: 208393,
//     rank: 2,
//     rating: 2456,
//     steam_id: "76561198027378107",
//     icon: null,
//     name: "Nicov",
//     clan: null,
//     country: "AR",
//     previous_rating: 2449,
//     highest_rating: 2456,
//     streak: 2,
//     lowest_streak: -4,
//     highest_streak: 22,
//     games: 817,
//     wins: 607,
//     losses: 210,
//     drops: 7,
//     last_match: 1607086549,
//     last_match_time: 1607086549
//   },
//   {
//     profile_id: 251265,
//     rank: 3,
//     rating: 2450,
//     steam_id: "76561197996386232",
//     icon: null,
//     name: "MbL40C",
//     clan: null,
//     country: "NO",
//     previous_rating: 2447,
//     highest_rating: 2465,
//     streak: 13,
//     lowest_streak: -9,
//     highest_streak: 22,
//     games: 2108,
//     wins: 1483,
//     losses: 625,
//     drops: 84,
//     last_match: 1606863557,
//     last_match_time: 1606863557
//   },
//   {
//     profile_id: 199325,
//     rank: 4,
//     rating: 2450,
//     steam_id: "76561198449406083",
//     icon: null,
//     name: "[Tempo] Hera",
//     clan: "Nubs5",
//     country: "CA",
//     previous_rating: 2458,
//     highest_rating: 2494,
//     streak: -1,
//     lowest_streak: -6,
//     highest_streak: 21,
//     games: 1882,
//     wins: 1280,
//     losses: 602,
//     drops: 12,
//     last_match: 1606948518,
//     last_match_time: 1606948518
//   },
//   {
//     profile_id: 208611,
//     rank: 5,
//     rating: 2430,
//     steam_id: "76561198325239137",
//     icon: null,
//     name: "Villese",
//     clan: null,
//     country: "FI",
//     previous_rating: 2427,
//     highest_rating: 2468,
//     streak: 1,
//     lowest_streak: -6,
//     highest_streak: 14,
//     games: 902,
//     wins: 566,
//     losses: 336,
//     drops: 2,
//     last_match: 1607088085,
//     last_match_time: 1607088085
//   }
// ];

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
