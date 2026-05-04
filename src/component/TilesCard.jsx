import { Card } from '@heroui/react';
import Image from 'next/image';


const TilesCard = ({tiles}) => {
    return (
        <div>
            <Card className='border rounded-2xl my-5'>
                <div>
                    <Image
                    src={ tiles.image}
                    alt={tiles.title}
                    width={200}
                    height={200}
                    unoptimized={true}
                  
                    ></Image>
                    {/* <img src="https://i.ibb.co.com/x8sBMzLz/71w9tc-Vkc-YL-AC-UF1000-1000-QL80.jpg" /> */}
                    <p>{tiles.category}</p>

                </div>
            </Card>
        </div>
    );
};

export default TilesCard;