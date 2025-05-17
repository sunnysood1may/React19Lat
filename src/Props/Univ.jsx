const Univ = ({ colleg }) => {
  return (
    <div>
      <h3>Name: {colleg.name} </h3>
      <ul>
        <li>
          <h3>City: {colleg.city}</h3>
        </li>
        <li>
          <h3>Website: {colleg.website}</h3>
        </li>
        <li>
          <h3>Students: </h3>
          {colleg.student?.length > 0 ? (
            <ul>
              {colleg.student.map((stu, idx) => (
                <li key={idx}>
                  Name: {stu.name}, Age: {stu.age}, Email: {stu.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>No students available</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Univ;
