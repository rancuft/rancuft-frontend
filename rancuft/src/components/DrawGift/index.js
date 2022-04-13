import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";

function DrowGift() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  
  return (
    <>
      {isMobile && (                
      <S.FullBackground>
        <S.Background>
          HI
        </S.Background>
       </S.FullBackground>
       )}
      {isPc && <h2>TEST</h2>}
    </>
  );
}

export default DrowGift;
