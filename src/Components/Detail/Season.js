import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 80px;
  display: flex;
  z-index: 2;
`;
const SeasonContainer = styled.div`
  width: 100px;
  height: 120px;
  margin-right: 20px;

  &:hover {
    opacity: 0.5;
  }
`;

const Poster = styled.div`
  width: 100px;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 5px;
`;

const Season = ({ result }) => (
  <Container>
    {result.seasons.map(season => (
      <Link to={`/tv/${season.id}`}>
        <SeasonContainer key={season.id}>
          <Poster
            bgImage={`https://image.tmdb.org/t/p/original${season.poster_path}`}
          />
          <Title>{season.name}</Title>
        </SeasonContainer>
      </Link>
    ))}
  </Container>
);

Season.propTypes = {
  result: PropTypes.object
};

export default Season;
