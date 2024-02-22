import { useQuery } from '@apollo/client';
import { PERSON_GET } from '../queries/queries';
import ChangePersonAddress from './ChangePersonAddress';
import { useEffect, useState } from 'react';
import axios from 'axios';


const PersonDetail = ({ personId }: { personId: string }) => {
    const [isImage, setIsImage] = useState(false);
    const { loading, error, data } = useQuery(PERSON_GET, {
        variables: { personId }
    });

    

    useEffect(() => {
        const checkImage = async () => {
            const res = await axios.get(`http://localhost:4000/avatars/${personId}.jpg`);
            if (res.status === 200) {
                setIsImage(true);
                console.log('image found');
            }
        }
        
        if (data && data.person.id) {
           checkImage(); 
        }
    }, [data, personId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className='w-2/3 mx-auto text-center bg-slate-800 p-4 rounded m-4 '>
            <h1 className='text-2xl'>Person Detail</h1>
            {
                data.person && (
                    <div className='text-left'>
                        <h2 className='text-xl font-bold'>{data.person.name}: </h2>
                        <div className='ml-4'>
                            <p>{data.person.email}</p>
                            <p>{data.person.age}</p>
                            {data.person.address ? (
                                <>
                                    <p>{data.person.address.street} {data.person.address.houseNumber}</p>
                                    <p>{data.person.address.zip}</p>
                                </>
                            ) : 
                            (
                                <p>No address</p>
                            )
                            }
                            <ChangePersonAddress id={personId} currAddress={data.person.address ? data.person.address : {}} />
                        </div>
                        {isImage && <img src={`http://localhost:4000/avatars/${personId}.jpg`} alt='avatar' className='w-1/4 ml-4' />}
                    </div>
                )
            }
        </div>
    )
}

export default PersonDetail;