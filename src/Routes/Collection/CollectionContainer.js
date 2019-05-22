import React, { Component } from "react";
import CollectionPresenter from "./CollectionPresenter";
import { moviesApi } from "../../api";

export default class extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isCollection: pathname.includes("/collection/")
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isCollection } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isCollection) {
        ({ data: result } = await moviesApi.collection(parsedId));
      }
    } catch {
      this.setState({
        error: "Can't find anything."
      });
    } finally {
      this.setState({
        loading: false,
        result
      });
    }
  };

  render() {
    const { result, error, loading } = this.state;
    console.log(result);
    return (
      <CollectionPresenter result={result} error={error} loading={loading} />
    );
  }
}
