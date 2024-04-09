import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

function Search({ apiPath }) {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q");
  const { data: movie } = useFetch(apiPath,queryTerm);
  
  return (
    <main>
      <section className="text-center text-2xl">{movie.length===0? `No result found for ${queryTerm}`: ""}</section>
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

export default Search