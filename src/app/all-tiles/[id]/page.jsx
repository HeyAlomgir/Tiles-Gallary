import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { GiStonePile } from "react-icons/gi";
import { MdAttachMoney, MdOutlineSquareFoot } from "react-icons/md";


const TilsDetails = async({params}) => {
    const {id} = await params;
    // console.log(id);

    const res = await fetch("https://tiles-gallary-eight.vercel.app/data.json");
    const tiless = await res.json();


    const tiles = tiless.find (t => t.id == id)
    return (
        <div className="">
            <Card className='border rounded-2xl my-5  max-w-1xl
            md:max-w-2xl lg:max-w-3xl'>
                <div className=' relative w-full aspect-square'>
                    <Image
                        src={tiles.image}
                        alt={tiles.title}
                        fill
                        className='object-cover rounded-2xl shadow transform hover:scale-110 transition-transform'
                    ></Image>
                    {/* <img src="https://i.ibb.co.com/x8sBMzLz/71w9tc-Vkc-YL-AC-UF1000-1000-QL80.jpg" /> */}
                    <Chip className=' absolute right-2 top-2'>{tiles.category}</Chip>

                </div>
                <div>
                    <h2 className='font-bold'>{tiles.title}</h2>
                    <p className="text-muted">{tiles.description}</p>

                </div>


                <div>


                    <div className='flex justify-between text-muted'>

                        <div className='flex items-center gap-1'>
                            <GiStonePile/>
                            <p> {tiles.material}</p>
                        </div>
                        <Separator orientation='vertical' />
                        <div className='flex items-center gap-1'>
                            <MdOutlineSquareFoot/>
                            <p> {tiles.dimensions}</p>
                        </div>
                    </div>


                    <div className='flex justify-between font-semibold '>

                        <div className='flex items-center gap-1'>
                            <MdAttachMoney/>
                            <p>{tiles.price}</p>
                        </div>
                        <Separator orientation='vertical' />
                        <div>
                            <p>{tiles.currency}</p>
                        </div>
                    </div>



                </div>


                

            </Card>
        </div>
    );
};

export default TilsDetails;