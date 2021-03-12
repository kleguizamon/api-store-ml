function Button(props) {
  const handleClick = () => props.clickCallback();

  return <button onClick={handleClick}>Buscar</button>;
}

export default Button;
