import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
  z-index: 1;
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
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
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

const ListContainer = styled.div`
  margin-left: 20px;
  width: 60%;
  height: 100%;
`;

const SLink = styled(Link)`
  width: 100%;
  height: 200px;
  z-index: 1;
`;

const Movie = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  & :hover {
    opacity: 0.7;
  }
`;

const Poster = styled.div`
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  width: 120px;
  height: 200px;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
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
        <ListContainer>
          {result.parts &&
            result.parts.length > 0 &&
            result.parts.map(movie => (
              <SLink to={`/movie/${movie.id}`} key={movie.id}>
                <Movie>
                  <Poster
                    bgImage={`https://image.tmdb.org/t/p/original${
                      movie.poster_path
                    }`}
                  />
                  <Data>
                    <Title>{movie.title}</Title>
                    <LinesEllipsis
                      text={movie.overview}
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  </Data>
                </Movie>
              </SLink>
            ))}
        </ListContainer>
      </Content>
    </Container>
  );

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool
};

export default CollectionPresenter;
