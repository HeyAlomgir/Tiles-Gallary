import TilesCard from "./TilesCard";


const TopTiles = async() => {
    const  res = await fetch("https://tiles-gallary-eight.vercel.app/data.json",{
        cache:"no-store"
    })
    const tiles = await res.json();
    // console.log(tiles);
    const featuredTiles = tiles.slice(0,4);
    console.log(featuredTiles);
    return (
        <div>
            <h1>Our Products</h1>

            <div>
                {featuredTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard> )}
            </div>

        </div>
    );
};

export default TopTiles;