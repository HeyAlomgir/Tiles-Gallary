import Category from '@/component/Category';
import TilesCard from '@/component/TilesCard';


const AllTails = async ({ searchParams }) => {
    const { category } = await searchParams;
    console.log(category);
    const res = await fetch("https://tiles-gallary-eight.vercel.app/data.json", {
        cache: "no-store"
    })
    const tiless = await res.json();


    const filtedTiles = category ? tiless.filter(tiles => tiles.category.toLowerCase() == category.toLowerCase()) : tiless;
    return (
        <div className="container mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold text-center mb-10">All Tiles Gallery</h1>


            <Category />


    
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {filtedTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)}
            </div>

        </div>
    );
};

export default AllTails;