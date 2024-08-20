const MovieList = (props) => {
  console.log(props.path);
  return (
    <>
      <img src={props.path} />
    </>
  );
};
export default MovieList;
