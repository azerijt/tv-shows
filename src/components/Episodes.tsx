import episodes from "../episodes.json";
import { clean } from "../utils/clean";
import generateEpisodeCode from "../utils/GenerateEpisodeCode";

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export const episodeData: IEpisode[] = episodes;

function Episode(): JSX.Element {
  return (
    <>
      {episodeData.map((episodeInfo) => (
        <section key={episodeInfo.id}>
          <h1>
            Episode:
            <a href={episodeInfo.url}>{episodeInfo.name}</a>
          </h1>
          <h3>{generateEpisodeCode(episodeInfo.season, episodeInfo.number)}</h3>
          <img src={episodeInfo.image.medium} alt="" />
          <br />
          {clean(episodeInfo.summary)}
        </section>
      ))}
    </>
  );
}

export default Episode;
