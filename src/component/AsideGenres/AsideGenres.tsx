import useGenres from "../../hooks/useGenres";

const AsideGenres = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AsideGenres;
