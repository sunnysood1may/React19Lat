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

      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Hello, Tailwind!</h1>
      <p className="text-gray-700">
        This is a React component styled with Tailwind CSS utilities.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
    
    </div>
  );
}

export default JxMap;
