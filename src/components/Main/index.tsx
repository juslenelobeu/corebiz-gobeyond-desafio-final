import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './styles.scss'
import iconArrow from '../../assets/icons/icon-arrow.svg'

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
  const [thumbnail, setThumbnail] = useState(0)

  const addSizeOnUrlImage = (url: string, size: string) => {
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
        <div className="description__highlight">
          <h1 className="content__title">{content[index].title}</h1>
          <a className="content__link" href="https://www.corebiz.ag/" title="Link para o site da Corebiz" target="_blank" rel="noopener noreferrer">ver mais <img src={iconArrow} alt="" /></a>
        </div>
        <div className="description__thumbnails">
          {content.map((item: ContentProps, index: number) => (
            <img className={`image__small ${index === thumbnail ? 'active' : ''}`} src={addSizeOnUrlImage(item.thumbnailUrl, '123x74')} alt={item.title} onClick={() => { setIndex(index); setThumbnail(index) }} key={index} width={123} />
          ))}
        </div>
      </div>
      <div className="content__image">
        <img className="image__large" src={addSizeOnUrlImage(content[index].url, '1130x670')} width={1130} alt={content[index].title} />
      </div>
    </main>
  )
}
