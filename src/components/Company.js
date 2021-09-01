const Company = (props) => {
  // console.log(props);
  return (
    <div>
      <h4>Name: {props.company.name}</h4>
      <h4>Catch Phrase: {props.company.catchPhrase}</h4>
      <h4>bs: {props.company.bs}</h4>
    </div>
  );
};

export default Company;
