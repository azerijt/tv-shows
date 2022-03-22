import { useState } from "react";
import episodes from "../episodes.json";
import { clean } from "../utils/clean";
import GenerateEpisodeCode from "../utils/GenerateEpisodeCode";

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
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredEpisodeData = episodeData.filter(searchfunction);
  function searchfunction(oneEpisode: IEpisode) {
    return (
      oneEpisode.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      oneEpisode.summary.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <>
      <div className="Container">
        <input
          placeholder="Search"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <br />
        Showing {filteredEpisodeData.length} of {episodeData.length} Total
        Episodes
        {filteredEpisodeData.map((episodeInfo) => (
          <section className="GOT" key={episodeInfo.id}>
            <h1>
              Episode:
              <a href={episodeInfo.url}>{episodeInfo.name}</a>
            </h1>
            <h3>
              {GenerateEpisodeCode(episodeInfo.season, episodeInfo.number)}
            </h3>
            <img src={episodeInfo.image.medium} alt="" />
            <br />
            {clean(episodeInfo.summary)}
          </section>
        ))}
      </div>
    </>
  );
}
export default Episode;
