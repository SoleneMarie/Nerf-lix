import FilmTitle from "./FilmTitle";
import MovieList from "./MovieList";

const AllSections = (props) => {
  const filmsTab = props.data;
  console.log(filmsTab[0]);
  return (
    <>
      {filmsTab.map((elem, index) => {
        return (
          <>
            <body>
              <FilmTitle name={elem.category} key={index} />
              <section className="picsBand">
                <MovieList
                  path={elem.images.map((imgPath) => {
                    return imgPath;
                  })}
                  key={elem.images.map((index) => {
                    return index;
                  })}
                />
              </section>
            </body>
          </>
        );
      })}
    </>
  );
};
export default AllSections;
