import React from 'react'
import { useList } from '../context/MovieContext'
import Card from '../components/Card'
import WatchCard from '../components/WatchCard';

function WatchlistPage() {
  const {addToList,movieList}=useList();
  console.log(movieList)
  return (
    <main>
        <section className="max-w-7xl mx-[70px] py-7 ">
        <div className="flex justify-centre flex-wrap gap-8 ">

          {movieList.length===0? (<h1 className='text-center text-3xl '>No Movie in Watch List</h1>):("")}
        {movieList.map((el) => (
            <WatchCard key={el.id} movie={el} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default WatchlistPage
