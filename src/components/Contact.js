import Address from "./Address";
import Company from "./Company";

const Contact = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Username: {props.username}</h2>
      <h2>Email: {props.email}</h2>
      <Address address={props.address} />
      <h2>Phone: {props.phone}</h2>
      <h2>Website: {props.website}</h2>
      <Company company={props.company} />
    </div>
  );
};

export default Contact;
