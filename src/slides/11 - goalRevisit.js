import React from "react";
import { Code, Step } from "react-presents";
import { Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { animateSwitch } from "../misc/routerComponents";
import SlideOut from "../misc/SlideOut";
import CustomSlide from "../misc/CustomSlide";
import FakeBrowser from "../misc/FakeBrowser";
import { ABox, BBox, CBox } from "../misc/Boxes";
import Checkbox from "../misc/Checkbox";
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
    const browserRoutes = base => [
      <Route key="0" path={`/(.*)/${base + 0}`} component={ABox} />,
      <Route key="1" path={`/(.*)/${base + 1}`} component={BBox} />,
      <Route key="2" path={`/(.*)/${base + 2}`} component={CBox} />
    ];

    return (
      <CustomSlide>
        <h1>End goal</h1>
        <Step index={0} maxIndex={5}>
          {""}
        </Step>

        <div className={classNames(styles.centerWithHeader, styles.sidebyside)}>
          <Route
            path="(.*)/:n"
            render={({ match }) => (
              <div>
                <Code
                  key={match.params.n > 2}
                  value={match.params.n > 2 ? animatedCode : staticCode}
                  options={{ mode: "javascript" }}
                />
                <label className={styles.checkboxLabel}>
                  <Checkbox checked={match.params.n > 2} />
                  <span>Animating</span>
                </label>
              </div>
            )}
          />

          <FakeBrowser
            urlMap={{
              "#/10/0": "https://mysite.com/box/a",
              "#/10/1": "https://mysite.com/box/b",
              "#/10/2": "https://mysite.com/box/c",
              "#/10/3": "https://mysite.com/box/a",
              "#/10/4": "https://mysite.com/box/b",
              "#/10/5": "https://mysite.com/box/c"
            }}
          >
            <Switch>
              {browserRoutes(0)}
              <SliderSwitch order={(a, b) => a.localeCompare(b)}>
                {browserRoutes(3)}
              </SliderSwitch>
            </Switch>
          </FakeBrowser>
        </div>
      </CustomSlide>
    );
  }
}
