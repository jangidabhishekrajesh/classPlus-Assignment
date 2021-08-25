import React, { useEffect, useState } from 'react'
import { SearchImages, Trending } from '../api/api';
import Image from './Image';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';


const modalStyle = {
    content:{
        border: "none",
        padding: "none",
        overflow: "none",
        background:"none",
    }
}

let Gallery = ({query}) => {

    const [imgList, setImgList] = useState([]);

    const [currentImg, setCurrentImg] = useState(null);


    useEffect(() =>{
        Trending().then((data) => {
            setImgList(data);
        });
    }, []);

    useEffect(async() =>{
        if(query.trim() ===""){
            return;
        }
        const data= await SearchImages(query);
        setImgList(data);
    }, [query]);

    return(
        <>
        <Modal style={modalStyle} isOpen={!!currentImg} onRequestClose={()=> setCurrentImg(null)}>
           <img className="preview" src={currentImg} alt="currenImg" /> 
        </Modal>
        {imgList.length=== 0? <h2 className="text-danger text-center mt-5">No Images Found!</h2>:null}
        <Masonry className="container" options={{isFitWidth:true}}>
        {imgList.map(img => {
            return <Image urls={img.urls} 
            handleClick={setCurrentImg} key={img.id} onClick={() => console.log("I.m Jangid")}/>
        })}
        </Masonry>
        </>
    );
}
export default Gallery;