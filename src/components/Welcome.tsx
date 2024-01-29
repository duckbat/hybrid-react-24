const Welcome = (props: {name: string}) => {
  return <h2>Hello, {props.name + " !"}</h2>;
}

export default Welcome;
