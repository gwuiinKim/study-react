import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

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
      isMovie: () => pathname.includes("/movie/")
    };
  }
  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie()) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        // const request = await moviesApi.movieDetail(parsedId);
        // result = request.data;
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
        // result = request.data;
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
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
