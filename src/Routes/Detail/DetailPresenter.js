import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Company from "../../Components/Detail/Company";
import ItemList from "../../Components/Detail/ItemList";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
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
  filter: blur(3px);
  opacity: 0.2;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;

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

const Data = styled.div`
  margin-left: 20px;
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Language = styled.span`
  margin-right: 5px;
  background-color: #3498db;
  padding: 3px;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  color: white;
`;

// const Divider = styled.span`
//   margin: 0 10px;
// `;

const Overview = styled.p`
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  font-size: 15px;
  color: #e67e22;
`;

const VideoUrl = styled.span`
  width: 100%;
  display: block;
  margin-top: 10px;
`;

const CompanyContainer = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-gap: 40px;
  margin-top: 10px;
`;

const CollectionContainer = styled.div`
  width: 100%;
  height: 120px;
`;

const Collection = styled.div``;
const CollectionPoster = styled.img`
  width: 100px;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Inflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Inflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPoster.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <ItemList result={result} />
          </ItemContainer>
          {result.spoken_languages &&
            result.spoken_languages.length > 0 &&
            result.spoken_languages.map(language => (
              <Language> {language.name} </Language>
            ))}

          <Overview>{result.overview}</Overview>
          <VideoContainer>
            {result.videos.results &&
              result.videos.results.length > 0 &&
              result.videos.results.map(
                (video, index) =>
                  index < 2 && (
                    // <Section title="Video Trailer">
                    //   {`https://www.youtube.com/watch?v=${video.key}` }
                    // </Section>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.youtube.com/watch?v=${video.key}`}
                    >
                      <VideoUrl key={video.id}>{video.name}</VideoUrl>
                    </a>
                  )
              )}
          </VideoContainer>

          {result.belongs_to_collection && result.belongs_to_collection.id && (
            <CollectionContainer>
              <CollectionPoster
                src={`https://image.tmdb.org/t/p/original${
                  result.belongs_to_collection.poster_path
                }`}
              />
              <Collection>{result.belongs_to_collection.name} </Collection>
            </CollectionContainer>
          )}

          <CompanyContainer>
            {result.production_companies &&
              result.production_companies.length > 0 &&
              result.production_companies.map(company => (
                <Company logo={company.logo_path} name={company.name} />
              ))}
          </CompanyContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
