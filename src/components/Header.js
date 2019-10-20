import React, {useState} from "react";
import { Transition, SwitchTransition } from 'react-transition-group';

const INTRO_TEXT_LIST = [
  {index: 0, prefix: "A Software", suffix: "Engineer"},
  {index: 1, prefix: 'A Full-Stack', suffix: 'DEVELOPER'},
  {index: 2, prefix: "And I'm AWS", suffix: 'CERTIFIED'}
];

const defaultStyle = {
  transition: 'opacity 500ms ease-in',
  opacity: 0.01
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:   { opacity: 0 }
};

const Header = () => {
  const [inTransition, setTransition] = useState(false);
  const [currentText, setCurrentText] = useState(INTRO_TEXT_LIST[0]);
  
  setTimeout(() => {
    let nextIndex = currentText.index === 2 ? 0 : currentText.index + 1;
    setCurrentText(INTRO_TEXT_LIST[nextIndex]); 
    setTransition(true);
  }, 3000);

  return (
    <header className="intro">
      <div className="container"></div>
      <div className="intro-container">
        <div className="intro-text">
          <div className="intro-left">
            <div>
              <span className="normal">I'm</span>
              <span className="myname">Mina Yousseif,</span>
            </div>
            <div>
              <span className="normal intro-smalltext">{currentText.prefix}</span>
            </div>
          </div>
          <div className="intro-right">
            <SwitchTransition>
              <Transition in={inTransition} timeout={1500}>
                {state => (
                  <h1 style={{...defaultStyle, ...transitionStyles[state]}}>
                    {currentText.suffix}
                  </h1>
                )}
              </Transition>
            </SwitchTransition>
          </div>
        </div>
        <div className="intro-footer">
          <div className="intro-footer-text">What is your Superpower?</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
