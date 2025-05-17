import { Link, Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navbar";
import Login from "./User";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Department from "./Department";
import Student from "./Student";
import Details from "./Details";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import State from "./State";
import Parent from "./Props/Parent";
import Controlled from "./Props/Controlled";
import JsXml from "./JSX/JxXml";
import JxMap from "./JSX/JxMap";
import Clock from "./Props/Clock";
import UseEff from "./Hooks/UseEff";
import Uncontrolled from "./Props/Uncontrolled";
import PassFunc from "./Props/PassFunc";

function app() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/jxXml" element={<JsXml />}></Route>
        <Route path="/JxMap" element={<JxMap />}></Route>
        <Route path="/clock" element={<Clock />}></Route>
        <Route path="/hooks" element={<UseEff />}></Route>

        <Route path="/state" element={<State />}></Route>

        <Route path="/props" element={<Parent />}></Route>

        <Route path="/controlled" element={<Controlled />}></Route>
        <Route path="/uncontrolled" element={<Uncontrolled />}></Route>
        <Route path="/PassFunction" element={<PassFunc />}></Route>

        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/users/list?" element={<UserList />}></Route>
        

        <Route path="/users/:id/:name?" element={<UserDetail />}></Route>

        <Route path="/*" element={<PageNotFound />}></Route>

        {/* redirect to login page if invalid url is opened in browser*/}

        {/* <Route path='/*' element={<Navigate to="/login" />} />*/}
      </Routes>
    </div>
  );
}

export function Fruit() {
  return (
    <div>
      <Color />
      <h1>Fruit</h1>
    </div>
  );
}

export function Color() {
  return <h1>Red Color</h1>;
}

export default app;
