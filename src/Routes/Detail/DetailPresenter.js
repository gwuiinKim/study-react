import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import { Link } from "react-router-dom";
import Company from "../../Components/Detail/Company";
import ItemList from "../../Components/Detail/ItemList";
import Season from "../../Components/Detail/Season";

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
  z-index: -1;
`;

// 인스타 그램에서처럼 다운로드 못하게 하는 것 같은 기능
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

const Data = styled.div`
  margin-left: 20px;
  width: 70%;
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
  & :hover {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
`;

const CompanyContainer = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-gap: 40px;
  margin-top: 30px;
`;

const CollectionContainer = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 15px;
  & :hover {
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
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
          {result.spoken_languages && result.spoken_languages.length > 0
            ? result.spoken_languages.map(language => (
                <Language> {language.name} </Language>
              ))
            : result.languages &&
              result.languages.map(language => (
                <Language> {language} </Language>
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
              <Link to={`/collection/${result.belongs_to_collection.id}`}>
                <CollectionPoster
                  src={`https://image.tmdb.org/t/p/original${
                    result.belongs_to_collection.poster_path
                  }`}
                />
                <Collection>{result.belongs_to_collection.name} </Collection>
              </Link>
            </CollectionContainer>
          )}
          {result.production_companies &&
            result.production_companies.length > 0 && (
              <CompanyContainer>
                {result.production_companies.map(company => (
                  <Company logo={company.logo_path} name={company.name} />
                ))}
              </CompanyContainer>
            )}
          {result.seasons && result.seasons.length > 0 && (
            <Season result={result} />
          )}
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
