import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const SvgBox = styled.div`
  width: 60%;
`;

const ContentBox = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & p {
    font-size: 1.4rem;
    line-height: 1.8;
    font-weight: 400;
  }
`;

const H1 = styled.h1`
  font-family: "Open-sans", sans-serif;
  font-size: 3.2rem;
  font-weight: 600;
`;

const Button = styled.button`
  display: inline-block;
  padding: 1.2rem 3.6rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: 0.3s all ease-in;
  box-shadow: 0px 1px 3px 1.5px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: var(--Soft-Magenta);
    color: #fff;
  }
`;

function Main() {
  return (
    <StyledMain>
      <SvgBox>
        <svg
          width="709"
          height="506"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <rect id="b" width="657.638" height="410.833" rx="13.701" />
            <filter
              x="-1.6%"
              y="-2.6%"
              width="103.2%"
              height="105.1%"
              filterUnits="objectBoundingBox"
              id="a"
            >
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                stdDeviation="3.5"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                in="shadowBlurOuter1"
              />
            </filter>
            <path
              d="M13.7 0h630.237c7.567 0 13.7 6.134 13.7 13.7v30.122H0V13.701C0 6.134 6.134 0 13.7 0z"
              id="d"
            />
            <filter
              x="-1.6%"
              y="-24%"
              width="103.2%"
              height="147.9%"
              filterUnits="objectBoundingBox"
              id="c"
            >
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                stdDeviation="3.5"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                in="shadowBlurOuter1"
              />
            </filter>
            <linearGradient
              x1="14.811%"
              y1="-22.362%"
              x2="75.996%"
              y2="119.406%"
              id="e"
            >
              <stop stopColor="#FAD961" offset="0%" />
              <stop stopColor="#FF52C1" offset="100%" />
            </linearGradient>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="f">
              <stop stopColor="#00C7FA" offset="0%" />
              <stop stopColor="#007DFA" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="28.973%"
              y1="0%"
              x2="90.2%"
              y2="111.244%"
              id="g"
            >
              <stop stopColor="#FF52C1" offset="0%" />
              <stop stopColor="#9952FF" offset="100%" />
            </linearGradient>
            <path
              d="M11.691 0h195.83c6.457 0 11.692 5.234 11.692 11.691v327.195c0 6.457-5.235 11.692-11.692 11.692H11.691C5.234 350.578 0 345.343 0 338.886V11.691C0 5.234 5.234 0 11.691 0z"
              id="i"
            />
            <filter
              x="-4.1%"
              y="-2.6%"
              width="108.2%"
              height="105.1%"
              filterUnits="objectBoundingBox"
              id="h"
            >
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                stdDeviation="3"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                in="shadowBlurOuter1"
              />
            </filter>
            <path
              d="M11.691 0h195.83c6.457 0 11.692 5.234 11.692 11.691v25.704H0V11.691C0 5.234 5.234 0 11.691 0z"
              id="k"
            />
            <filter
              x="-4.1%"
              y="-24.1%"
              width="108.2%"
              height="148.1%"
              filterUnits="objectBoundingBox"
              id="j"
            >
              <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur
                stdDeviation="3"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0.145098039 0 0 0 0 0.180392157 0 0 0 0.181838768 0"
                in="shadowBlurOuter1"
              />
            </filter>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(7 7)">
              <use fill="#000" filter="url(#a)" xlinkHref="#b" />
              <use fill="#FFF" xlinkHref="#b" />
              <use fill="#000" filter="url(#c)" xlinkHref="#d" />
              <use fill="#00252E" xlinkHref="#d" />
              <rect
                fill="#E1E8EE"
                x="49.323"
                y="13.694"
                width="137.008"
                height="16.433"
                rx="3.425"
              />
              <g transform="translate(591.874 15.064)" fill="#D8D8D8">
                <rect width="21.921" height="2.739" rx="1.369" />
                <rect y="5.478" width="21.921" height="2.739" rx="1.369" />
                <rect y="10.956" width="21.921" height="2.739" rx="1.369" />
              </g>
              <g transform="translate(49.323 94.492)">
                <ellipse
                  fill="url(#e)"
                  cx="32.882"
                  cy="32.867"
                  rx="32.882"
                  ry="32.867"
                />
                <g transform="translate(104.126 8.217)" fill="#E1E8EE">
                  <rect width="78.78" height="10.956" rx="2.055" />
                  <rect y="21.911" width="274.016" height="5.478" rx="2.055" />
                  <rect y="32.867" width="251.181" height="5.478" rx="2.055" />
                  <rect y="43.822" width="228.346" height="5.478" rx="2.055" />
                </g>
                <g transform="translate(411.024 24.65)" fill="#A7B9C8">
                  <ellipse cx="8.22" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="52.063" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="30.142" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="73.984" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="95.906" cy="8.217" rx="8.22" ry="8.217" />
                </g>
              </g>
              <g transform="translate(49.323 187.614)">
                <ellipse
                  fill="url(#f)"
                  cx="30.827"
                  cy="30.813"
                  rx="30.827"
                  ry="30.813"
                />
                <g transform="translate(102.07 6.162)" fill="#E1E8EE">
                  <rect width="78.78" height="10.956" rx="2.055" />
                  <rect y="21.911" width="274.016" height="5.478" rx="2.055" />
                  <rect y="32.867" width="251.181" height="5.478" rx="2.055" />
                  <rect y="43.822" width="228.346" height="5.478" rx="2.055" />
                </g>
                <g transform="translate(408.969 22.596)" fill="#A7B9C8">
                  <ellipse cx="8.22" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="52.063" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="30.142" cy="8.217" rx="8.22" ry="8.217" />
                </g>
              </g>
              <g transform="translate(49.323 285.53)">
                <ellipse
                  fill="url(#g)"
                  cx="30.827"
                  cy="30.813"
                  rx="30.827"
                  ry="30.813"
                />
                <g transform="translate(102.07 6.162)" fill="#E1E8EE">
                  <rect width="78.78" height="10.956" rx="2.055" />
                  <rect y="21.911" width="274.016" height="5.478" rx="2.055" />
                  <rect y="32.867" width="251.181" height="5.478" rx="2.055" />
                  <rect y="43.822" width="228.346" height="5.478" rx="2.055" />
                </g>
                <g transform="translate(408.969 22.596)" fill="#A7B9C8">
                  <ellipse cx="8.22" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="52.063" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="30.142" cy="8.217" rx="8.22" ry="8.217" />
                  <ellipse cx="73.984" cy="8.217" rx="8.22" ry="8.217" />
                </g>
              </g>
            </g>
            <g transform="translate(483.787 149.422)">
              <use fill="#000" filter="url(#h)" xlinkHref="#i" />
              <use fill="#FFF" xlinkHref="#i" />
            </g>
            <g transform="translate(483.787 149.422)">
              <use fill="#000" filter="url(#j)" xlinkHref="#k" />
              <use fill="#00252E" xlinkHref="#k" />
            </g>
            <g transform="translate(505.8 162.277)">
              <rect fill="#E1E8EE" width="71.244" height="14.023" rx="2.923" />
              <g transform="translate(155.111 1.169)" fill="#D8D8D8">
                <rect width="18.706" height="2.337" rx="1.169" />
                <rect y="4.674" width="18.706" height="2.337" rx="1.169" />
                <rect y="9.349" width="18.706" height="2.337" rx="1.169" />
              </g>
            </g>
            <g transform="translate(505.709 223.372)">
              <ellipse
                fill="url(#e)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
            </g>
            <g transform="translate(505.709 317.864)">
              <ellipse
                fill="url(#e)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
            </g>
            <g transform="translate(505.709 254.87)">
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
              <ellipse
                fill="url(#f)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
            </g>
            <g transform="translate(505.709 349.361)">
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
              <ellipse
                fill="url(#f)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
            </g>
            <g transform="translate(505.709 286.367)">
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
              <ellipse
                fill="url(#g)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
            </g>
            <g transform="translate(505.709 380.858)">
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
              <ellipse
                fill="url(#g)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
            </g>
            <g transform="translate(505.709 412.356)">
              <ellipse
                fill="url(#e)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
            </g>
            <g transform="translate(505.709 443.853)">
              <g transform="translate(31.512 2.054)" fill="#E1E8EE">
                <rect width="39.39" height="3.652" rx=".63" />
                <rect y="7.304" width="137.008" height="1.826" rx=".63" />
                <rect y="10.956" width="125.591" height="1.826" rx=".63" />
                <rect y="14.607" width="114.173" height="1.826" rx=".63" />
              </g>
              <ellipse
                fill="url(#f)"
                cx="10.276"
                cy="10.271"
                rx="10.276"
                ry="10.271"
              />
            </g>
          </g>
        </svg>
      </SvgBox>
      <ContentBox>
        <H1>
          {" "}
          Build The Community <br /> Your Fans Will Love
        </H1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <div>
          <Button>Register</Button>
        </div>
      </ContentBox>
    </StyledMain>
  );
}

export default Main;
