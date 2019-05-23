import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 200px;
`;

const CompanyName = styled.h3`
  font-size: 14px;
  text-align: center;
  opacity: 0.5;
  font-weight: 100;
`;
const CompanyLogoContainer = styled.div`
  height: 100px;
  width: 80px;
  display: flex;
  align-items: center;
`;
const CompanyLogo = styled.img`
  width: 80px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  opacity: 1;
`;

const Company = ({ logo, name }) => (
  <Container>
    <CompanyLogoContainer>
      {logo && (
        <CompanyLogo src={`https://image.tmdb.org/t/p/original${logo}`} />
      )}
    </CompanyLogoContainer>
    <CompanyName>{name}</CompanyName>
  </Container>
);

Company.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string
};

export default Company;
