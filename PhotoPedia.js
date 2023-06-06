import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { createClient } from 'pexels';
import { useState , useRef } from 'react';
import './photopedia.css';
import { useEffect } from 'react';
import PhotoPedialogo from './PhotoPedialogo.ico'
export default function PhotoPedia () {
  const photoContainerRef = useRef(null);
const [search, setSearch] = useState('Universe')
const [content, setcontent] = useState([])
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);





 const PhotosData=()=>{
  const client = createClient('bu6oMbjHndVRSJAarB4nnlRDXNpsWcBsKa67RMrJ54pQiQP2OksJl1kc');
  const query = search;
  client.photos.search({ query, per_page: 10,page}).then(response =>{
    // console.log(response.photos)
    setcontent(response.photos)
  }).catch(error => {
    console.log('Error:', error);
  });
 } 

 const handleOnchange=(e)=>{
  setSearch(e.target.value)
 }
 const handleOnsearch = ()=>{
  PhotosData()
 }

 const NextPage = ()=>{
  setPage(page+1)
  if (photoContainerRef.current) {
    photoContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 }
 const PreviousPage = ()=>{
  setPage(page-1);
  
  if (photoContainerRef.current) {
    photoContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 }
useEffect(() => {
  PhotosData()

}, [page])



  return (
  <>
<div className='Photo-container mt-3'>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontWeight: 'bolder'}}><img src= {PhotoPedialogo} style={{width: '4vw', height: '8vh'}}></img><span className='mx-2'>Photo Pedia</span> </a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </div>
    </div>
  </div>
</nav>
 
  <div className="custom-input mt-5">
  <input type="text" placeholder="Search for Photos" onChange={ handleOnchange} />
  <button type="search" onClick={handleOnsearch}>Search</button>
</div>
<div className='heading-photo'>
<h1 style={{textAlign: 'center',}}>Showing Photos for <span style={{fontWeight: 'bolder',textDecoration: 'underline'}}>{search}</span></h1>

</div>





<div className='content-body'>
{content.map((i, index)=>{
  
return(
  <div key={i.id} className="card card-padding mx-1 mt-5">
  <img src={i.src.original} className="card-img-top content-img" alt="..." />
  <div className="download-overlay">
    <a target= '___new' href={i.src.original} download>
      <FontAwesomeIcon icon={faDownload} />
    </a>
  </div>
</div>
)
   
})}

</div>

<div className='pagination mt-5 mb-2'>
<nav aria-label="...">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" to="/" tabIndex="-1" style={{backgroundColor: '#ffd83b',color: 'black',cursor:'pointer'}} aria-disabled="true" onClick={PreviousPage}>Previous</a>
    </li>
    <li className="page-item">
      <a className="page-link" to="/" style={{backgroundColor: '#ffd83b',color: 'black',cursor:'pointer'}} onClick={NextPage}>Next</a>
    </li>
  </ul>
</nav>

</div>
</div>
  </>

  )
}
