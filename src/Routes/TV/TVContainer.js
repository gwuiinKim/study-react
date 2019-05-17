import React, { Component } from "react";
import TVPresenter from "./TVPresenter";

export default class extends Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
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
