import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;
const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  width: 100%;
  all: unset;
  font-size: 28px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  updateTerm,
  error
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 ? (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        ) : null}

        {tvResults && tvResults.length > 0 ? (
          <Section title="TV Show Results">
            {tvResults.map(show => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        ) : null}
      </>
    )}
    {error ? <Message color="#e74c3c" text={error} /> : null}
    {tvResults &&
    movieResults &&
    tvResults.length === 0 &&
    movieResults.length === 0 ? (
      <Message color="#95a5a6" text="Nothing Found" />
    ) : null}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
