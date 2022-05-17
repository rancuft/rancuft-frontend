import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as S from "./style.js";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import * as M from "../../common/modal.js";
import * as C from "../../common/common.js";
import * as G from "../../common/gift_common.js";

function DrowGift() {
  let drawing = false;

  let topSpace = 35;
  let leftSpace = 15;

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

  function handlerRangeChange(e) {
    line = e.target.value;
  }

  const handlerMobileDown = (e) => {
    if (ctx) {
      if (!drawing) {
        x = e.touches[0].clientX - e.touches[0].target.offsetLeft - leftSpace;
        y = e.touches[0].clientY - e.touches[0].target.offsetTop - topSpace;
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

    ctx.strokeStyle = "orange";
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
    x = e.touches[0].clientX - e.target.offsetLeft - leftSpace;
    console.log(e.target.offsetLeft);
    y = e.touches[0].clientY - e.target.offsetTop - topSpace;

    ctx.strokeStyle = "orange";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = line;

    if (drawing) {
      ctx.strokeStyle = "red";
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

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

          <S.DrawBox>
            <canvas
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
                  <button onClick={() => setModalIsOpen(false)}>
                    네, 줄래요
                  </button>
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
