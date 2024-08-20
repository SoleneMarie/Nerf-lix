import FilmTitle from "./FilmTitle";
import MovieList from "./MovieList";

const AllSections = (props) => {
  const filmsTab = props.data;
  return (
    <>
      {filmsTab.map((elem, index) => {
        return (
          <>
            <div className="section">
              <FilmTitle name={elem.category} key={index} />
              <section className="line">
                {elem.images.map((onePicPath, index) => {
                  return (
                    <>
                      <MovieList path={onePicPath} key={index} />
                    </>
                  );
                })}
              </section>
            </div>
          </>
        );
      })}
    </>
  );
};
export default AllSections;
