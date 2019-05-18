import React from "react";
import PropTypes from "process";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {` ${rating}/10`}
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);
Poster.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
