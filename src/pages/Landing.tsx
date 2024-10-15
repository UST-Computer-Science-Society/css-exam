import React from 'react';
import { useState, useRef } from 'react'
import { Banner } from '../components/Banner'
import { Track } from '../components/Track'
import { Subject } from '../components/Subject'
import { Carousel } from '../components/Carousel'
import { slides } from '../data/latest.json'
import dummyTexts from '../dummy/dummy'
import subjectDisplay from '../subjects/subjectDisplay'

type ListOfSubjectProps = {
  isSelected: boolean,
  list: {
    code: string
    title: string
    src: string
  }[]
}[]

export const Landing = () => {
  const tracks = useRef<HTMLDivElement | null>(null);
  const subjects = useRef<HTMLDivElement | null>(null);
  const latestPage = useRef<HTMLDivElement | null>(null);
  const [listOfSubjects, setListOfSubjects] = useState<ListOfSubjectProps>(subjectDisplay);

  function handleSubjectClick(e: React.MouseEvent<HTMLButtonElement>) {

    const source = e.currentTarget;
    const id = source.id;
    let copySubjects = [...listOfSubjects];
    if(id === 'core') {
      copySubjects[0].isSelected = false;
      copySubjects[1].isSelected = true;
      copySubjects[2].isSelected = false;
    } else if(id === 'game') {
      copySubjects[0].isSelected = false;
      copySubjects[1].isSelected = false;
      copySubjects[2].isSelected = true;
    } else if(id === 'data') {
      copySubjects[0].isSelected = true;
      copySubjects[1].isSelected = false;
      copySubjects[2].isSelected = false;
    }

    setListOfSubjects(copySubjects);
  }

  return (
      <>
        <section className="section section-vh">
          <div className="home-content">
            <div className="home-sub-container">
              <h2 className="home-title">
                Welcome to
                Computer Science Society
              </h2>
            </div>
            <div className="home-sub-container mt-10">
              <h6 className="home-subtitle">From The University of Santo Tomas</h6>
            </div>
            <div className="home-sub-container m-16">
              <button className="home-buttons text-white mr-2"
              onClick={() => {
                tracks.current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>#tracks</button>
              <button className="home-buttons text-white mr-2"
              onClick={() => {
                subjects.current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>#subjects</button>
              <button className="home-buttons text-white"
              onClick={() => {
                latestPage.current?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}>#latestpage</button>
            </div>
          </div>
          <Banner />
        </section>
        <section className="section" id="tracks" ref={tracks}>
          <h3 className="section-title">Tracks</h3>
          <div className="track-main">
            <div className="tracks-wrapper">
              <Track src="./images/data_science.jpg" trackName="Data Science" dummyText={dummyTexts[0]} />
              <Track src="./images/core_sci.jpg" trackName="Core Science" dummyText={dummyTexts[1]} />
              <Track src="./images/game_dev.jpg" trackName="Game Development" dummyText={dummyTexts[2]} />
            </div>
          </div>
          <Banner />
        </section>
        <section className="section" id="subjects" ref={subjects}>
          <div className="flex flex-col items-center">
            <h3 className="section-title">Subjects</h3>
            <h6 className="subjects-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            </h6>
            <div className="subject-button-wrapper">
              {
                listOfSubjects.map((e, index) => {
                  let title = "";
                  let curr = listOfSubjects.indexOf(e);
                  let id = "";
                  if(curr === 0) {
                    title = "Data Science"
                    id = "data"
                  } else if(curr === 1) {
                    title = "Core Science"
                    id = "core"
                  } else if(curr === 2) {
                    title = "Game Development"
                    id = "game"
                  }

                  return (
                    <button key={index} className={`subject-button ${e.isSelected ? 'bg-orangecss' : 'bg-primary'} mr-4`}
                      id={id}
                      onClick={handleSubjectClick}>{title}</button>
                  );
                })
              }
            </div>
          </div>
          <div className="subjects-wrapper">
            {
              listOfSubjects.filter(e => e.isSelected)[0].list.map((e, index) => {
                return (
                  <Subject key={index} src={e.src} code={e.code} title={e.title}/>
                );
              })
            }
          </div>
          <Banner />
        </section>
        <section className="section items-center h-max">
          <h3 className="section-title" ref={latestPage}>Latest Posts</h3>
          <div className="carousel-wrapper">
            <Carousel data={slides} />
          </div>
          
        </section>
        <footer className="footer">
            <div className="footer-brand">
              <h5 className="footer-logo">Logo</h5>
              <p className="footer-headliner">CSS Headliner</p>
              <div className="passionately-wrapper">
                <p className="passionately">Passionately designed & developed by CSS</p>
              </div>
            </div>
            <div className="contacts-wrapper">
              <div className="other-pages">
                <p className="other-page font-bold">UST Computer Science Society</p>
                <p className="other-page">About Us</p>
                <p className="other-page">Community</p>
                <p className="other-page">News & Events</p>
              </div>
              <div className="accounts-wrapper">
                <div className="account">
                  <div>
                    <img src="./images/mail.svg" />
                  </div>
                  <span className="account-text">Email</span>
                </div>
                <div className="account">
                  <div>
                    <img src="./images/facebook.svg" />
                  </div>
                  <span className="account-text">Facebook</span>
                </div>
                <div className="account">
                  <div>
                <img src="./images/twitter.svg" />
                  </div>
                  <span className="account-text">Twitter</span>
                </div>
                <div className="account">
                  <div>
                    <img src="./images/instagram.svg" />
                  </div>
                  <span className="account-text">Instagram</span>
                </div>
              </div>
            </div>
        </footer>
      </>
  );
}