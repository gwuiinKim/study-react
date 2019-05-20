import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Company from "../../Components/Company";
// import Section from "Components/Section";

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
`;

const Item = styled.span``;

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

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  margin-top: 20px;
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
  position: absolute;
  bottom: 60px;
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
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item> En </Item>
            {/* Item to be added */}
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
          </ItemContainer>

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
