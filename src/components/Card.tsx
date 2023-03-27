import React from 'react'
interface imageInterface {
  name: string;
  id: number;
  views: number
  likes: number
  downloads: number
  user: string
  tags: UnionConcat<Keys, ','>
  tag?: string
  webformatURL: any
}
export default function Card ({image}) {
  const tags = image.tags.split(',')
  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-full' src={image.webformatURL} alt='Sunset in the mountains' />
        <div className='px-1 py-1'>
          <div className='font-normal text-xl mb-0'>Photo by {image.user}</div>
          <p>Views:{image.views}</p>
          <p>Downloads:{image.downloads}</p>
          <p>Likes: {image.likes}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {tags.map(tag => (
            <span key={tag} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{tag}</span>
          ))}
        </div>
      </div>
    </>
  )
}
