import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  };
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
