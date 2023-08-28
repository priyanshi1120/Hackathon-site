import React, { useEffect, useState } from "react";

const Session = () => {
const [isLargeScreen , setIsLargeScreen] = useState(true)
  useEffect(()=>{
  let value = window.innerWidth > 1200;
  setIsLargeScreen(value);
  console.log(isLargeScreen,window.innerWidth);
  },window.innerWidth)
  return (
    <>
     {isLargeScreen ? (
        <section>
        <div className="  space-y-5 text-white">
          <div className="bg-black h-screen 	 py-36 px-44">
            <div className=" session-layout-text  m-auto text-7xl font-bold  text-center  mb-20">
              SESSION LAYOUT
            </div>
  
            <div className=" lg:space-x-20   flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-evenly">
              <div className=" session-content lg:inline-block space-y-3">
                <div className="backdrop-blur-2xl p-7   bg-[#303030]/70 rounded-lg">
                  <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
                    Round I
                  </p>
                  <h1 className="text-xl pt-2 text-center lg:text-left">
                    SHORTLISTING
                  </h1>
                </div>
                <p className="text-center lg:text-left text-xs ml-1">
                  Shortlisting refers to the process of selecting a smaller, more
                  manageable number of candidates from a larger pool of applicants
                  for further consideration in the hiring process. It typically
                  involves reviewing resumes, cover letters, and/or job
                  applications to identify those candidates who possess the
                  necessary qualifications, skills, and experience required for
                  the job
                </p>
              </div>
              <div className="lg:mt-[5rem] session-content lg:inline-block space-y-3">
                <div className="backdrop-blur-2xl p-7   bg-[#303030]/70 rounded-lg">
                  <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
                    Round II
                  </p>
                  <h1 className="text-xl pt-2 text-center lg:text-left">
                    REVIEW
                  </h1>
                </div>
                <p className="text-center lg:text-left text-xs ml-1">
                  Review refers to the process of examining something carefully in
                  order to evaluate its quality, effectiveness, or suitability.
                  The object of review can vary widely and may include anything
                  from written content to performance evaluations to product
                  prototypes. The purpose of a review is typically to identify
                  areas of strength or weakness and to provide feedback or
                  recommendations for improvement. Reviews can be conducted by
                  individuals or teams and may involve a variety of methods, such
                  as testing, analysis, or comparison to industry standards.
                </p>
              </div>
              <div className="lg:mt-[10rem] session-content lg:inline-block space-y-3  space-x-0">
                <div className="backdrop-blur-2xl p-7   bg-[#303030]/70 rounded-lg">
                  <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
                    Round III
                  </p>
                  <h1 className="text-xl pt-2 text-center lg:text-left">
                    PITCHING
                  </h1>
                </div>
                <p className="text-center lg:text-left text-xs ml-1">
                  Pitching refers to the process of presenting an idea, product,
                  or service in a compelling and persuasive manner in order to
                  secure support or investment. The goal of a pitch is typically
                  to persuade the audience to take action, such as investing in a
                  business or approving a project. Pitches can be given in a
                  variety of formats, including formal presentations, elevator
                  pitches, or video pitches, and may be delivered in person, over
                  the phone, or via email.
                </p>
              </div>
              <div className="lg:mt-[15rem] session-content lg:inline-block space-y-3 ">
                <div className="backdrop-blur-2xl pl-4 pr-20 py-7    bg-[#303030]/70 rounded-lg">
                  <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
                    Round&nbsp;IV
                  </p>
                  <h1 className="text-xl pt-2 pr -5 text-center lg:text-left">
                    WINNERS
                  </h1>
                </div>
                <p className="text-center lg:text-left text-xs ml-1">
                  Winners will be decided and will be getting the prize money
                </p>
              </div>
              <div className="hidden session-content lg:block">
                <div style={{ position: "absolute", "z-index": "0" }}>
                  <svg
                    width="111.99998474121094"
                    height="112"
                    overflow="auto"
                    style={{
                      position: "absolute",
                      left: "-1105px",
                      top: "26px",
                      "pointer-events": "none",
                    }}
                  >
                    <path
                      d="M 16 16 C 79.99998779296875 16, 13.999996948242185 96, 77.99998474121094 96"
                      stroke="#fff"
                      stroke-dasharray="8 4"
                      stroke-width="4"
                      fill="transparent"
                      pointer-events="visibleStroke"
                    ></path>
                    <g
                      fill="#fff"
                      pointer-events="auto"
                      transform="translate(71.99998474121094,84) rotate(0) scale(24)"
                      opacity="1"
                      style={{ opacity: 0 }}
                    >
                      <animate
                        dur="0.4"
                        attributeName="opacity"
                        from="0"
                        to="1"
                        begin="indefinite"
                        repeatCount="0"
                        fill="freeze"
                      ></animate>
                      <path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z"></path>
                    </g>
                  </svg>
                </div>
                <div style={{ position: "absolute", "z-index": "0" }}>
                  <svg
                    width="112.00003051757812"
                    height="112"
                    overflow="auto"
                    style={{
                      position: "absolute",
                      left: "-680px",
                      top: "106.011px",
                      pointerEvents: "none",
                    }}
                  >
                    <path
                      d="M 16 16 C 80.00002441406251 16, 14.000006103515616 96, 78.00003051757812 96"
                      stroke="#fff"
                      stroke-dasharray="8 4"
                      stroke-width="4"
                      fill="transparent"
                      pointer-events="visibleStroke"
                    ></path>
                    <g
                      fill="#fff"
                      pointer-events="auto"
                      transform="translate(72.00003051757812,84) rotate(0) scale(24)"
                      opacity="1"
                      style={{ opacity: 0 }}
                    >
                      <animate
                        dur="0.4"
                        attributeName="opacity"
                        from="0"
                        to="1"
                        begin="indefinite"
                        repeatCount="0"
                        fill="freeze"
                      ></animate>
                      <path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z"></path>
                    </g>
                  </svg>
                </div>
                <div style={{ position: "absolute", zIndex: "0" }}>
                  <svg
                    width="111.99996948242188"
                    height="112.00003051757812"
                    overflow="auto"
                    style={{
                      position: "absolute",
                      left: "-311.75px",
                      top: "186.012px",
                      pointerEvents: " none",
                    }}
                  >
                    <path
                      d="M 16 16 C 79.9999755859375 16, 13.99999389648437 96.00003051757812, 77.99996948242188 96.00003051757812"
                      stroke="#fff"
                      stroke-dasharray="8 4"
                      stroke-width="4"
                      fill="transparent"
                      pointer-events="visibleStroke"
                    ></path>
                    <g
                      fill="#fff"
                      pointer-events="auto"
                      transform="translate(71.99996948242188,84.00003051757812) rotate(0) scale(24)"
                      opacity="1"
                      style={{ opacity: 0 }}
                    >
                      <animate
                        dur="0.4"
                        attributeName="opacity"
                        from="0"
                        to="1"
                        begin="indefinite"
                        repeatCount="0"
                        fill="freeze"
                      ></animate>
                      <path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ) : (


    <>
      <div className="bg-black md:px-48  p-20  py-10 h-screen md:py-20 lg:py-36 ">
        <div className="text-white space-y-8 md:space-y-10">
          <div className="session-layout-text  font-bold text-center mb-8 md:mb-20">
            SESSION LAYOUT
          </div>

          <div className="lg:flex flex-col md:space-x-8 lg:space-x-16 xl:space-x-20">
            <div className="session-content space-y-4 md:space-y-2">
              <div className="backdrop-blur-2xl p-7   bg-[#303030]/70 rounded-lg">
                <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
                  Round I
                </p>
                <h1 className="text-xl pt-2 text-center lg:text-left">
                  SHORTLISTING
                </h1>
              </div>
              <p className="text-center lg:text-left text-xs ml-1">
                Shortlisting refers to the process of selecting a smaller, more
                manageable number of candidates from a larger pool of applicants
                for further consideration in the hiring process. It typically
                involves reviewing resumes, cover letters, and/or job
                applications to identify those candidates who possess the
                necessary qualifications, skills, and experience required for
                the job
              </p>
            </div>

            <div className="session-content space-y-4 md:space-y-2 md:mt-6 lg:mt-12">
              <div className="backdrop-blur-2xl p-7   bg-[#303030]/70 rounded-lg">
                <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
                  Round II
                </p>
                <h1 className="text-xl pt-2 text-center lg:text-left">
                  REVIEW
                </h1>
              </div>
              <p className="text-center lg:text-left text-xs ml-1">
                Review refers to the process of examining something carefully in
                order to evaluate its quality, effectiveness, or suitability.
                The object of review can vary widely and may include anything
                from written content to performance evaluations to product
                prototypes. The purpose of a review is typically to identify
                areas of strength or weakness and to provide feedback or
                recommendations for improvement. Reviews can be conducted by
                individuals or teams and may involve a variety of methods, such
                as testing, analysis, or comparison to industry standards.
              </p>
            </div>
          </div>

          <div className="session-content space-y-4 md:mt-6 lg:mt-12">
            <div className="backdrop-blur-2xl p-7   bg-[#303030]/70 rounded-lg">
              <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
                Round III
              </p>
              <h1 className="text-xl pt-2 text-center lg:text-left">
                PITCHING
              </h1>
            </div>
            <p className="text-center lg:text-left text-xs ml-1">
              Pitching refers to the process of presenting an idea, product, or
              service in a compelling and persuasive manner in order to secure
              support or investment. The goal of a pitch is typically to
              persuade the audience to take action, such as investing in a
              business or approving a project. Pitches can be given in a variety
              of formats, including formal presentations, elevator pitches, or
              video pitches, and may be delivered in person, over the phone, or
              via email.
            </p>
          </div>
        </div>

        <div className="session-content space-y-4 py-10 md:mt-6 lg:mt-12">
          <div className="backdrop-blur-2xl p-7     bg-[#303030]/70 rounded-lg">
            <p className=" -mt-6 lg:text-left text-[#A9A9A9] text-sm">
              Round&nbsp;IV
            </p>
            <h1 className="text-xl pt-2 pr -5 text-center lg:text-left">
              WINNERS
            </h1>
          </div>
          <p className="text-center text-white lg:text-left text-xs ml-1">
            Winners will be decided and will be getting the prize money
          </p>
        </div>
      </div>

      <div className="hidden session-content lg:block">
        <div style={{ position: "absolute", "z-index": "0" }}>
          <svg
            width="111.99998474121094"
            height="112"
            overflow="auto"
            style={{
              position: "absolute",
              left: "-1105px",
              top: "26px",
              "pointer-events": "none",
            }}
          >
            <path
              d="M 16 16 C 79.99998779296875 16, 13.999996948242185 96, 77.99998474121094 96"
              stroke="#fff"
              stroke-dasharray="8 4"
              stroke-width="4"
              fill="transparent"
              pointer-events="visibleStroke"
            ></path>
            <g
              fill="#fff"
              pointer-events="auto"
              transform="translate(71.99998474121094,84) rotate(0) scale(24)"
              opacity="1"
              style={{ opacity: 0 }}
            >
              <animate
                dur="0.4"
                attributeName="opacity"
                from="0"
                to="1"
                begin="indefinite"
                repeatCount="0"
                fill="freeze"
              ></animate>
              <path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z"></path>
            </g>
          </svg>
        </div>
        <div style={{ position: "absolute", "z-index": "0" }}>
          <svg
            width="112.00003051757812"
            height="112"
            overflow="auto"
            style={{
              position: "absolute",
              left: "-680px",
              top: "106.011px",
              pointerEvents: "none",
            }}
          >
            <path
              d="M 16 16 C 80.00002441406251 16, 14.000006103515616 96, 78.00003051757812 96"
              stroke="#fff"
              stroke-dasharray="8 4"
              stroke-width="4"
              fill="transparent"
              pointer-events="visibleStroke"
            ></path>
            <g
              fill="#fff"
              pointer-events="auto"
              transform="translate(72.00003051757812,84) rotate(0) scale(24)"
              opacity="1"
              style={{ opacity: 0 }}
            >
              <animate
                dur="0.4"
                attributeName="opacity"
                from="0"
                to="1"
                begin="indefinite"
                repeatCount="0"
                fill="freeze"
              ></animate>
              <path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z"></path>
            </g>
          </svg>
        </div>
        <div style={{ position: "absolute", zIndex: "0" }}>
          <svg
            width="111.99996948242188"
            height="112.00003051757812"
            overflow="auto"
            style={{
              position: "absolute",
              left: "-311.75px",
              top: "186.012px",
              pointerEvents: " none",
            }}
          >
            <path
              d="M 16 16 C 79.9999755859375 16, 13.99999389648437 96.00003051757812, 77.99996948242188 96.00003051757812"
              stroke="#fff"
              stroke-dasharray="8 4"
              stroke-width="4"
              fill="transparent"
              pointer-events="visibleStroke"
            ></path>
            <g
              fill="#fff"
              pointer-events="auto"
              transform="translate(71.99996948242188,84.00003051757812) rotate(0) scale(24)"
              opacity="1"
              style={{ opacity: 0 }}
            >
              <animate
                dur="0.4"
                attributeName="opacity"
                from="0"
                to="1"
                begin="indefinite"
                repeatCount="0"
                fill="freeze"
              ></animate>
              <path d="M 0 0 L 1 0.5 L 0 1 L 0.25 0.5 z"></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  )
   
          }
          
           </>
  )
};

export default Session;
