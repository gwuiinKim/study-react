import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul``;

const Item = styled.li``;

const SLink = styled(Link)``;
// Component에 css 할 때에는 styled(component)

const Header = styled.header``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Home</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
