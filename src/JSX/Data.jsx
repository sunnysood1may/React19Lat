function Data(user) {
  console.log(user.data);
  return (
    <>
      <td style={{color:'green'}}>{user.data.id}</td>
      <td>{user.data.name}</td>
      <td style={{color:'green'}}>{user.data.age}</td>
      <td style={{color:'green'}}>{user.data.email}</td>
    </>
  );
}

export default Data;
