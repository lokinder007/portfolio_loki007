import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)
  const [likes, setLikes] = useState(Number(props.totalLike)); // Ensure totalLike is a number
  const [liked, setLiked] = useState(false); // State to track like button color

  // console.log(props.tatalLike)
  // console.log(props.date)

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleLike = () => {
    // Toggle the liked state and update likes accordingly
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
 };

   // Initialize state for form fields
   const [data, setData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
  });
  const InputEvent = (e) => {
    const { name, value } = e.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();

    console.log(data); // Log or send data to server
    alert(
      `My name is ${data.name}. 
	     My email address is ${data.email}. 
	     My Website : ${data.website}. 
	     My comment : ${data.comment}. `
    )

    // Reset form fields to initial values
    setData({
      name: '',
      email: '',
      website: '',
      comment: '',
    });
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
          <label>
            <i className='far fa-heart'></i> {likes}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <div className='modal-text right'>
              <button className='btn_shadow' onClick={handleLike} >
                       {liked ? 'UNLIKE THIS' : 'LIKE THIS'} <i className='far fa-thumbs-up'></i>
                       {/* {props.totalLike} */}
              </button>
              </div>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>

              {/*---------Leave Message----------  */}
              <div className='contact mtop'>
                <h1>Leave a Reply</h1>

                <form className='blog_contact d_flex' onSubmit={formSubmit}>
                  <div className='left'>
                    <input type='text' placeholder='Name' name='name' value={data.name} onChange={InputEvent} required />
                    <input type='email' placeholder='Email' name='email' value={data.email} onChange={InputEvent} required />
                    <input type='text' placeholder='Website' name='website' value={data.website} onChange={InputEvent} />
                    <button className='btn_shadow'>SUBMIT NOW</button>
                  </div>
                  <div className='right'>
                    <textarea cols='30' rows='12' placeholder='Comment' name='comment' value={data.comment} onChange={InputEvent}/>
                  </div>
                </form>
              </div>
              {/*---------Leave Message----------  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
