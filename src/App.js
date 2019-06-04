import React, { Component, Fragment } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import Logo from './components/Logo';
import Link from './components/Link';
import OneMethodHeader from './components/OneMethodHeader';
import TwoMethodHeader from './components/TwoMethodHeader';
import YourOdds from './components/YourOdds';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condomUsage: 85,
      condomFrequency: 0,
      pillUsage: 91,
      pillFrequency: 0,
      iudImplant: 0,
      ringUsage: 91,
      ringFrequency: 0,
      shotUsage: 94,
      shotFrequency: 0,
      pullOutUsage: 78,
      pullOutFrequency: 0,
      spermicideUsage: 72,
      spermicideFrequency: 0
    };
  }

  render() {
    return (
      <Fragment>
        <header className="content-wrapper">
          <Logo/>

          <br/>

          <p>
            <Link title="Planned Parenthood" link="https://www.plannedparenthood.org/learn/birth-control"/> is a great resource for learning about different types of contraceptives and how to 👏 have 👏 sex 👏 safely 👏.
          </p>

          <br/>

          <p>
            However, I'm a fan of the saying "two is one and one is none" and wanted an easy way to understand the combined effectiveness of multiple contraceptives in preventing pregnancy, so I built <strong><span className="color-light">Safe</span><span className="color-medium-light">Sex</span><span className="color-light">Stats</span></strong>.
          </p>

          <br/>

          <p>
            Please note that this website only helps better understand the effectiveness of different contraceptives at preventing pregnancy, but <strong>not</strong> at preventing the contraction of sexually transmitted diseases.
          </p>
        </header>

        <div className="content-wrapper">
          <h1 className="color-dark">Your Protection</h1>

          <div className="button-section" name="condoms">
            <OneMethodHeader
              title="condoms"
              link="https://www.plannedparenthood.org/learn/birth-control/condom"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="condom-frequency" defaultValue={0}
              onChange={(val) => this.setState({condomFrequency: val})}
              justified>
              <ToggleButton value={0}>Never</ToggleButton>
              <ToggleButton value={25}>1/4 of the Time</ToggleButton>
              <ToggleButton value={50}>Half of the Time</ToggleButton>
              <ToggleButton value={75}>3/4 of the Time</ToggleButton>
              <ToggleButton value={100}>Every time</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="condom-usage" defaultValue={85}
              onChange={(val) => this.setState({condomUsage: val})}
              justified>
              <ToggleButton value={85}>As well as anyone else</ToggleButton>
              <ToggleButton value={98}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <br/>

          <div className="button-section" name="pill">
            <OneMethodHeader
              title="the birth control pill"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-pill"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="pill-frequency" defaultValue={0}
              onChange={(val) => this.setState({pillFrequency: val})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="pill-usage" defaultValue={91}
              onChange={(val) => this.setState({pillUsage: val})}
              justified>
              <ToggleButton value={91}>As well as anyone else</ToggleButton>
              <ToggleButton value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="button-section" name="iud-implant">
            <TwoMethodHeader
              titleA="an IUD"
              linkA="https://www.plannedparenthood.org/learn/birth-control/iud"
              titleB="the birth control implant"
              linkB="https://www.plannedparenthood.org/learn/birth-control/birth-control-implant-implanon"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="iud-implant" defaultValue={0}
              onChange={(val) => this.setState({iudImplant: val})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={99}>Yay</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="button-section" name="ring">
            <OneMethodHeader
              title="the birth control ring"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-vaginal-ring-nuvaring"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="ring-frequency" defaultValue={0}
              onChange={(val) => this.setState({ringFrequency: val})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="ring-usage" defaultValue={91}
              onChange={(val) => this.setState({ringUsage: val})}
              justified>
              <ToggleButton value={91}>As well as anyone else</ToggleButton>
              <ToggleButton value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="button-section" name="shot">
            <OneMethodHeader
              title="the birth control shot"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-shot"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="shot-frequency" defaultValue={0}
              onChange={(val) => this.setState({shotFrequency: val})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="shot-usage" defaultValue={94}
              onChange={(val) => this.setState({shotUsage: val})}
              justified>
              <ToggleButton value={94}>As well as anyone else</ToggleButton>
              <ToggleButton value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <br/>

          <div className="button-section" name="pull-out">
            <OneMethodHeader
              title="the pull out method"
              link="https://www.plannedparenthood.org/learn/birth-control/withdrawal-pull-out-method"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="pull-out-frequency" defaultValue={0}
              onChange={(val) => this.setState({pullOutFrequency: val})}
              justified>
              <ToggleButton value={0}>Never</ToggleButton>
              <ToggleButton value={25}>1/4 of the Time</ToggleButton>
              <ToggleButton value={50}>Half of the Time</ToggleButton>
              <ToggleButton value={75}>3/4 of the Time</ToggleButton>
              <ToggleButton value={100}>Every time</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="pull-out-usage" defaultValue={78}
              onChange={(val) => this.setState({pullOutUsage: val})}
              justified>
              <ToggleButton value={78}>As well as anyone else</ToggleButton>
              <ToggleButton value={94}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <br/>

          <div className="button-section" name="spermicide">
            <OneMethodHeader
              title="spermicide"
              link="https://www.plannedparenthood.org/learn/birth-control/spermicide"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="spermicide-frequency" defaultValue={0}
              onChange={(val) => this.setState({spermicideFrequency: val})}
              justified>
              <ToggleButton value={0}>Never</ToggleButton>
              <ToggleButton value={25}>1/4 of the Time</ToggleButton>
              <ToggleButton value={50}>Half of the Time</ToggleButton>
              <ToggleButton value={75}>3/4 of the Time</ToggleButton>
              <ToggleButton value={100}>Every time</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="spermicide-usage" defaultValue={72}
              onChange={(val) => this.setState({spermicideUsage: val})}
              justified>
              <ToggleButton value={72}>As well as anyone else</ToggleButton>
              <ToggleButton value={82}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className="content-wrapper">
          <h1 className="color-dark">Your Odds</h1>
          <YourOdds
            condomUsage={ this.state.condomUsage }
            condomFrequency={ this.state.condomFrequency }
            pillUsage={ this.state.pillUsage }
            pillFrequency={ this.state.pillFrequency }
            iudImplant={ this.state.iudImplant }
            ringUsage={ this.state.ringUsage }
            ringFrequency={ this.state.ringFrequency }
            shotUsage={ this.state.shotUsage }
            shotFrequency={ this.state.shotFrequency }
            pullOutUsage={ this.state.pullOutUsage }
            pullOutFrequency={ this.state.pullOutFrequency }
            spermicideUsage={ this.state.spermicideUsage }
            spermicideFrequency={ this.state.spermicideFrequency }
          />
        </div>

        <div className="content-wrapper">
          <h1 className="color-dark">Want More?</h1>
          <p>
            For a better understanding of the statistics at work behind this calculator, check out this great <Link title="Scarleteen article" link="http://www.scarleteen.com/article/sexual_health/the_buddy_system_effectiveness_rates_for_backing_up_your_birth_control_with_a_"/> or this <Link title="Khan Academy lesson" link="https://www.khanacademy.org/math/ap-statistics/probability-ap/probability-multiplication-rule/v/compound-probability-of-independent-events"/> on compound probabilities.
          </p>
          <br/>
          <p>
            Do you use a <Link title="birth control method" link="https://www.plannedparenthood.org/learn/birth-control"/> that I haven't included here and would like to see it on the site? Hit me up on <Link title="Twitter" link="https://twitter.com/jakerockland"/> or open <Link title="an issue" link="https://github.com/jakerockland/safesexstats/issues"/> on Github.
          </p>
        </div>


        <footer className="content-wrapper">
          <p>
            Made by <Link link="https://jakerockland.com" title="Jake" /> with <span className="color-medium-dark">♥</span> in Denver.
          </p>
        </footer>

      </Fragment>
    );
  }
}


export default App;
