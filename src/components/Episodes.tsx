import episodes from "../episodes.json";
import { clean } from "../utils/clean";

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
          <h1>Episode: {episodeInfo.name}</h1>
          <h3>
            S:{episodeInfo.season} Ep:{episodeInfo.number}
          </h3>
          <img src={episodeInfo.image.medium} alt="" />
          <br />
          {clean(episodeInfo.summary)}
        </section>
      ))}
    </>
  );
}

export default Episode;
