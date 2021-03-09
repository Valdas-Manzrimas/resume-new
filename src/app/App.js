import React from 'react';
import './App.scss';

import linkedIn from '../assets/linkedin-icon.svg';
import github from '../assets/iconmonstr-github-1.svg';
import profilePic from '../assets/Light-Profile-Photo.jpg';
import locationIcon from '../assets/location_on-white-18dp.svg';
import emailIcon from '../assets/mail_outline-white-18dp.svg';
import phoneIcon from '../assets/call-white-18dp.svg';

import Title from './components/Title';
import ContentBlock from './components/ContentBlock';
import TitleBox from './components/TitleBox';
import EducationBlock from './components/EducationBlock';
import Skills from './components/Skills';
import Links from './components/Links';
import JobInfoBlock from './components/JobInfoBlock';
import Contacts from './components/Contacts';

import data from './data.json';

function App() {
  const [lang, setLang] = React.useState('en');

  // const lang = 'en';
  // class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       lang: 'en',
  //     };

  //     // this.chooseLanguage = this.chooseLanguage.bind(this)
  //   }

  const chooseLanguage = (event) => {
    setLang(event.target.value);
    // this.setState({ lang: event.target.value });
  };

  return (
    <div className="App">
      <div className="left-section">
        <div className="left-section__img-div">
          <img src={profilePic} alt="profile image" />
        </div>

        <ContentBlock className="about-info-container">
          <Contacts
            title={data[lang].footer.PersonalInfo.title}
            className="about-info-box"
          >
            <div className="about-info-box__personal-info">
              <div>
                <p>{data[lang].footer.PersonalInfo.dob.topic}</p>
                <p>{data[lang].footer.PersonalInfo.nationality.topic}</p>
                <p>{data[lang].footer.PersonalInfo.gender.topic}</p>
                <p>{data[lang].footer.PersonalInfo.maritalStatus.topic}</p>
              </div>
              <div>
                <p>{data[lang].footer.PersonalInfo.dob.data}</p>
                <p>{data[lang].footer.PersonalInfo.nationality.data}</p>
                <p>{data[lang].footer.PersonalInfo.gender.data}</p>
                <p>{data[lang].footer.PersonalInfo.maritalStatus.data}</p>
              </div>
            </div>
          </Contacts>
          <Contacts
            title={data[lang].footer.contacts.title}
            className="about-info-box"
          >
            <p>
              <img src={phoneIcon} alt="loc-icn" />
              {data[lang].footer.contacts.telephone}
            </p>
            <p>
              <img src={emailIcon} alt="loc-icn" />
              {data[lang].footer.contacts.email}
            </p>
            <p>
              <img src={locationIcon} alt="loc-icn" />
              {data[lang].footer.address.street}
            </p>
            <p className="my-town">{data[lang].footer.address.town}</p>
          </Contacts>
        </ContentBlock>
        <ContentBlock className="about-info-box" title="Links">
          <div className="links-div">
            <Links
              src={linkedIn}
              alt="LinkedIn profile"
              href="https://linkedin.com/in/valdas-manzrimas-0955a7176"
            >
              LinkedIn/Valdas-Manzrimas
            </Links>
            <Links
              src={github}
              alt="GH"
              href="https://github.com/Valdas-Manzrimas"
            >
              GitHub/Valdas-Manzrimas
            </Links>
          </div>
        </ContentBlock>
      </div>
      <div className="right-section">
        <header className="header">
          <div className="header__top">
            <select onChange={chooseLanguage}>
              <option value="en">English</option>
              <option value="lt">Lietuviškai</option>
            </select>
          </div>
          <div className="header__content">
            <Title level="1">Valdas Manzrimas</Title>
            <div className="header__content__title-line">
              <TitleBox className="header__content__title-line__profession">
                {data[lang].header.title}
              </TitleBox>
              <div className="header__content__title-line__line"></div>
            </div>
          </div>
        </header>

        <div className="app__container">
          <ContentBlock //educational
            className="app__container__education"
            title={data[lang].education.title}
          >
            <hr></hr>
            <div className="educational-inner">
              <EducationBlock
                schoolName={data[lang].education.firstSchool.school}
                year={data[lang].education.firstSchool.year}
                degree={data[lang].education.firstSchool.degree}
              ></EducationBlock>
              <EducationBlock
                schoolName={data[lang].education.secondSchool.school}
                year={data[lang].education.secondSchool.year}
                degree={data[lang].education.secondSchool.degree}
                noLine
              ></EducationBlock>
            </div>
          </ContentBlock>

          <ContentBlock
            className="app__container__experience"
            title={data[lang].workExperience.title}
          >
            <hr></hr>
            <JobInfoBlock
              jobPosition={data[lang].workExperience.jobPosition4.position}
              company={data[lang].workExperience.jobPosition4.company}
              years={data[lang].workExperience.jobPosition4.period}
            >
              {data[lang].workExperience.jobPosition4.about}
            </JobInfoBlock>
            <JobInfoBlock
              jobPosition={data[lang].workExperience.jobPosition1.position}
              company={data[lang].workExperience.jobPosition1.company}
              years={data[lang].workExperience.jobPosition1.period}
            >
              {data[lang].workExperience.jobPosition1.about}
            </JobInfoBlock>
            <JobInfoBlock
              jobPosition={data[lang].workExperience.jobPosition2.position}
              company={data[lang].workExperience.jobPosition2.company}
              years={data[lang].workExperience.jobPosition2.period}
            >
              {data[lang].workExperience.jobPosition2.about}
            </JobInfoBlock>
            <JobInfoBlock
              jobPosition={data[lang].workExperience.jobPosition3.position}
              company={data[lang].workExperience.jobPosition3.company}
              years={data[lang].workExperience.jobPosition3.period}
            >
              {data[lang].workExperience.jobPosition3.about}
            </JobInfoBlock>
          </ContentBlock>

          <section className="app__container__skills-div">
            <ContentBlock //personal-skills
              className="app__container__skills-div__personal-skills"
              title={data[lang].personalSkills.title}
            >
              <hr></hr>
              <Skills>{data[lang].personalSkills.skills[0]}</Skills>
              <Skills>{data[lang].personalSkills.skills[1]}</Skills>
              <Skills>{data[lang].personalSkills.skills[2]}</Skills>
              <Skills>{data[lang].personalSkills.skills[3]}</Skills>
              <Skills>{data[lang].personalSkills.skills[4]}</Skills>
              <Skills>{data[lang].personalSkills.skills[5]}</Skills>
              <Skills>{data[lang].personalSkills.skills[6]}</Skills>
            </ContentBlock>
            <ContentBlock //technical-skills
              className="app__container__skills-div__technical-skills"
              title={data[lang].technicalSkills.title}
            >
              <hr></hr>
              <div className="skills-div">
                <div className="column">
                  <Skills>HTML</Skills>
                  <Skills>CSS/SCSS</Skills>
                  <Skills>JAVASCRIPT</Skills>
                  <Skills>REACT.JS</Skills>
                  <Skills>Remote Desktop</Skills>
                  <Skills>Active Directory</Skills>
                  <Skills>Citrix</Skills>
                </div>
                <div className="column">
                  <Skills>Windows 7, 10</Skills>
                  <Skills>Confluence</Skills>
                  <Skills>Microsoft Office</Skills>
                </div>
              </div>
            </ContentBlock>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
