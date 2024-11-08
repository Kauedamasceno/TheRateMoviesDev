import React from "react";

import Deck from "@/components/Deck/Deck";
import OutDoor from "@/components/OutDoor/outDoor";

const Trending = () => {
  return (
    <div>
        <Deck name='Hello' slug={{slug:'trending-movies'}} />
        <Deck name='Hello2' slug={{slug:'trending-series'}} />
        <Deck name='HelloP' slug={{slug:'popular-movies'}} />
        <Deck name='Hello2P' slug={{slug:'popular-series'}} />
        <Deck name='Cum' slug={{slug:'coming-up'}} />
    
    </div>
  );
};

export default Trending;
