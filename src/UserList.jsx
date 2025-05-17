import { Link } from "react-router";

function Users() {
  const userData = [
    { id: 1, name: "sunny" },
    { id: 2, name: "shilpa" },
    { id: 3, name: "shobhit" },
  ];
  return (
    <div>
        <h1>User list page</h1>
        {
            userData.map((item) => (
                <div key={item.id}>
                    <h4>
                        <Link to={"/users/"+item.id}>
                        {item.name}
                        </Link>
                    </h4>
                </div>
            ))
        }

        <h1>User list page with name in URL</h1>
        {
            userData.map((item) => (
                <div key={item.id}>
                    <h4>
                        <Link to={"/users/"+item.id+"/"+item.name}>
                        {item.name}
                        </Link>
                    </h4>
                </div>
            ))
        }
    </div>
  );
}

export default Users;
