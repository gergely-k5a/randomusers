export default function User(data) {
  const { title, first, last } = data.name;
  const name = `${title} ${first} ${last}`;

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
