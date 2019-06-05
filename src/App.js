import React, { Component } from 'react';

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
    const variant = "outline-dark";

    return (
      <div className="px-5">

        <header className="content-wrapper p-5 container-fluid">
          <Logo className="p-3" />

          <Row className="p-1">
            <p>
              <Link title="Planned Parenthood" link="https://www.plannedparenthood.org/learn/birth-control"/> is a great resource for learning about different types of contraceptives and how to 👏 have 👏 sex 👏 safely 👏.
            </p>
          </Row>

          <Row className="p-1">
            <p>
              However, I'm a fan of the saying "two is one and one is none" and wanted an easy way to understand the combined effectiveness of multiple contraceptives in preventing pregnancy, so I built <strong><span className="color-dark">Safe</span><span className="color-medium-light">Sex</span><span className="color-dark">Stats</span></strong>.
            </p>
          </Row>

          <Row className="p-1">
            <p>
              Please note that this website only helps better understand the effectiveness of different contraceptives at preventing pregnancy, but <strong>not</strong> at preventing the contraction of sexually transmitted diseases.
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
                name="condom-frequency" defaultValue={0}
                onChange={(val) => this.setState({condomFrequency: val})}>
                <ToggleButton variant={variant} size="lg" value={0}>
                  Never
                </ToggleButton>
                <ToggleButton variant={variant} size="lg" value={25}>1/4 of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={50}>Half of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={75}>3/4 of the time</ToggleButton>
                <ToggleButton variant={variant} size="lg" value={100}>Every time</ToggleButton>
              </ToggleButtonGroup>

              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="condom-usage" defaultValue={85}
                onChange={(val) => this.setState({condomUsage: val})}>
                <ToggleButton variant={variant} size="lg" value={85}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={98}>Perfectly</ToggleButton>
              </ToggleButtonGroup>
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
                name="pill-frequency" defaultValue={0}
                onChange={(val) => this.setState({pillFrequency: val})}>
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
              </ToggleButtonGroup>

              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="pill-usage" defaultValue={91}
                onChange={(val) => this.setState({pillUsage: val})}>
                <ToggleButton  variant={variant} size="lg" value={91}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
              </ToggleButtonGroup>
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
                name="iud-implant" defaultValue={0}
                onChange={(val) => this.setState({iudImplant: val})}
                >
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
                name="ring-frequency" defaultValue={0}
                onChange={(val) => this.setState({ringFrequency: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="ring-usage" defaultValue={91}
                onChange={(val) => this.setState({ringUsage: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={91}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
              </ToggleButtonGroup>
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
                name="shot-frequency" defaultValue={0}
                onChange={(val) => this.setState({shotFrequency: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="shot-usage" defaultValue={94}
                onChange={(val) => this.setState({shotUsage: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={94}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
              </ToggleButtonGroup>
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
                name="pull-out-frequency" defaultValue={0}
                onChange={(val) => this.setState({pullOutFrequency: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={0}>Never</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={25}>1/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={50}>Half of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={75}>3/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Every time</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="pull-out-usage" defaultValue={78}
                onChange={(val) => this.setState({pullOutUsage: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={78}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={94}>Perfectly</ToggleButton>
              </ToggleButtonGroup>
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
                name="spermicide-frequency" defaultValue={0}
                onChange={(val) => this.setState({spermicideFrequency: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={0}>Never</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={25}>1/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={50}>Half of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={75}>3/4 of the time</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={100}>Every time</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                type="radio" as={Row} className="py-1" style={{width: "100%"}}
                name="spermicide-usage" defaultValue={72}
                onChange={(val) => this.setState({spermicideUsage: val})}
                >
                <ToggleButton  variant={variant} size="lg" value={72}>As well as anyone else</ToggleButton>
                <ToggleButton  variant={variant} size="lg" value={82}>Perfectly</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Row>

        </Container>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="color-dark">Your Odds</h1>
          </Row>

          <Row className="p-1">
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
          </Row>
        </div>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="color-dark">Want More?</h1>
          </Row>

          <Row className="p-1">
            <p>
              For a better understanding of the statistics at work behind this calculator, check out this great <Link title="Scarleteen article" link="http://www.scarleteen.com/article/sexual_health/the_buddy_system_effectiveness_rates_for_backing_up_your_birth_control_with_a_"/> or this <Link title="Khan Academy lesson" link="https://www.khanacademy.org/math/ap-statistics/probability-ap/probability-multiplication-rule/v/compound-probability-of-independent-events"/> on compound probabilities.
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
