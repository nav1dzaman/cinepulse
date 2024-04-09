import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function MovieList({ apiPath }) {
  const { data: movie } = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-5 py-7">
        <div className="flex justify-centre flex-wrap gap-8">
          {movie.map((el) => (
            <Card key={el.id} movie={el} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default MovieList;
