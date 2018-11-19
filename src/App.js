import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import './App.css';


function AppLink(props) {
  return (
    <a
      className="App-link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </a>
  );
}


function OneMethodHeader(props) {
  return (
    <h2>My partner and I use {AppLink(props)}...</h2>
  )
}


function TwoMethodHeader(props) {
  const propsA = {
    title: props.titleA,
    link: props.linkA
  };

  const propsB = {
    title: props.titleB,
    link: props.linkB
  };

  return (
    <h2>My partner and I use {AppLink(propsA)} or {AppLink(propsB)}...</h2>
  )
}


function setOddsState(state) {
  this.setState(state);
}


class YourOdds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condomUsage: this.props.condomUsage,
      condomFrequency: this.props.condomFrequency,
      pillUsage: this.props.pillUsage,
      pillFrequency: this.props.pillFrequency,
      iudImplant: this.props.iudImplant,
      ringUsage: this.props.ringUsage,
      ringFrequency: this.props.ringFrequency,
      shotUsage: this.props.shotUsage,
      shotFrequency: this.props.shotFrequency,
      pullOutUsage: this.props.pullOutUsage,
      pullOutFrequency: this.props.pullOutFrequency,
      spermicideUsage: this.props.spermicideUsage,
      spermicideFrequency: this.props.spermicideFrequency
    }

    // TODO: Assigning a function here is bad practice
    // TODO: However, I believe resolving will require a handful of refactoring
    // eslint-disable-next-line
    setOddsState = setOddsState.bind(this);
  }

  render() {
    const condom = (this.state.condomUsage / 100) * (this.state.condomFrequency  / 100);
    const pill = (this.state.pillUsage / 100) * (this.state.pillFrequency / 100);
    const iudImplant = this.state.iudImplant / 100;
    const ring = (this.state.ringUsage / 100) * (this.state.ringFrequency / 100);
    const shot = (this.state.shotUsage / 100) * (this.state.shotFrequency / 100);
    const pullOut = (this.state.pullOutUsage / 100) * (this.state.pullOutFrequency / 100);
    const spermicide = (this.state.spermicideUsage / 100) * (this.state.spermicideFrequency / 100);

    const methods = [
      condom,
      pill,
      iudImplant,
      ring,
      shot,
      pullOut,
      spermicide
    ];

    const nonEffectiveProbabilities = methods.map(x => 1 - x);
    const reducedProbability = nonEffectiveProbabilities.reduce((x,y) => x * y);
    const effectiveOdds = (1 - reducedProbability) * 100;

    const percentOdds = effectiveOdds.toFixed(1);
    const numberedOdds = Math.round(1 / ((100 - effectiveOdds) / 100) - 1);

    if (numberedOdds === 0) {
      if (percentOdds === "0.0") {
        return (
          <h2><span className="color-medium-dark">Uh oh.</span> You're not protected at all, hopefully that is on purpose!</h2>
        )
      }

      return (
        <span>
          <h2><span className="color-medium-dark">Uh oh.</span> You're barely protected at all (only <span className="color-medium-dark">{percentOdds}%</span>).</h2>
          <h2>hopefully that is on purpose!</h2>
        </span>
      )
    }

    return (
      <span>
        <h2>Your contraceptive use should be about <span className="color-medium-dark">{percentOdds}%</span> effective!</h2>
        <h2>That means your chances of getting pregnant are roughly <span className="color-medium-dark">1 in {numberedOdds}</span>.</h2>
      </span>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">
            <span className="color-light">Safe</span><span className="color-medium-light">Sex</span><span className="color-light">Stats</span>
          </h1>
          <br/>
          <p>
            <AppLink title="Planned Parenthood" link="https://www.plannedparenthood.org/learn/birth-control"/> is a great resource for learning about different types of contraceptives and how to 👏 have 👏 sex 👏 safely 👏. However, as a fan of the Navy SEAL saying "two is one and one is none", I wanted an easy way to understand the combined effectiveness of multiple contraceptives in preventing pregnancy, so I built <strong><span className="color-light">Safe</span><span className="color-medium-light">Sex</span><span className="color-light">Stats</span></strong>.
          </p>
          <br/>
          <p>
            Please note that this website only helps better understand the effectiveness of different contraceptives at preventing pregnancy, but <em>not</em> at preventing the contraction of sexually transmitted diseases.
          </p>
        </header>

        <div className="App-content">
          <h1 className="color-dark">Your Protection</h1>

          <div className="App-input-section" name="condoms">
            <OneMethodHeader
              title="condoms"
              link="https://www.plannedparenthood.org/learn/birth-control/condom"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="condom-frequency" defaultValue={0}
              onChange={(e) => setOddsState({condomFrequency: e})}
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
              onChange={(e) => setOddsState({condomUsage: e})}
              justified>
              <ToggleButton value={85}>As well as anyone else</ToggleButton>
              <ToggleButton value={98}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <br/>

          <div className="App-input-section" name="pill">
            <OneMethodHeader
              title="the birth control pill"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-pill"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="pill-frequency" defaultValue={0}
              onChange={(e) => setOddsState({pillFrequency: e})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="pill-usage" defaultValue={91}
              onChange={(e) => setOddsState({pillUsage: e})}
              justified>
              <ToggleButton value={91}>As well as anyone else</ToggleButton>
              <ToggleButton value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="App-input-section" name="iud-implant">
            <TwoMethodHeader
              titleA="an IUD"
              linkA="https://www.plannedparenthood.org/learn/birth-control/iud"
              titleB="the birth control implant"
              linkB="https://www.plannedparenthood.org/learn/birth-control/birth-control-implant-implanon"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="iud-implant" defaultValue={0}
              onChange={(e) => setOddsState({iudImplant: e})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={99}>Yay</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="App-input-section" name="ring">
            <OneMethodHeader
              title="the birth control ring"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-vaginal-ring-nuvaring"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="ring-frequency" defaultValue={0}
              onChange={(e) => setOddsState({ringFrequency: e})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="ring-usage" defaultValue={91}
              onChange={(e) => setOddsState({ringUsage: e})}
              justified>
              <ToggleButton value={91}>As well as anyone else</ToggleButton>
              <ToggleButton value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="App-input-section" name="shot">
            <OneMethodHeader
              title="the birth control shot"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-shot"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="shot-frequency" defaultValue={0}
              onChange={(e) => setOddsState({shotFrequency: e})}
              justified>
              <ToggleButton value={0}>Nay</ToggleButton>
              <ToggleButton value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="shot-usage" defaultValue={94}
              onChange={(e) => setOddsState({shotUsage: e})}
              justified>
              <ToggleButton value={94}>As well as anyone else</ToggleButton>
              <ToggleButton value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <br/>

          <div className="App-input-section" name="pull-out">
            <OneMethodHeader
              title="the pull out method"
              link="https://www.plannedparenthood.org/learn/birth-control/withdrawal-pull-out-method"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="pull-out-frequency" defaultValue={0}
              onChange={(e) => setOddsState({pullOutFrequency: e})}
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
              onChange={(e) => setOddsState({pullOutUsage: e})}
              justified>
              <ToggleButton value={78}>As well as anyone else</ToggleButton>
              <ToggleButton value={94}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <br/>

          <div className="App-input-section" name="spermicide">
            <OneMethodHeader
              title="spermicide"
              link="https://www.plannedparenthood.org/learn/birth-control/spermicide"
            />
            <ToggleButtonGroup
              type="radio" bsSize="large"
              name="spermicide-frequency" defaultValue={0}
              onChange={(e) => setOddsState({spermicideFrequency: e})}
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
              onChange={(e) => setOddsState({spermicideUsage: e})}
              justified>
              <ToggleButton value={72}>As well as anyone else</ToggleButton>
              <ToggleButton value={82}>Perfectly</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className="App-content">
          <h1 className="color-dark">Your Odds</h1>
          <YourOdds
            condomUsage={85}
            condomFrequency={0}
            pillUsage={91}
            pillFrequency={0}
            iudImplant={0}
            ringUsage={91}
            ringFrequency={0}
            shotUsage={94}
            shotFrequency={0}
            pullOutUsage={78}
            pullOutFrequency={0}
            spermicideUsage={72}
            spermicideFrequency={0}
          />
        </div>

        <div className="App-content">
          <h1 className="color-dark">Want More?</h1>
          <p>
            For a better understanding of the statistics at work behind this calculator, check out this great <AppLink title="Scarleteen article" link="http://www.scarleteen.com/article/sexual_health/the_buddy_system_effectiveness_rates_for_backing_up_your_birth_control_with_a_"/> or this <AppLink title="Khan Academy lesson" link="https://www.khanacademy.org/math/ap-statistics/probability-ap/probability-multiplication-rule/v/compound-probability-of-independent-events"/> on compound probabilities.
          </p>
          <br/>
          <p>
            Do you use a <AppLink title="birth control method" link="https://www.plannedparenthood.org/learn/birth-control"/> that I haven't included here and would like to see it on the site? Shoot me <AppLink title="an email" link="mailto:hello@safesexstats.com"/> or open <AppLink title="an issue" link="https://github.com/jakerockland/safesexstats/issues"/> on Github.
          </p>
        </div>

        <footer className="App-footer">
          <p>
            Made with <span className="color-medium-dark">♥</span> in Denver.
          </p>
        </footer>
      </div>
    );
  }
}


export default App;
