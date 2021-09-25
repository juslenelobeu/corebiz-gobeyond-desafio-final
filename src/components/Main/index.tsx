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

  const replaceUrl = (url: string, size: string) => {
    let splitUrl = url.split('/')
    splitUrl[3] = size
    return splitUrl.join('/')
  }

  const getUrl = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4')
      .then((result) => {
        setContent(result.data)
      })
  }
  useEffect(() => {
    getUrl()
  }, [])

  return (
    <main className="main__content">
      <div className="content__description">
        <h1 className="content__title">{content[index].title}</h1>
        <a className="content__link" href={content[index].url} title={content[index].title} target="_blank" rel="noopener noreferrer">Ver mais</a>
        <div className="description__thumbs">
          {content.map((item: ContentProps, index: number) => (
            <button className="thumb__button" onClick={() => setIndex(index)} key={index}>
              <img className="image__small" src={replaceUrl(item.thumbnailUrl, '120x72')} alt={item.title} />
            </button>
          ))}
        </div>
      </div>
      <div className="content__image">
        <img className="image__large" src={replaceUrl(content[index].url, '1130x670')} alt="" />
      </div>
    </main>
  )
}
