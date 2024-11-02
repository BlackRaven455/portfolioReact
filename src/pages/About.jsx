import OuterContainer from "../components/OuterContainer.jsx";
import InnerContainer from "../components/InnerContainer.jsx";
import { useState } from "react";
import Description from "../components/ui/Description.jsx";
import styles from "./about.module.css";

export default function About() {
  const [visibleEduc, setVisibleEduc] = useState(true);
  const [visibleExp, setVisibleExp] = useState(false);
  const educationData = [
    {
      year: "2016-2020",
      university: "MSTU 'Stankin'",
      description:
        "Bachelor degree in Instrument Engineering. This course studied the development of measurement instruments as well as information and measurement systems. In particular, the development of computerized microscopes.",
    },
    {
      year: "2017-2020",
      university: "MSTU 'Stankin'",
      description:
        "Translator in the field of professional communications from English language. This course studied the history of English, business English, and specialized terminology.",
    },
    {
      year: "2020-2022",
      university: "MSTU 'Stankin'",
      description:
        "Master degree in Instrument Engineering. Advanced studies in instrument engineering focusing on digital measurement systems.",
    },
    {
      year: "2022-2024",
      university: "Japanese language school UNITAS",
      description: "",
    },
    {
      year: "2024-2026",
      university: "Niigata computer college",
      description: "",
    },
  ];
  const workData = [
    {
      year: "2017-2020",
      place: "Rostest-Moscow",
      description: "",
    },
    {
      year: "2017-2020",
      place: "Rostest-Moscow",
      description: "",
    },
  ];

  if (visibleEduc) {
    return (
      <>
        <h1 className={styles.header}>About me</h1>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => {
              setVisibleEduc(true);
              setVisibleExp(false);
            }}
          >
            Education
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setVisibleEduc(false);
              setVisibleExp(true);
            }}
          >
            Experience
          </button>
        </div>

        {/*Education history*/}
        <OuterContainer>
          {educationData.map((edu, index) => (
            <InnerContainer key={index}>
              <Description
                year={edu.year}
                university={edu.university}
                description={edu.description}
              />
            </InnerContainer>
          ))}
        </OuterContainer>
      </>
    );
  }
  return (
    <>
      {" "}
      <h1 className={styles.header}>About me</h1>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => {
            setVisibleEduc(true);
            setVisibleExp(false);
          }}
        >
          Education
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setVisibleEduc(false);
            setVisibleExp(true);
          }}
        >
          Experience
        </button>
      </div>
      {/*Work hist
        Experience
      </button>
      {/*Work history*/}
      <OuterContainer>
        {workData.map((work, index) => (
          <InnerContainer key={index}>
            <Description
              year={work.year}
              university={work.place}
              description={work.description}
            />
          </InnerContainer>
        ))}
      </OuterContainer>
    </>
  );
}
