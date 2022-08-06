import { useState,useEffect } from 'react';
import '../App.css';


// function PageChange(props) {
//   return alert("Hello, " + props.name + " Page")
// };


function Board() {

  useEffect(()=>{
    alert("Hello, Board Page")
  },[])

  const [stateContent, setStateContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setStateContent({
      ...stateContent,
      [name]: value
    })
    console.log(stateContent);

  
  };



  return (
    <>


      <div className="App">
        <h1>Williroy Board</h1>
        <div className='board-container'>
          {viewContent.map(element =>
            <div className='sub-board-container'>
              <h2>{element.title}</h2>
              <div>
                {element.content}
              </div>
            </div>
          )}
        </div>
        <form >
          <div className='from-wrapper'>
            <input className="title-input"
              type='text'
              placeholder='제목'
              onChange={getValue}
              name='title'
            />
            <div>
              <input className="content-input"
                type='text'
                placeholder='내용'
                onChange={getValue}
                name='content'
              />
            </div>
          </div>
          <button className="submit-button" type="submit" onClick={() => {
            alert('게시물을 등록하시겠습니까?')
            setViewContent(viewContent.concat({ ...stateContent }));
          }
          }>입력</button>
        </form>
      </div>

    </>
  );
}

export default Board;
