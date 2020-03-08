import React, { Component } from "react";
import FeatureOption from "./FeatureOption";

export default class Features extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>

          <FeatureOption
            USCurrencyFormat={this.props.USCurrencyFormat}
            features={this.props.features}
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        </fieldset>
      );
    });

    return <div>{features}</div>;
  }
}
