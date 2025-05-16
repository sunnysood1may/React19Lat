import Data from "./Data";

function JxMap() {
  const userName = ["sunny", "shilpa", "shobhit"];

  const userData = [
    {
      id: 1,
      name: "sunny",
      age: 39,
      email: "sunny@test.com,",
    },
    {
      id: 2,
      name: "shilpa",
      age: 36,
      email: "shilpa@test.com,",
    },
    {
      id: 3,
      name: "shobhit",
      age: 5,
      email: "shobhit@test.com,",
    },
  ];

  return (
    <div>
      <h2> Loop in JSX with Map Function</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
          {userData.map((user) => {
            return (
              <tr key={user.id} 
              style={{backgroundColor:'yellow'}}>
                <Data data={user} />
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default JxMap;
