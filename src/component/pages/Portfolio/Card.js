import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)
  const [likes, setLikes] = useState(Number(props.totalLike)); // Ensure totalLike is a number
  const [liked, setLiked] = useState(false); // State to track like button color

  const toggleModal = () => {
    setModal(!modal)
  }
  const viewProject = () => {
    window.open(props.link, '_blank', 'noopener,noreferrer');
    console.log('Props:', props);
    console.log(props.link);
  }

  const handleLike = () => {
     // Toggle the liked state and update likes accordingly
     setLiked(!liked);
     setLikes(liked ? likes - 1 : likes + 1);
  };

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow' onClick={toggleModal}>
        <div className='img'>
          <img src={props.image} alt='img' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            {/* <i className='far fa-heart'></i> {props.totalLike} */}
            <i className='far fa-heart'></i> {likes} {/* Display updated like count */}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button 
                className='btn_shadow' 
                onClick={handleLike} 
                // style={{ backgroundColor: liked ? 'red' : 'transparent' }}
                >
                   {liked ? 'UNLIKE THIS' : 'LIKE THIS'} <i className='far fa-thumbs-up'></i> 
                  {/* {props.totalLike} {likes} */}
                </button>
                <button className='btn_shadow' onClick={viewProject} title="View Project">
                  VIEW PROJECT <i className='fas fa-chevron-right'></i>
                </button>
                
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
