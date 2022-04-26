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

  let x = null;
  let  y = null;
  let line = 5;
  const range = document.getElementById("lineRange");
  if(range) {
    range.addEventListener("input", handlerRangeChange);
  }

  function handlerRangeChange(e) {
    line = e.target.value;
  }

  
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
    x = e.nativeEvent.offsetX;
    y = e.nativeEvent.offsetY;

    
    ctx.strokeStyle  = "orange";
    ctx.lineJoin = 'round';
    ctx.lineWidth = line;
    
    if (!drawing){
      ctx.beginPath();
      ctx.moveTo(x,y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  
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
          width="400" height="350"
          onMouseDown={handlerMouseDown}
          onMouseUp={handlerMouseUp}
          onMouseMove = {draw}>이 브라우저는 캔버스를 지원하지 않습니다 😅<br/> 선물 받아보기는 어떠신가요?</canvas>
          </S.DrawBox>
          <S.Point>
            <input type="range" id="lineRange" min="0.1"  max="20.0" defaultValue = "5" step="0.1"/>
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

