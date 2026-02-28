import React, { Component, Fragment } from 'react';

import Row from 'react-bootstrap/Row';

export default class YourOdds extends Component {

  gcd(a, b) {
    // Since there is a limited precision we need to limit the value.
    if (b < 0.0000001) return a;

    // Discard any fractions due to limitations in precision.
    return this.gcd(b, Math.floor(a % b));
  };

  calulateFraction(probabilty) {
    var fraction = probabilty.toFixed(4);
    var len = fraction.toString().length - 2;

    var denominator = Math.pow(10, len);
    var numerator = fraction * denominator;

    var divisor = this.gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    numerator = numerator.toFixed()
    denominator = denominator.toFixed()

    return [ numerator, denominator ]
  }

  calculatePregnancyOdds() {

    const condom = (this.props.condomUsage / 100) * (this.props.condomFrequency  / 100);
    const internalCondom = (this.props.internalCondomUsage / 100) * (this.props.internalCondomFrequency  / 100);
    const pill = (this.props.pillUsage / 100) * (this.props.pillFrequency / 100);
    const iudImplant = this.props.iudImplant / 100;
    const ring = (this.props.ringUsage / 100) * (this.props.ringFrequency / 100);
    const shot = (this.props.shotUsage / 100) * (this.props.shotFrequency / 100);
    const pullOut = (this.props.pullOutUsage / 100) * (this.props.pullOutFrequency / 100);
    const spermicide = (this.props.spermicideUsage / 100) * (this.props.spermicideFrequency / 100);
    const famMethods = this.props.famMethods / 100;

    const methods = [
      condom,
      internalCondom,
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

    return [ percentOdds, numberedOdds, fraction ];
  }

  calculateSTDOdds() {
    return Math.max(
      this.props.condomFrequency,
      this.props.internalCondomFrequency
    );
  }

  renderPregnancyOdds(percentOdds, numberedOdds, fraction) {
    if (numberedOdds === 0) {
      if (percentOdds === "0.0") {
        return (
          <span>
            <p className="result-text">You're not protected at all against unwanted pregnancy.</p>
            <p className="result-text">If you're looking to have a baby soon, you're on the right track!</p>
          </span>
        )
      }

      return (
        <span>
          <p className="result-text">You're barely protected at all (only <span className="result-highlight">{percentOdds}%</span>) against unwanted pregnancy.</p>
          <p className="result-text">If you're looking to have a baby soon, you're on the right track!</p>
        </span>
      )
    }

    if (percentOdds >= 99.9) {
      return (
        <p className="result-text"><span className="result-highlight">Wow!</span> You're over <span className="result-highlight">99.9%</span> protected against unwanted pregnancy.</p>
      )
    }

    return (
      <span>
        <p className="result-text">Your contraceptive use should be about <span className="result-highlight">{percentOdds}%</span> effective in preventing unwanted pregnancy!</p>
        <p className="result-text">That means about <span className="result-highlight">{fraction[0]} in every {fraction[1]}</span> people using your method(s) will get get pregnant each year.</p>
      </span>
    );
  }

  renderSTDOdds(percentageOfTimeCovered) {
    if (percentageOfTimeCovered === 0) {
      return (
        <span>
          <p className="result-text">When it comes to STDs, it looks like you aren't using methods that protect you at all!</p>
          <p className="result-text">Hopefully you and your partner(s) are having conversations about STDs.</p>
        </span>
      )
    }

    if (percentageOfTimeCovered === 100) {
      return (
        <p className="result-text"><span className="result-highlight">Wow!</span> You're using methods that protect you from STDs <span className="result-highlight">all the time</span>!</p>
      )
    }

    return (
      <span>
        <p className="result-text">When it comes to STDs, it looks like you are using methods that protect you about <span className="result-highlight">{percentageOfTimeCovered}%</span> of the time.</p>
        <p className="result-text">Hopefully you and your partner(s) are having conversations about STDs.</p>
      </span>
    );
  }

  render() {
    // eslint-disable-next-line
    const [ percentOdds, numberedOdds, fraction ] = this.calculatePregnancyOdds();
    const percentageOfTimeCovered = this.calculateSTDOdds();

    return <Fragment>
      <Row className="p-1">
        { this.renderPregnancyOdds(percentOdds, numberedOdds, fraction) }
      </Row>

      <br/>

      <Row className="p-1">
        { this.renderSTDOdds(percentageOfTimeCovered) }
      </Row>

      <Row className="p-3" id="social-sharing">
         <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//safesexstats.com"
            className="mx-2 btn btn-outline-dark btn-lg"><i className="fab fa-facebook"></i> Share on Facebook</a>
      </Row>
    </Fragment>
  }
}
