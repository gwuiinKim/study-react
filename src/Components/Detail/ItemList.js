import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.span``;
const Divider = styled.span`
  margin: 0 10px;
`;

const Button = styled.button`
  all: unset;
  background-color: #e8b708;
  color: black;
  font-weight: 600;
  width: 30px;
  height: 12px;
  padding: 3px 5px;
  border-radius: 2px;
`;

const ItemList = ({ result }) => (
  <>
    <Item>
      {result.release_date
        ? result.release_date.substring(0, 4)
        : result.first_air_date && result.first_air_date.substring(0, 4)}
    </Item>
    <Divider>•</Divider>
    <Item>
      {result.runtime ? result.runtime : result.episode_run_time[0]} min
    </Item>
    <Divider>•</Divider>
    <Item>
      {result.genres &&
        result.genres.map((genre, index) =>
          index === result.genres.length - 1 ? genre.name : `${genre.name} / `
        )}
    </Item>
    <Divider>•</Divider>
    <Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.imdb.com/title/${result.imdb_id}`}
      >
        <Button> IMDb</Button>
      </a>
    </Item>
  </>
);

Item.propTypes = {
  result: PropTypes.object
};

export default ItemList;
