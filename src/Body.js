import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home/home';
import About from './about/about';
import Resumee from './resume/resumee';
import Contact from './contact/contact';
import Skills from './skills/skills';
import Project from './project/project';





function Body() {
  return (
    <> 
       
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      {/* <Resumee/> */}
      <Contact/>
    </>
  )
 
}

export default Body;
