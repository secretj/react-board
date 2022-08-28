import { useState, useEffect } from 'react';




function About() {

    useEffect(() => {
        alert("안녕 ! , About Page")
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

        <div className="App" >
            <h1>About</h1>
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
            <button className="submit-button" onClick={() => {
                alert('About 게시물을 등록하시겠습니까?')
                setViewContent(viewContent.concat({ ...stateContent }));
            }
            }>입력</button>
        </div>


    );
}

export default About;