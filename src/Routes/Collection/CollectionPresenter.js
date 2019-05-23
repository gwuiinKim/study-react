import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
  z-index: 1;
  opacity: 1;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(4px);
  opacity: 0.15;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;

  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  margin-right: 20px;
`;

const CollectionPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title> Loading | Inflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{result.name} | Inflix</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
      </Content>
    </Container>
  );

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool
};

export default CollectionPresenter;
