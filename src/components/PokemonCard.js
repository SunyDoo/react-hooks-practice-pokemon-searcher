import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ mon }) {

  const [pic, setPic] = useState(true)
  
  function flipPic(){
    setPic(pic => !pic)
  }

  return (
    <Card>
      <div>
        <div className="image">
          {
            pic? 
            <img 
            src= {mon.sprites.front}
            alt={mon.name}
            onClick={flipPic} /> :
            <img 
            src= {mon.sprites.back}
            alt={mon.name}
            onClick={flipPic} />
          }
        </div>
        <div className="content">
          <div className="header">{mon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {mon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
