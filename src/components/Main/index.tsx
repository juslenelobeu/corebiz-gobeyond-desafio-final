import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './styles.scss'

interface ContentItemProps {
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const Main = () => {
  const [contentItem, setContentItem] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
      .then((result) => { setContentItem(result.data) })
  }, [])

  return (
    <main className="main__content">
      {contentItem.map((item: ContentItemProps) => (
        <>
          <div key={item.id} className="content__description">
            <h1>{item.title}</h1>
            <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer" className="description__button button--cta">Ver mais</a>
            <div className="description__thumbs">
              <img src="https://via.placeholder.com/150/d32776" alt="" />
              <img src="https://via.placeholder.com/150/24f355" alt="" />
              <img src="https://via.placeholder.com/150/d32776" alt="" />
              <img src="https://via.placeholder.com/150/24f355" alt="" />
            </div>
          </div>
          <div className="content__image">
            <img src={item.thumbnailUrl} alt={item.title} />
          </div>
        </>
      ))}
    </main>
  )
}
