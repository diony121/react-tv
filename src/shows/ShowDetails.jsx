import EpisodeList from "../episodes/EpisodeList"
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";
import { useState } from "react";


/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
   
  if(!show){
    return <section>
      <p>Please select a show to view its episodes</p>
    </section>
  }
  return (
  <div className="show-details">
    <EpisodeList name={show.name}
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
      />
    <EpisodeDetails episode={selectedEpisode}/> 
  </div>
  )
}
