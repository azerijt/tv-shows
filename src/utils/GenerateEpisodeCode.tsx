export default function generateEpisodeCode(seasonNumber:number,episodeNumber:number):string{
    let episodeCode 
    if(seasonNumber<10){
      episodeCode = "S0" + seasonNumber;
    }else{
      episodeCode = "S" + seasonNumber;
    }
    if(episodeNumber<10){
      episodeCode += ("E0"+episodeNumber)
    }else{
      episodeCode += ("E"+episodeNumber)
    }
    return episodeCode
  }