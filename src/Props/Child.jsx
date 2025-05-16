function Child({ user, name, age, email }) {
  console.log(user);

  return (
    <div>
      <h2>Child</h2>
      {name ? <h4>Name: {name}</h4> : null}
      {age ? <h4>Age: {age}</h4> : null}
      {email ? <h4>Email: {email}</h4> : null}

      <h3>User: {JSON.stringify(user)}</h3>
    </div>
  );
}

export default Child;
