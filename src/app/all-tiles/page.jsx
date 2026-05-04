import TilesCard from '@/component/TilesCard';
import React from 'react';

const AllTails = async () => {
    const res = await fetch("https://tiles-gallary-eight.vercel.app/data.json", {
        cache: "no-store"
    })
    const tiless = await res.json();
    return (
        <div className="container mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold text-center mb-10">All Tiles Gallery</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {tiless.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)}
            </div>

        </div>
    );
};

export default AllTails;