import React from 'react';
import {Datas} from '../Assets/Datas';
import { useParams } from 'react-router-dom';
import  {Link} from  'react-router-dom';
// import Video from "/video";



const Description = () =>{
const {id} = useParams();
const thriller = Datas[id]
console.log(thriller);

return(
    <>
        <Link to="/">Home</Link>
        <p>Un film est une œuvre du cinéma ou de l'audiovisuel,
             qu'elle soit produite ou reproduite sur support argentique ou sur tout autre support existant. 
             Ce terme est employé par métonymie, en référence à la pellicule chargée dans un magasin de caméra argentique, 
             destinée aux prises de vues cinématographiques.
        </p>
            <video autoPlay muted loop >
                <source src="./video" type='video/mpy' />         
             </video>        

    </>

)

}

export default Description;