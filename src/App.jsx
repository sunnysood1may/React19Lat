import { Link, Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./User";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Department from "./Department";
import Student from "./Student";
import Details from "./Details";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

function app() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
        <Route path="/login" element={<Login />}></Route>

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
