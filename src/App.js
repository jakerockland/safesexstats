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
      <div className="px-2 px-md-5">

        <header className="content-wrapper p-5 mt-5 container-fluid">
          <Logo className="p-3" />

          <div className="section-card">
            <p>
              <strong><span className="color-dark">Safe</span><span className="color-medium-light">Sex</span><span className="color-dark">Stats</span></strong> makes understanding contraceptive effectiveness easy, by allowing you to understand the combined probabilities of different contraceptive methods, without needing to dive into the math.
            </p>

            <p>
              Want to know what your odds of <Link title="pregnancy" link="https://www.plannedparenthood.org/learn/pregnancy/how-pregnancy-happens" /> are? How about of catching a <Link title="sexually transmitted disease" link="https://www.plannedparenthood.org/learn/stds-hiv-safer-sex" />? Answer the few questions below to find out!
            </p>

            <p>
              Note: we ask if you use some methods "perfectly" vs. "as well as anyone else". This is because often people do not adhere perfectly to a given birth control method (for example, you may forget to take the pill every once and a while).
            </p>
            <p>
              From <Link title="Planned Parenthood" link="https://www.plannedparenthood.org/learn/birth-control/birth-control-pill"/>: "If you use it perfectly, the pill is 99% effective. But people aren't perfect and it's easy to forget or miss pills — so in reality the pill is about 91% effective. That means about 9 out of 100 pill users get pregnant each year.".
            </p>
          </div>
        </header>

        <Container className="content-wrapper">
          <Row className="pb-2">
            <h1 className="section-heading">Your Protection</h1>
          </Row>

          <div className="section-card" name="condoms">
            <OneMethodHeader
              title="condoms"
              link="https://www.plannedparenthood.org/learn/birth-control/condom"
            />

            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
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
              type="radio" as={Row} className="py-1"
              name="condomUsage" defaultValue={85}
              onChange={this.updateStatistic}>
              <ToggleButton variant={variant} size="lg" value={85}>As well as anyone else</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={98}>Perfectly</ToggleButton>
            </ToggleButtonGroup> }
          </div>

          <div className="section-card" name="internal-condoms">
            <OneMethodHeader
              title="internal condoms (AKA female condoms)"
              link="https://www.plannedparenthood.org/learn/birth-control/internal-condom"
            />

            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
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
              type="radio" as={Row} className="py-1"
              name="internalCondomUsage" defaultValue={79}
              onChange={this.updateStatistic}>
              <ToggleButton variant={variant} size="lg" value={79}>As well as anyone else</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={95}>Perfectly</ToggleButton>
            </ToggleButtonGroup> }
          </div>

          <div className="section-card" name="pill">
            <OneMethodHeader
              title="the birth control pill"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-pill"
            />

            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="pillFrequency" defaultValue={0}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>

            { (this.state.pillFrequency === 0) ? <Fragment/>
              : <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="pillUsage" defaultValue={91}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={91}>As well as anyone else</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup> }
          </div>

          <div className="section-card" name="iud-implant">
            <TwoMethodHeader
              titleA="an IUD"
              linkA="https://www.plannedparenthood.org/learn/birth-control/iud"
              titleB="the birth control implant"
              linkB="https://www.plannedparenthood.org/learn/birth-control/birth-control-implant-implanon"
            />
            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="iudImplant" defaultValue={0}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={99}>Yay</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="section-card" name="ring">
            <OneMethodHeader
              title="the birth control ring"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-vaginal-ring-nuvaring"
            />
            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="ringFrequency" defaultValue={0}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>

            { (this.state.ringFrequency === 0) ? <Fragment/>
              : <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="ringUsage" defaultValue={91}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={91}>As well as anyone else</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup> }
          </div>

          <div className="section-card" name="shot">
            <OneMethodHeader
              title="the birth control shot"
              link="https://www.plannedparenthood.org/learn/birth-control/birth-control-shot"
            />
            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="shotFrequency" defaultValue={0}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={100}>Yay</ToggleButton>
            </ToggleButtonGroup>

            { (this.state.shotFrequency === 0) ? <Fragment/>
              : <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="shotUsage" defaultValue={94}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={94}>As well as anyone else</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={99}>Perfectly</ToggleButton>
            </ToggleButtonGroup> }
          </div>

          <div className="section-card" name="pull-out">
            <OneMethodHeader
              title="the pull out method"
              link="https://www.plannedparenthood.org/learn/birth-control/withdrawal-pull-out-method"
            />
            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
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
              type="radio" as={Row} className="py-1"
              name="pullOutUsage" defaultValue={78}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={78}>As well as anyone else</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={94}>Perfectly</ToggleButton>
            </ToggleButtonGroup> }
          </div>

          <div className="section-card" name="spermicide">
            <OneMethodHeader
              title="spermicide"
              link="https://www.plannedparenthood.org/learn/birth-control/spermicide"
            />
            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
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
              type="radio" as={Row} className="py-1"
              name="spermicideUsage" defaultValue={72}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={72}>As well as anyone else</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={82}>Perfectly</ToggleButton>
            </ToggleButtonGroup> }
          </div>

          <div className="section-card" name="fam-methods">
            <OneMethodHeader
              title="fertility awareness methods (FAMs)"
              link="https://www.plannedparenthood.org/learn/birth-control/fertility-awareness"
            />
            <ToggleButtonGroup
              type="radio" as={Row} className="py-1"
              name="famMethods" defaultValue={0}
              onChange={this.updateStatistic}>
              <ToggleButton  variant={variant} size="lg" value={0}>Nay</ToggleButton>
              <ToggleButton  variant={variant} size="lg" value={76}>Yay</ToggleButton>
            </ToggleButtonGroup>
          </div>

        </Container>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="section-heading">Your Odds</h1>
          </Row>

          <div className="results-section">
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
        </div>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="section-heading">Why <strong><span className="color-dark">Safe</span><span className="color-medium-light">Sex</span><span className="color-dark">Stats</span></strong>?</h1>
          </Row>

          <div className="section-card">
            <p>
              <Link title="Planned Parenthood" link="https://www.plannedparenthood.org/learn/birth-control"/> is a great resource for learning about different types of contraceptives and how to have sex safely.
            </p>

            <p>
              However, I'm a fan of the saying "two is one and one is none" and wanted an easy way to understand the combined effectiveness of multiple contraceptives in preventing unwanted pregnancy and sexually transmitted diseases, so I built <strong><span className="color-dark">Safe</span><span className="color-medium-light">Sex</span><span className="color-dark">Stats</span></strong>.
            </p>
          </div>
        </div>


        <div className="content-wrapper p-5 container-fluid">
          <Row className="pb-2">
            <h1 className="section-heading">Want More?</h1>
          </Row>

          <div className="section-card">
            <p>
              For a better understanding of the statistics at work behind this calculator, check out this great <Link title="Scarleteen article" link="https://www.scarleteen.com/article/sexual_health/the_buddy_system_effectiveness_rates_for_backing_up_your_birth_control_with_a_"/> or this <Link title="Khan Academy lesson" link="https://www.khanacademy.org/math/ap-statistics/probability-ap/probability-multiplication-rule/v/compound-probability-of-independent-events"/> on compound probabilities.
            </p>

            <p>
              Do you use a <Link title="birth control method" link="https://www.plannedparenthood.org/learn/birth-control"/> that I haven't included here and would like to see it on the site? Open <Link title="an issue" link="https://github.com/jakerockland/safesexstats/issues"/> on Github.
            </p>
          </div>
        </div>


        <footer className="content-wrapper p-5 container-fluid">
          <Row className="p-1">
            <p>
              <Link link="https://github.com/jakerockland/safesexstats" title="SafeSexStats" /> is open source.
            </p>
          </Row>
        </footer>

      </div>
    );
  }
}


export default App;
