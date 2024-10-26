import React, { useState } from 'react'
import Header from '../components/Header/Header'
import NewSection from '../components/NewArr/NewSection'
import ImageGallery from '../components/ImageGalery/ImageGallery';
import Limited from '../components/Limited/Limited';
import HotCollection from '../components/HotCollection/HotCollection';

const images = [
  {
    src: '/upload/pp.webp',
    platform: 'instagram',
    link: 'https://www.instagram.com/post1',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'twitter',
    link: 'https://twitter.com/post2',
  },
  {
    src: '/upload/pp.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/pp.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/pp.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/pp.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/pp.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
  {
    src: '/upload/main_product.webp',
    platform: 'facebook',
    link: 'https://facebook.com/post3',
  },
];


function Home() {


  return (
    <div>
      <Header/>
      <NewSection/>
      <hr/>
      <Limited />
      <hr/>
      <HotCollection/>
      <hr/>
      <ImageGallery images={images} />
    </div>
  )
}

export default Home