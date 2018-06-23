import React from "react";
import { Component } from "react";
import { i18n } from "element-react";
import locale from "element-react/src/locale/lang/en";

i18n.use(locale);

export default class Config extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
