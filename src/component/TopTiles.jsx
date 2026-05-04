import Marquee from "react-fast-marquee";
import TilesCard from "./TilesCard";


const TopTiles = async () => {
    const res = await fetch("https://tiles-gallary-eight.vercel.app/data.json", {
        cache: "no-store"
    })
    const tiles = await res.json();
    // console.log(tiles);
    const featuredTiles = tiles.slice(0, 4);
    // console.log(featuredTiles);
    return (
        <div className="container mx-auto">


            {/* marque */}

            <div className="flex items-center bg-gray-100 border-y border-gray-200 rounded-md">
                <div className="bg-primary text-muted px-6 py-2 font-bold z-10 whitespace-nowrap shadow-lg">
                    NEW ARRIVALS
                </div>

                <Marquee pauseOnHover={true} speed={50} >
                    {featuredTiles.map(tiles => (
                        <span key={tiles.id} className="mx-10 font-medium uppercase tracking-wider gap-6">
                             {tiles.title} — Only ${tiles.price}
                        </span>
                    ))}
                </Marquee>
            </div>

            <h1 className="text-4xl font-bold text-center py-9">Our Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15">
                {featuredTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)}
            </div>

        </div>
    );
};

export default TopTiles;