export default function User(data) {
  const { name, picture, email, cell, phone, dob, location } = data;
  const fullName = `${name.first} ${name.last}`;

  const dateOfBirth = new Date(dob.date).toLocaleDateString();
  const address = `${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}, ${location.country}`;

  return (
    <li>
      <h3>{fullName}</h3>
      <img src={picture.thumbnail} />
      <div>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>Phone: {phone}</div>
      <div>Cell: {cell}</div>
      <div>Date of Birth: {dateOfBirth}</div>
      <div>Address: {address} </div>
    </li>
  );
}
