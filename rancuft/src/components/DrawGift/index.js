import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";
import * as C from "../../common/common"
import { Link } from "react-router-dom";

import Modal from "./modal";

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
    ctx.lineCap = 'round';
    ctx.lineWidth = line;
    
    if (!drawing){
      ctx.beginPath();
      ctx.moveTo(x,y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  
  }

  function setModal() {

  }
  

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    // https://stickode.tistory.com/240 내가 원하는것!
    <>           
      <S.FullBackground>
        <S.Background>
          
        <S.MoveButton>
          <Link to = "/gift-get">
          <button className="gift_get" >
            선물 받을래
          </button>
        </Link>
          
        </S.MoveButton>

        <S.MoveButton>
        <Link to = "/gift-get"> 
          <button className="like_gift">
            내가 좋아하는 선물들
          </button>
          </Link>
        </S.MoveButton>
        <S.PanSetBox>
          <S.Pan>
            <img alt="펜 그림입니다. 누르면 색깔을 고를 수 있습니다." title = "클릭 하시면 색상을 바꿀 수 있습니다." src="img/Vector.svg"/>
          </S.Pan>
          <S.Point>
            <input type="range" id="lineRange" min="0.1"  max="20.0" defaultValue = "5" step="0.1"/>
          </S.Point>
        </S.PanSetBox>
          
          <S.DrawBox>
          <canvas 
          ref={canvas} 
          width="400" height="350"
          onMouseDown={handlerMouseDown}
          onMouseUp={handlerMouseUp}
          onMouseMove = {draw}>이 브라우저는 캔버스를 지원하지 않습니다 😅<br/> 선물 받아보기는 어떠신가요?</canvas>
          </S.DrawBox>
        
          <S.Title>
            <input type="text" placeholder="행복의 말 한마디를 해 주세요 💛"></input>
          </S.Title>
          <S.GiftButton>
            <button onClick={Modal}>선물 하기</button>
            {
              modalVisible && <Modal>
                
              </Modal>

            }
          </S.GiftButton>
        </S.Background>
       </S.FullBackground>
    </>
  );
}


export default DrowGift;

