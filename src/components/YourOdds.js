import React, { Component, Fragment } from 'react';

import Row from 'react-bootstrap/Row';

export default class YourOdds extends Component {

  gcd = (a, b) => {
    // Since there is a limited precision we need to limit the value.
    if (b < 0.0000001) return a;

    // Discard any fractions due to limitations in precision.
    return this.gcd(b, Math.floor(a % b));
  };

  calulateFraction = (probabilty) => {

    var fraction = probabilty.toFixed(4);
    var len = fraction.toString().length - 2;

    var denominator = Math.pow(10, len);
    var numerator = fraction * denominator;

    var divisor = this.gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    numerator = numerator.toFixed()
    denominator = denominator.toFixed()

    return {
      numerator: numerator,
      denominator: denominator,
    }
  }

  calculateOdds = () => {
    const condom = (this.props.condomUsage / 100) * (this.props.condomFrequency  / 100);
    const pill = (this.props.pillUsage / 100) * (this.props.pillFrequency / 100);
    const iudImplant = this.props.iudImplant / 100;
    const ring = (this.props.ringUsage / 100) * (this.props.ringFrequency / 100);
    const shot = (this.props.shotUsage / 100) * (this.props.shotFrequency / 100);
    const pullOut = (this.props.pullOutUsage / 100) * (this.props.pullOutFrequency / 100);
    const spermicide = (this.props.spermicideUsage / 100) * (this.props.spermicideFrequency / 100);
    const famMethods = this.props.famMethods / 100;

    const methods = [
      condom,
      pill,
      iudImplant,
      ring,
      shot,
      pullOut,
      spermicide,
      famMethods,
    ];

    const nonEffectiveProbabilities = methods.map(x => 1 - x);
    const reducedProbability = nonEffectiveProbabilities.reduce((x,y) => x * y);
    const effectiveOdds = (1 - reducedProbability) * 100;

    const percentOdds = effectiveOdds.toFixed(1);
    const numberedOdds = Math.round(1 / ((100 - effectiveOdds) / 100) - 1);
    const pregnancyOdds = (100 - effectiveOdds) / 100
    const fraction = this.calulateFraction(pregnancyOdds);

    return {
      percentOdds: percentOdds,
      numberedOdds: numberedOdds,
      fraction: fraction,
    }
  }

  renderOdds() {
    const { percentOdds, numberedOdds, fraction } = this.calculateOdds();

    if (numberedOdds === 0) {
      if (percentOdds === "0.0") {
        return (
          <span>
            <h2>You're not protected at all.</h2>
            <h2>If you're looking to have a baby soon, you're on the right track!</h2>
          </span>
        )
      }

      return (
        <span>
          <h2>You're barely protected at all (only <span className="color-medium-dark">{percentOdds}%</span>).</h2>
            <h2>If you're looking to have a baby soon, you're on the right track!</h2>
        </span>
      )
    }

    if (percentOdds >= 99.9) {
      return (
        <h2><span className="color-medium-dark">Wow!</span> You're over <span className="color-medium-dark">99.9%</span> protected.</h2>
      )
    }

    return (
      <span>
        <h2>Your contraceptive use should be about <span className="color-medium-dark">{percentOdds}%</span> effective!</h2>
        <h2>That means about <span className="color-medium-dark">{fraction.numerator} in every {fraction.denominator}</span> people using your method(s) will get get pregnant each year.</h2>
      </span>
    );
  }

  render() {
    const { fraction } = this.calculateOdds();

    return <Fragment>
      <Row className="p-1">
        { this.renderOdds() }
      </Row>

      <Row className="p-3" id="social-sharing">
        <a href={`https://twitter.com/home?status=My%20pregnancy%20odds%20are%20${fraction.numerator}%20in%20${fraction.denominator}!%20What're%20yours?%0A%0Ahttps%3A//jakerockland.com/safesexstats%0A%0A%23plannedparenthood%20%23safesex`}
         className="mx-2 btn btn-outline-dark btn-lg"><i class="fab fa-twitter"></i> Share on Twitter </a>

         <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//jakerockland.com/safesexstats"
            className="mx-2 btn btn-outline-dark btn-lg"><i class="fab fa-facebook"></i> Share on Facebook</a>
      </Row>
    </Fragment>
  }
}
