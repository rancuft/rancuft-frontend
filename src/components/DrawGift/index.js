import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import * as M from "../../common/modal.js";
import * as C from "../../common/common.js";
import * as G from "../../common/gift_common.js";

import Http from "../../api/index.js";

function DrowGift() {
  const [gift, setGift] = useState('')
  const [comment, setComment] = useState('')

  let drawing = false;

  console.log(window.screen.width )


  const canvas = useRef(null);

  const [ctx, setCts] = useState(undefined);

  useEffect(() => {
    setCts(canvas.current.getContext("2d"));
  }, []);

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  let x = null;
  let y = null;
  let line = 5;
  let color = "orange";


  function handlerRangeChange(e) {
    line = e.target.value;
  }

  function colorChange(e) {
    color = e.target.id;
    console.log(color);
  }
  

  const Authorization = 'Bearer '+localStorage.getItem('token');

  const onGiftSend = () => {
    var $canvas = document.getElementById('can')


    var imgDataUrl = $canvas.toDataURL('image/png');
    console.log(imgDataUrl)
    
    var blobBin = atob(imgDataUrl.split(',')[1]);	// base64 데이터 디코딩
    var array = [];
    for (var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    var file = new Blob([new Uint8Array(array)], {type: 'image/png'});	// Blob 생성
    var formdata = new FormData();	// formData 생성
    formdata.append("file", file);	// file data 추가
    formdata.append("comment",comment);

    console.log(Authorization+" token");

    Http.post(
      '/gift', 
      formdata, 
      //{params: {comment}},
      {headers: {Authorization}},
      {processData: false},
      {contentType: false},)
    .then(res =>{
    })
    .catch(function(error) {
      var errorStatus = error.response.status;
      if(errorStatus=='400') {
        
      }
    })
 };

  /*let topSpace = 35; /* 전체 width - 캔버스 크기 /2 */
  /*let leftSpace = 15;*/
  let topSpace = window.screen.height;
  let leftSpace = window.screen.width;
  
  console.log(topSpace);
  let leftt=(topSpace/2)-300;
  

  const handlerMobileDown = (e) => {
    if (ctx) {
      if (!drawing) {

        x = e.touches[0].clientX - e.touches[0].target.offsetLeft - (leftSpace-400)/2;
        
        y = e.touches[0].clientY - e.touches[0].target.offsetTop - leftt;
        ctx.beginPath();
        ctx.moveTo(x, y);
      }

      drawing = true;
      var rect = canvas.current.getBoundingClientRect();
      ctx.fillStyle = "red";
    }
  };
  const handlerMouseDown = (e) => {
    if (ctx) {
      drawing = true;
      var rect = canvas.current.getBoundingClientRect();
      ctx.fillStyle = "red";
    }
  };

  const handlerMouseUp = (e) => {
    if (ctx) {
      drawing = false;
    }
  };

  const handlerMobileUp = (e) => {
    if (ctx) {
      drawing = false;
    }
  };

  const draw = (e) => {
    x = e.nativeEvent.offsetX;
    y = e.nativeEvent.offsetY;

    console.log("모바일에선 여기 오면 안 되는뎅...");

    ctx.strokeStyle = color;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = line;

    if (!drawing) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const moblieDraw = (e) => {
   

    ctx.strokeStyle = "orange";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = line;

    if (drawing) {
      x = e.touches[0].clientX - e.target.offsetLeft - (leftSpace-400)/2;
      y = e.touches[0].clientY - e.target.offsetTop - leftt;   
      ctx.strokeStyle = "red";
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const handlerSetComment = (e) => {
    setComment(e.target.value)
}

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [tsModalIsOpen, setTsModalIsOpen] = useState(false);

  return (
    // https://stickode.tistory.com/240 내가 원하는것!
    <>
      <C.FullBackground>
        <C.Background>
          <G.MoveButton>
            <Link to="/gift-get">
              <button className="gift_get">선물 받을래</button>
            </Link>
            <Link to="/gift-get">
              <button className="like_gift">내가 좋아하는 선물들</button>
            </Link>
          </G.MoveButton>
          <S.PanSetBox>
            <S.Pan>
              <img
                alt="펜 그림입니다. 누르면 색깔을 고를 수 있습니다."
                title="클릭 하시면 색상을 바꿀 수 있습니다."
                src="img/Vector.svg"
              />
            </S.Pan>
            <S.Point>
              <input
                onChange={handlerRangeChange}
                type="range"
                id="lineRange"
                min="0.1"
                max="20.0"
                defaultValue="5"
                step="0.1"
              />
            </S.Point>
          </S.PanSetBox>
          <S.ColorSet onClick={colorChange} id={"white"} style={{ backgroundColor: "white", borderColor: "black", borderWidth:"2px", borderStyle:"solid" }}  ></S.ColorSet>
          <S.ColorSet onClick={colorChange} id={"black"} style={{ backgroundColor: "black" }}></S.ColorSet>
          <S.ColorSet onClick={colorChange} id={"pink"} style={{ backgroundColor: "pink" }}></S.ColorSet>
          <S.ColorSet onClick={colorChange} id={"orange" } style={{ backgroundColor: "orange" }}></S.ColorSet>
          <S.ColorSet onClick={colorChange} id={"yellow"} style={{ backgroundColor: "yellow" }}></S.ColorSet>
          <S.ColorSet onClick={colorChange} id={"green"} style={{ backgroundColor: "green" }}></S.ColorSet>
          <S.ColorSet onClick={colorChange} id={"blue"} style={{ backgroundColor: "blue" }}></S.ColorSet>

          <S.DrawBox>
            <canvas
              id="can"
              ref={canvas}
              width="400"
              height="350"
              onTouchStart={handlerMobileDown}
              onMouseDown={handlerMouseDown}
              onMouseUp={handlerMouseUp}
              onTouchEnd={handlerMobileUp}
              onMouseMove={draw}
              onTouchMove={moblieDraw}
            >
              이 브라우저는 캔버스를 지원하지 않습니다 😅
              <br /> 선물 받아보기는 어떠신가요?
            </canvas>
          </S.DrawBox>

          <S.Title>
            <input
              type="text"
              placeholder="행복의 말 한마디를 해 주세요 💛"
              onChange={handlerSetComment}
            ></input>
          </S.Title>
          <S.GiftButton>
            <button onClick={() => setModalIsOpen(true)}>선물 하기</button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              ariaHideApp={false}
              style={M.ModalStyle}
            >
              <M.Span>마음을 담은 당신의 선물</M.Span>
              <M.Span>지금 주시겠어요?</M.Span>
              <M.CenterAlignment>
                <M.ModalButton>
                  <button onClick={() => [setTsModalIsOpen(true), onGiftSend()]}>
                    네, 줄래요
                  </button>
                  <Modal
                    isOpen={tsModalIsOpen}
                    ariaHideApp={false}
                    style={M.TsModalStyle}>
                      <M.Span>
                  선물 고마워요 🐹
                
                  </M.Span>
                  <M.Span>
                    당신의 마음에 누군가 행복을 느낄 거예요
                  </M.Span>
                  <M.CenterAlignment>
                  <M.ModalButton>
                    <Link to ="/">
                  <button onClick={() => [setModalIsOpen(false),setTsModalIsOpen(false)]}>
                    확인
                  </button>
                  </Link>
                </M.ModalButton>
                </M.CenterAlignment>


                  </Modal>
                </M.ModalButton>
                <M.ModalButton>
                  <button onClick={() => setModalIsOpen(false)}>
                    아직이요
                  </button>
                </M.ModalButton>
              </M.CenterAlignment>
            </Modal>
          </S.GiftButton>
        </C.Background>
      </C.FullBackground>
    </>
  );
}

export default DrowGift;
