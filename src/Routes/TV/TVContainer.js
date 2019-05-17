import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  componentDidMount = async () => {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday
      });
    } catch {
      this.setState({
        error: "can't find tv information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

// 여러 개 동시에 복사 붙여넣기 할 때 각 component 별로 복사 붙여넣기 가능함.
