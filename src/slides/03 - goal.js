import React from "react";
import { Code, Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import { animateSwitch } from "../misc/routerComponents";
import SlideOut from "../misc/SlideOut";
import CustomSlide from "../misc/CustomSlide";
import FakeBrowser from "../misc/FakeBrowser";
import { ABox, BBox, CBox } from "../misc/Boxes";
import styles from "./common.scss";

const SliderSwitch = animateSwitch(Switch, SlideOut);

const baseCode = `
  <Route path="/box/a" component=\{ABox\} />
  <Route path="/box/b" component=\{BBox\} />
  <Route path="/box/c" component=\{CBox\} />
`;

const animatedCode = `<SwitchWithSlide>${baseCode}</SwitchWithSlide>`;
const staticCode = `<Switch>${baseCode}</Switch>`;

export default class GoalSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: false
    };
  }

  render() {
    const browserRoutes = [
      <Route key="0" path="/(.*)/0" component={ABox} />,
      <Route key="1" path="/(.*)/1" component={BBox} />,
      <Route key="2" path="/(.*)/2" component={CBox} />
    ];

    return (
      <CustomSlide>
        <h1>End goal</h1>
        <div className={styles.sidebyside}>
          <div>
            <Code
              key={this.state.animated}
              value={this.state.animated ? animatedCode : staticCode}
              options={{ mode: "javascript" }}
            />
            <label>
              <input
                type="checkbox"
                checked={this.state.animated}
                onChange={() =>
                  this.setState(prevState => ({
                    animated: !prevState.animated
                  }))
                }
              />
              Animating
            </label>
          </div>

          <Step index={0} maxIndex={2}>
            {""}
          </Step>
          <FakeBrowser
            urlMap={{
              "#/2/0": "https://mysite.com/box/a",
              "#/2/1": "https://mysite.com/box/b",
              "#/2/2": "https://mysite.com/box/c"
            }}
          >
            {this.state.animated ? (
              <SliderSwitch
                uniqKey={location}
                order={(a, b) => a.localeCompare(b)}
              >
                {browserRoutes}
              </SliderSwitch>
            ) : (
              <Switch>{browserRoutes}</Switch>
            )}
          </FakeBrowser>
        </div>
      </CustomSlide>
    );
  }
}
