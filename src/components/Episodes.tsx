import { useEffect, useState } from "react";
//import episodes from "../episodes.json";
//import simpsonseps from "../simpsonseps.json";
import { clean } from "../utils/clean";
import GenerateEpisodeCode from "../utils/GenerateEpisodeCode";
//import handleGetData from "./FetchEpisodeData";

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
  image: null | {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

//export const episodeData: IEpisode[] = episodes;

// export const episodeData = simpsonseps;

function Episode(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);
  const [epsiodeSelect, setEpisodeSelect] = useState<string>("");

useEffect(() => {
  const handleGetData = async () => {
    const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
    const jsonBody: IEpisode[] = await response.json();
    setEpisodeData(jsonBody);
  };
  handleGetData();
}, []);

  const episodeDataArray = [...episodeData];

  const filteredEpisodeData = episodeDataArray.filter(searchfunction);

  function searchfunction(oneEpisode: IEpisode) {
    return (
      (oneEpisode.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        oneEpisode.summary.toLowerCase().includes(searchValue.toLowerCase())) &&
      oneEpisode.name.toLowerCase().includes(epsiodeSelect.toLowerCase())
    );
  }
 // handleGetData();
  // function handleOnchange = (event) => {
  //   const show = event.target;
  //   setEpisodeSelect(show)
  // }

  return (
    <div className="page">
      <div className="Container">
        <br />
        <div className="title">
          <h1>TV Shows App</h1>
          <input
            placeholder="Search"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <br />
          {/* <label> Choose an Episode:</label> */}
          <select
            name="epsiodes"
            id="episode"
            onChange={(event) => {
              setEpisodeSelect(event.target.value);
            }}
          >
            <option
            value=""
            >All Episodes</option>
            {episodeDataArray.map((oneEpi) => (
              <option value={oneEpi.name} key={oneEpi.id}>
                {oneEpi.name + " Ep" + oneEpi.number}
              </option>
            ))}
          </select>
          {searchValue && (
            <p>
              Showing {filteredEpisodeData.length} of {episodeData.length} Total
              Episodes{" "}
            </p>
          )}
        </div>

        {filteredEpisodeData.map((episodeInfo) => (
          <section className="GOT" key={episodeInfo.id}>
            <h1 className="EpisodeTitle">{episodeInfo.name}</h1>
            <h3>
              <a className="EpisodeTitle" href={episodeInfo.url}>
                {GenerateEpisodeCode(episodeInfo.season, episodeInfo.number)}
              </a>
            </h3>
            {episodeInfo.image && (
              <img className="img" src={episodeInfo.image.medium} alt="" />
            )}
            {episodeInfo.image === null && <i>Image Unavailable</i>}
            <br />
            <br />
            {clean(episodeInfo.summary)}
            <br />
          </section>
        ))}
      </div>
    </div>
  );
}
export default Episode;
