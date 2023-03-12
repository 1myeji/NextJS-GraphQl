import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = styled(Slider)`
  height: 400px;
`;
const Wrap = styled.div`
  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-prev {
    left: 0;
  }
  .slick-next:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    right: 0;
  }
  .slick-next {
    right: 0;
  }
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <Wrap>
      <Carousel {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Carousel>
    </Wrap>
  );
}

// const Wrapper = styled.div`
//   height: 100px;
//   background-color: yellow;
// `;

// export default function LayoutBanner() {
//   return (
//     <>
//       <Wrapper>여기는 베너입니다</Wrapper>
//     </>
//   );
// }
