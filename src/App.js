import React, { Component, Fragment } from 'react';

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
      internalCondomUsage: 79,
      internalCondomFrequency: 0,
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
      spermicideFrequency: 0,
      famMethods: 0,
    };
  }

  updateStatistic = (value, event) => {
    let stat = event.target.name;

    let _state = {};
    _state[stat] = value;

    this.setState(_state);
  }

  render() {
    const variant = "outline-dark";

    return (
      <div className="px-5">

        <header className="content-wrapper p-5 mt-5 container-fluid">
          <Logo className="p-3" />

          <Row className="p-1">
            <p>
              <strong><span className="color-dark">Safe</span><span className="color-medium-light">Sex</span><span className="color-dark">Stats</span></strong> makes understanding contraceptive effectiveness easy, by allowing you to understand the combined probabilities of different contraceptive methods, without needing to dive into the math.
            </p>
          </Row>

          <Row className="p-1">
            <p>
              Want to know what your odds of <Link title="pregnancy" link="https://www.plannedparenthood.org/learn/pregnancy/how-pregnancy-happens" /> are? How about of catching a <Link title="sexually transmitted disease" link="https://www.plannedparenthood.org/learn/stds-hiv-safer-sex" />? Answer the few questions below to find out!
            </p>
          </Row>
        </header>

        <Container className="content-wrapper">
          <Row className="pb-2">
            <h1 className="color-dark">Your Protection</h1>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="condoms">

              <OneMethodHeader
                title="condoms"
                link="https://www.plannedparenthood.org/learn/birth-control/condom"
              />

              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="condomFrequency" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton variant={variant} size="lg" value={0}>
                  Never
                </ToggleButton>
                <ToggleButton variant={variant} size="lg" value={25}>1/4 of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={50}>Half of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={75}>3/4 of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={100}>Every time</ToggleButton>
              </ToggleButtonGroup>

              { (this.state.condomFrequency === 0) ? <Fragment/>
                : <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="condomUsage" defaultValue={85}
                onChange={this.updateStatistic}>
                <ToggleButton variant={variant} size="lg" value={85}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={98}>Perfectly</ToggleButton>
              </ToggleButtonGroup> }
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="internal-condoms">

              <OneMethodHeader
                title="internal condoms (AKA female condoms)"
                link="https://www.plannedparenthood.org/learn/birth-control/internal-condom"
              />

              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="internalCondomFrequency" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton variant={variant} size="lg" value={0}>
                  Never
                </ToggleButton>
                <ToggleButton variant={variant} size="lg" value={25}>1/4 of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={50}>Half of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={75}>3/4 of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={100}>Every time</ToggleButton>
              </ToggleButtonGroup>

              { (this.state.condomFrequency === 0) ? <Fragment/>
                : <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="internalCondomUsage" defaultValue={79}
                onChange={this.updateStatistic}>
                <ToggleButton variant={variant} size="lg" value={79}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={95}>Perfectly</ToggleButton>
              </ToggleButtonGroup> }
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="pill">

              <OneMethodHeader
                title="the birth control pill"
                link="https://www.plannedparenthood.org/learn/birth-control/birth-control-pill"
              />

              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="pillFrequency" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
              </ToggleButtonGroup>

              { (this.state.pillFrequency === 0) ? <Fragment/>
                : <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="pillUsage" defaultValue={91}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={91}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
              </ToggleButtonGroup> }
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="iud-implant">
              <TwoMethodHeader
                titleA="an IUD"
                linkA="https://www.plannedparenthood.org/learn/birth-control/iud"
                titleB="the birth control implant"
                linkB="https://www.plannedparenthood.org/learn/birth-control/birth-control-implant-implanon"
              />
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="iudImplant" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={99}>Yay</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="ring">
              <OneMethodHeader
                title="the birth control ring"
                link="https://www.plannedparenthood.org/learn/birth-control/birth-control-vaginal-ring-nuvaring"
              />
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="ringFrequency" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
              </ToggleButtonGroup>

              { (this.state.ringFrequency === 0) ? <Fragment/>
                : <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="ringUsage" defaultValue={91}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={91}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
              </ToggleButtonGroup> }
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="shot">
              <OneMethodHeader
                title="the birth control shot"
                link="https://www.plannedparenthood.org/learn/birth-control/birth-control-shot"
              />
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="shotFrequency" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
              </ToggleButtonGroup>

              { (this.state.shotFrequency === 0) ? <Fragment/>
                : <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="shotUsage" defaultValue={94}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={94}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
              </ToggleButtonGroup> }
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="pull-out">
              <OneMethodHeader
                title="the pull out method"
                link="https://www.plannedparenthood.org/learn/birth-control/withdrawal-pull-out-method"
              />
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="pullOutFrequency" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={0}>Never</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={25}>1/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={50}>Half of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={75}>3/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Every time</ToggleButton>
              </ToggleButtonGroup>

              { (this.state.pullOutFrequency === 0) ? <Fragment/>
                : <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="pullOutUsage" defaultValue={78}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={78}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={94}>Perfectly</ToggleButton>
              </ToggleButtonGroup> }
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="spermicide">
              <OneMethodHeader
                title="spermicide"
                link="https://www.plannedparenthood.org/learn/birth-control/spermicide"
              />
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="spermicideFrequency" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={0}>Never</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={25}>1/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={50}>Half of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={75}>3/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Every time</ToggleButton>
              </ToggleButtonGroup>

              { (this.state.spermicideFrequency === 0) ? <Fragment/>
                : <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="spermicideUsage" defaultValue={72}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={72}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={82}>Perfectly</ToggleButton>
              </ToggleButtonGroup> }
            </div>
          </Row>

          <Row className="p-3" style={{width: "100%"}}>
            <div className="button-section" style={{width: "100%"}} name="fam-methods">
              <OneMethodHeader
                title="fertility awareness methods (FAMs)"
                link="https://www.plannedparenthood.org/learn/birth-control/fertility-awareness"
              />
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="famMethods" defaultValue={0}
                onChange={this.updateStatistic}>
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={76}>Yay</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Row>

        </Container>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="color-dark">Your Odds</h1>
          </Row>

          <YourOdds
            condomUsage={ this.state.condomUsage }
            condomFrequency={ this.state.condomFrequency }
            internalCondomUsage={ this.state.internalCondomUsage }
            internalCondomFrequency={ this.state.internalCondomFrequency }
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
            famMethods={ this.state.famMethods }
          />
        </div>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="color-dark">Why <strong><span className="color-dark">Safe</span><span className="color-medium-light">Sex</span><span className="color-dark">Stats</span></strong>?</h1>
          </Row>

          <Row className="p-1">
            <p>
              <Link title="Planned Parenthood" link="https://www.plannedparenthood.org/learn/birth-control"/> is a great resource for learning about different types of contraceptives and how to 👏 have 👏 sex 👏 safely 👏.
            </p>
          </Row>

          <Row className="p-1">
            <p>
              However, I'm a fan of the saying "two is one and one is none" and wanted an easy way to understand the combined effectiveness of multiple contraceptives in preventing unwanted pregnancy and sexually transmitted diseases, so I built <strong><span className="color-dark">Safe</span><span className="color-medium-light">Sex</span><span className="color-dark">Stats</span></strong>.
            </p>
          </Row>
        </div>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="color-dark">Want More?</h1>
          </Row>

          <Row className="p-1">
            <p>
              For a better understanding of the statistics at work behind this calculator, check out this great <Link title="Scarleteen article" link="https://www.scarleteen.com/article/sexual_health/the_buddy_system_effectiveness_rates_for_backing_up_your_birth_control_with_a_"/> or this <Link title="Khan Academy lesson" link="https://www.khanacademy.org/math/ap-statistics/probability-ap/probability-multiplication-rule/v/compound-probability-of-independent-events"/> on compound probabilities.
            </p>
          </Row>

          <Row className="p-1">
            <p>
              Do you use a <Link title="birth control method" link="https://www.plannedparenthood.org/learn/birth-control"/> that I haven't included here and would like to see it on the site? Hit me up on <Link title="Twitter" link="https://twitter.com/jakerockland"/> or open <Link title="an issue" link="https://github.com/jakerockland/safesexstats/issues"/> on Github.
            </p>
          </Row>
        </div>


        <footer className="content-wrapper p-5 container-fluid">
          <Row className="p-1">
            <p>
              Made by <Link link="https://jakerockland.com" title="me" /> with <span className="color-medium-dark">♥</span> in Denver.
            </p>
          </Row>
        </footer>

      </div>
    );
  }
}


export default App;
