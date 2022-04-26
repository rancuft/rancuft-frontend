import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";


function DrowGift() {
  let drawing = false;


  const canvas = useRef(null);

  const [ctx, setCts] = useState(undefined);

  useEffect(()=>{
    setCts(canvas.current.getContext('2d'));
    }, []);

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  const handlerMouseDown = e => {
    if(ctx) {
      drawing = true;
      var rect = canvas.current.getBoundingClientRect();
      ctx.fillStyle = 'red';
    }
  }

  const handlerMouseUp = e => {
    if(ctx) {
      drawing = false;
    }
  }

  const draw = e => {
   
    const x = e.clientX;
    const y = e.clientY;
    if (!drawing) return;
  
    ctx.strokeStyle  = "red";
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }

  return (
    // https://stickode.tistory.com/240 내가 원하는것!
    <>
      {isMobile && (                
      <S.FullBackground>
        <S.Background>
          <S.DrawBox>
          <canvas 
          ref={canvas} 
          width={400} height={350}
          onMouseDown={handlerMouseDown}
          onMouseUp={handlerMouseUp}
          onMouseMove = {draw}>이 브라우저는 캔버스를 지원하지 않습니다 😅<br/> 선물 받아보기는 어떠신가요?</canvas>
          </S.DrawBox>
          <S.Point>
            <input type="range" min="0.1" max="5.0" step="0.1"/>
          </S.Point>
          HI
        </S.Background>
       </S.FullBackground>
       )}
      {isPc && <h2>TEST</h2>}
    </>
  );
  
  
}


export default DrowGift;

