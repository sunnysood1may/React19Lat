import { Fruit } from "./App";
import Login, { Profile, Setting, UserKey } from "./User";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <h1>First component</h1>
      <Fruit />
      <Login />
      <Profile />
      <Setting />
      {UserKey}
    </>
  );
}

export default Home;
