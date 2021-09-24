import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './styles.scss'

interface ContentProps {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const Main = () => {
  const [content, setContent] = useState([{
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  }])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4')
      .then((result) => { setContent(result.data) })
  }, [])

  return (
    <main className="main__content">
      <div className="content__description">
        <h1>{content[index].title}</h1>
        <a href={content[index].url} title={content[index].title} target="_blank" rel="noopener noreferrer" className="description__button">Ver mais</a>
        <div className="description__thumbs">
          {content.map((item: ContentProps, index: number) => (
            <button className="thumbs__button" onClick={() => setIndex(index)} key={index}>
              <img className="image__small" src={item.thumbnailUrl} alt={item.title} />
            </button>
          ))}
        </div>
      </div>
      <div className="content__image">
        <img className="image__large" src={content[index].url} alt="" />
      </div>
    </main>
  )
}
