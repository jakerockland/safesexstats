import React, { Component } from 'react';

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

  render() {
    const condom = (this.props.condomUsage / 100) * (this.props.condomFrequency  / 100);
    const pill = (this.props.pillUsage / 100) * (this.props.pillFrequency / 100);
    const iudImplant = this.props.iudImplant / 100;
    const ring = (this.props.ringUsage / 100) * (this.props.ringFrequency / 100);
    const shot = (this.props.shotUsage / 100) * (this.props.shotFrequency / 100);
    const pullOut = (this.props.pullOutUsage / 100) * (this.props.pullOutFrequency / 100);
    const spermicide = (this.props.spermicideUsage / 100) * (this.props.spermicideFrequency / 100);

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
    const pregnancyOdds = (100 - effectiveOdds) / 100

    const fraction = this.calulateFraction(pregnancyOdds);

    if (numberedOdds === 0) {
      if (percentOdds === "0.0") {
        return (
          <h2><span className="color-medium-dark">Uh oh.</span> You're not protected at all, hopefully that is on purpose!</h2>
        )
      }

      return (
        <span>
          <h2><span className="color-medium-dark">Uh oh.</span> You're barely protected at all (only <span className="color-medium-dark">{percentOdds}%</span>).</h2>
          <h2>Hopefully that is on purpose!</h2>
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
        <h2>That means your chances of getting pregnant are roughly <span className="color-medium-dark">{fraction.numerator} in {fraction.denominator}</span>.</h2>
      </span>
    );
  }
}
