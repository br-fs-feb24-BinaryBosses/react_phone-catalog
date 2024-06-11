import React, { useEffect, useRef, useState } from 'react';
import StyledPageCatalog from './StyledPageCatalog.ts';
import SelectItensPerPage from './components/SelectItensPerPage/SelectItensPerPage.tsx';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Phone } from '../../types/types.ts';

export type SelectOptions = '4' | '8' | '16' | 'all';

const data: Phone[] = [
  {
    id: 'apple-iphone-11-128gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-11/black/00.webp',
      'img/phones/apple-iphone-11/black/01.webp',
      'img/phones/apple-iphone-11/black/02.webp',
      'img/phones/apple-iphone-11/black/03.webp',
      'img/phones/apple-iphone-11/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-128gb-green',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Green',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'green',
    images: [
      'img/phones/apple-iphone-11/green/00.webp',
      'img/phones/apple-iphone-11/green/01.webp',
      'img/phones/apple-iphone-11/green/02.webp',
      'img/phones/apple-iphone-11/green/03.webp',
      'img/phones/apple-iphone-11/green/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-128gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-11/purple/00.webp',
      'img/phones/apple-iphone-11/purple/01.webp',
      'img/phones/apple-iphone-11/purple/02.webp',
      'img/phones/apple-iphone-11/purple/03.webp',
      'img/phones/apple-iphone-11/purple/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-128gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Red',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-11/red/00.webp',
      'img/phones/apple-iphone-11/red/01.webp',
      'img/phones/apple-iphone-11/red/02.webp',
      'img/phones/apple-iphone-11/red/03.webp',
      'img/phones/apple-iphone-11/red/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-128gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-11/white/00.webp',
      'img/phones/apple-iphone-11/white/01.webp',
      'img/phones/apple-iphone-11/white/02.webp',
      'img/phones/apple-iphone-11/white/03.webp',
      'img/phones/apple-iphone-11/white/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-128gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Yellow',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-11/yellow/00.webp',
      'img/phones/apple-iphone-11/yellow/01.webp',
      'img/phones/apple-iphone-11/yellow/02.webp',
      'img/phones/apple-iphone-11/yellow/03.webp',
      'img/phones/apple-iphone-11/yellow/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-256gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 256GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1172,
    priceDiscount: 1115,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-11/black/00.webp',
      'img/phones/apple-iphone-11/black/01.webp',
      'img/phones/apple-iphone-11/black/02.webp',
      'img/phones/apple-iphone-11/black/03.webp',
      'img/phones/apple-iphone-11/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-256gb-green',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 256GB Green',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1172,
    priceDiscount: 1115,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'green',
    images: [
      'img/phones/apple-iphone-11/green/00.webp',
      'img/phones/apple-iphone-11/green/01.webp',
      'img/phones/apple-iphone-11/green/02.webp',
      'img/phones/apple-iphone-11/green/03.webp',
      'img/phones/apple-iphone-11/green/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-256gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 256GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1172,
    priceDiscount: 1115,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-11/purple/00.webp',
      'img/phones/apple-iphone-11/purple/01.webp',
      'img/phones/apple-iphone-11/purple/02.webp',
      'img/phones/apple-iphone-11/purple/03.webp',
      'img/phones/apple-iphone-11/purple/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-256gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 256GB Red',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1172,
    priceDiscount: 1115,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-11/red/00.webp',
      'img/phones/apple-iphone-11/red/01.webp',
      'img/phones/apple-iphone-11/red/02.webp',
      'img/phones/apple-iphone-11/red/03.webp',
      'img/phones/apple-iphone-11/red/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-256gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 256GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1172,
    priceDiscount: 1115,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-11/white/00.webp',
      'img/phones/apple-iphone-11/white/01.webp',
      'img/phones/apple-iphone-11/white/02.webp',
      'img/phones/apple-iphone-11/white/03.webp',
      'img/phones/apple-iphone-11/white/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-256gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 256GB Yellow',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1172,
    priceDiscount: 1115,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-11/yellow/00.webp',
      'img/phones/apple-iphone-11/yellow/01.webp',
      'img/phones/apple-iphone-11/yellow/02.webp',
      'img/phones/apple-iphone-11/yellow/03.webp',
      'img/phones/apple-iphone-11/yellow/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-64gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 64GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 932,
    priceDiscount: 880,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-11/black/00.webp',
      'img/phones/apple-iphone-11/black/01.webp',
      'img/phones/apple-iphone-11/black/02.webp',
      'img/phones/apple-iphone-11/black/03.webp',
      'img/phones/apple-iphone-11/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-64gb-green',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 64GB Green',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 932,
    priceDiscount: 880,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'green',
    images: [
      'img/phones/apple-iphone-11/green/00.webp',
      'img/phones/apple-iphone-11/green/01.webp',
      'img/phones/apple-iphone-11/green/02.webp',
      'img/phones/apple-iphone-11/green/03.webp',
      'img/phones/apple-iphone-11/green/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-64gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 64GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 932,
    priceDiscount: 880,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-11/purple/00.webp',
      'img/phones/apple-iphone-11/purple/01.webp',
      'img/phones/apple-iphone-11/purple/02.webp',
      'img/phones/apple-iphone-11/purple/03.webp',
      'img/phones/apple-iphone-11/purple/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-64gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 64GB Red',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 932,
    priceDiscount: 880,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-11/red/00.webp',
      'img/phones/apple-iphone-11/red/01.webp',
      'img/phones/apple-iphone-11/red/02.webp',
      'img/phones/apple-iphone-11/red/03.webp',
      'img/phones/apple-iphone-11/red/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-64gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 64GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 932,
    priceDiscount: 880,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-11/white/00.webp',
      'img/phones/apple-iphone-11/white/01.webp',
      'img/phones/apple-iphone-11/white/02.webp',
      'img/phones/apple-iphone-11/white/03.webp',
      'img/phones/apple-iphone-11/white/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-64gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 64GB Yellow',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 932,
    priceDiscount: 880,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-11/yellow/00.webp',
      'img/phones/apple-iphone-11/yellow/01.webp',
      'img/phones/apple-iphone-11/yellow/02.webp',
      'img/phones/apple-iphone-11/yellow/03.webp',
      'img/phones/apple-iphone-11/yellow/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-256gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 256GB Gold',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1640,
    priceDiscount: 1570,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-11-pro/gold/00.webp',
      'img/phones/apple-iphone-11-pro/gold/01.webp',
      'img/phones/apple-iphone-11-pro/gold/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-256gb-midnightgreen',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 256GB Midnight green',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1640,
    priceDiscount: 1570,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'midnightgreen',
    images: [
      'img/phones/apple-iphone-11-pro/midnightgreen/00.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/01.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/02.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/03.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-256gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 256GB Silver',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1640,
    priceDiscount: 1570,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-11-pro/silver/00.webp',
      'img/phones/apple-iphone-11-pro/silver/01.webp',
      'img/phones/apple-iphone-11-pro/silver/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-256gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 256GB Spacegray',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1640,
    priceDiscount: 1570,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-11-pro/spacegray/00.webp',
      'img/phones/apple-iphone-11-pro/spacegray/01.webp',
      'img/phones/apple-iphone-11-pro/spacegray/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-512gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 512GB Gold',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 1880,
    priceDiscount: 1780,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-11-pro/gold/00.webp',
      'img/phones/apple-iphone-11-pro/gold/01.webp',
      'img/phones/apple-iphone-11-pro/gold/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-512gb-midnightgreen',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 512GB Midnight green',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 1880,
    priceDiscount: 1780,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'midnightgreen',
    images: [
      'img/phones/apple-iphone-11-pro/midnightgreen/00.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/01.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/02.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/03.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-512gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 512GB Silver',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 1880,
    priceDiscount: 1780,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-11-pro/silver/00.webp',
      'img/phones/apple-iphone-11-pro/silver/01.webp',
      'img/phones/apple-iphone-11-pro/silver/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-512gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 512GB Spacegray',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 1880,
    priceDiscount: 1780,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-11-pro/spacegray/00.webp',
      'img/phones/apple-iphone-11-pro/spacegray/01.webp',
      'img/phones/apple-iphone-11-pro/spacegray/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-64gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 64GB Gold',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1312,
    priceDiscount: 1270,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-11-pro/gold/00.webp',
      'img/phones/apple-iphone-11-pro/gold/01.webp',
      'img/phones/apple-iphone-11-pro/gold/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-64gb-midnightgreen',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 64GB Midnight green',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1312,
    priceDiscount: 1270,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'midnightgreen',
    images: [
      'img/phones/apple-iphone-11-pro/midnightgreen/00.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/01.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/02.webp',
      'img/phones/apple-iphone-11-pro/midnightgreen/03.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-64gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 64GB Silver',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1312,
    priceDiscount: 1270,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-11-pro/silver/00.webp',
      'img/phones/apple-iphone-11-pro/silver/01.webp',
      'img/phones/apple-iphone-11-pro/silver/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-64gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 64GB Spacegray',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1312,
    priceDiscount: 1270,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-11-pro/spacegray/00.webp',
      'img/phones/apple-iphone-11-pro/spacegray/01.webp',
      'img/phones/apple-iphone-11-pro/spacegray/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-256gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 256GB Gold',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1776,
    priceDiscount: 1680,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-11-pro-max/gold/00.webp',
      'img/phones/apple-iphone-11-pro-max/gold/01.webp',
      'img/phones/apple-iphone-11-pro-max/gold/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-256gb-midnightgreen',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 256GB Midnightgreen',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1776,
    priceDiscount: 1680,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'midnightgreen',
    images: [
      'img/phones/apple-iphone-11-pro-max/midnightgreen/00.webp',
      'img/phones/apple-iphone-11-pro-max/midnightgreen/01.webp',
      'img/phones/apple-iphone-11-pro-max/midnightgreen/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-256gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 256GB Silver',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1776,
    priceDiscount: 1680,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-11-pro-max/silver/00.webp',
      'img/phones/apple-iphone-11-pro-max/silver/01.webp',
      'img/phones/apple-iphone-11-pro-max/silver/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-256gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 256GB Spacegray',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1776,
    priceDiscount: 1680,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-11-pro-max/spacegray/00.webp',
      'img/phones/apple-iphone-11-pro-max/spacegray/01.webp',
      'img/phones/apple-iphone-11-pro-max/spacegray/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-512gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 512GB Gold',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 2020,
    priceDiscount: 1930,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-11-pro-max/gold/00.webp',
      'img/phones/apple-iphone-11-pro-max/gold/01.webp',
      'img/phones/apple-iphone-11-pro-max/gold/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-512gb-midnightgreen',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 512GB Midnightgreen',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 2020,
    priceDiscount: 1930,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'midnightgreen',
    images: [
      'img/phones/apple-iphone-11-pro-max/midnightgreen/00.webp',
      'img/phones/apple-iphone-11-pro-max/midnightgreen/01.webp',
      'img/phones/apple-iphone-11-pro-max/midnightgreen/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-512gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 512GB Silver',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 2020,
    priceDiscount: 1930,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-11-pro-max/silver/00.webp',
      'img/phones/apple-iphone-11-pro-max/silver/01.webp',
      'img/phones/apple-iphone-11-pro-max/silver/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-512gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 512GB Spacegray',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 2020,
    priceDiscount: 1930,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-11-pro-max/spacegray/00.webp',
      'img/phones/apple-iphone-11-pro-max/spacegray/01.webp',
      'img/phones/apple-iphone-11-pro-max/spacegray/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-64gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 64GB Gold',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1480,
    priceDiscount: 1400,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-11-pro-max/gold/00.webp',
      'img/phones/apple-iphone-11-pro-max/gold/01.webp',
      'img/phones/apple-iphone-11-pro-max/gold/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-64gb-midnightgreen',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 64GB Midnightgreen',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1480,
    priceDiscount: 1400,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'midnightgreen',
    images: [
      'img/phones/apple-iphone-11-pro-max/midnightgreen/00.webp',
      'img/phones/apple-iphone-11-pro-max/midnightgreen/01.webp',
      'img/phones/apple-iphone-11-pro-max/midnightgreen/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-64gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 64GB Silver',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1480,
    priceDiscount: 1400,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-11-pro-max/silver/00.webp',
      'img/phones/apple-iphone-11-pro-max/silver/01.webp',
      'img/phones/apple-iphone-11-pro-max/silver/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-11-pro-max-64gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-11-pro-max',
    name: 'Apple iPhone 11 Pro Max 64GB Spacegray',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1480,
    priceDiscount: 1400,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-11-pro-max/spacegray/00.webp',
      'img/phones/apple-iphone-11-pro-max/spacegray/01.webp',
      'img/phones/apple-iphone-11-pro-max/spacegray/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED",
    resolution: '2688х1242',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-32gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-7',
    name: 'Apple iPhone 7 32GB Black',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 400,
    priceDiscount: 375,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-7/black/00.webp',
      'img/phones/apple-iphone-7/black/01.webp',
      'img/phones/apple-iphone-7/black/02.webp',
      'img/phones/apple-iphone-7/black/03.webp',
      'img/phones/apple-iphone-7/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A10',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-32gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-7',
    name: 'Apple iPhone 7 32GB Gold',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 400,
    priceDiscount: 375,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-7/gold/00.webp',
      'img/phones/apple-iphone-7/gold/01.webp',
      'img/phones/apple-iphone-7/gold/02.webp',
      'img/phones/apple-iphone-7/gold/03.webp',
      'img/phones/apple-iphone-7/gold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A10',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-32gb-rosegold',
    category: 'phones',
    namespaceId: 'apple-iphone-7',
    name: 'Apple iPhone 7 32GB Rosegold',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 400,
    priceDiscount: 375,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'rosegold',
    images: [
      'img/phones/apple-iphone-7/rosegold/00.webp',
      'img/phones/apple-iphone-7/rosegold/01.webp',
      'img/phones/apple-iphone-7/rosegold/02.webp',
      'img/phones/apple-iphone-7/rosegold/03.webp',
      'img/phones/apple-iphone-7/rosegold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A10',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-32gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-7',
    name: 'Apple iPhone 7 32GB Silver',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 400,
    priceDiscount: 375,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-7/silver/00.webp',
      'img/phones/apple-iphone-7/silver/01.webp',
      'img/phones/apple-iphone-7/silver/02.webp',
      'img/phones/apple-iphone-7/silver/03.webp',
      'img/phones/apple-iphone-7/silver/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A10',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-plus-32gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-7-plus',
    name: 'Apple iPhone 7 Plus 32GB Black',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 540,
    priceDiscount: 500,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-7-plus/black/00.webp',
      'img/phones/apple-iphone-7-plus/black/01.webp',
      'img/phones/apple-iphone-7-plus/black/02.webp',
      'img/phones/apple-iphone-7-plus/black/03.webp',
      'img/phones/apple-iphone-7-plus/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.5' IPS",
    resolution: '1920x1080',
    processor: 'Apple A10',
    ram: '3GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-plus-32gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-7-plus',
    name: 'Apple iPhone 7 Plus 32GB Gold',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 540,
    priceDiscount: 500,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-7-plus/gold/00.webp',
      'img/phones/apple-iphone-7-plus/gold/01.webp',
      'img/phones/apple-iphone-7-plus/gold/02.webp',
      'img/phones/apple-iphone-7-plus/gold/03.webp',
      'img/phones/apple-iphone-7-plus/gold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.5' IPS",
    resolution: '1920x1080',
    processor: 'Apple A10',
    ram: '3GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-plus-32gb-rosegold',
    category: 'phones',
    namespaceId: 'apple-iphone-7-plus',
    name: 'Apple iPhone 7 Plus 32GB Rosegold',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 540,
    priceDiscount: 500,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'rosegold',
    images: [
      'img/phones/apple-iphone-7-plus/rosegold/00.webp',
      'img/phones/apple-iphone-7-plus/rosegold/01.webp',
      'img/phones/apple-iphone-7-plus/rosegold/02.webp',
      'img/phones/apple-iphone-7-plus/rosegold/03.webp',
      'img/phones/apple-iphone-7-plus/rosegold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.5' IPS",
    resolution: '1920x1080',
    processor: 'Apple A10',
    ram: '3GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-7-plus-32gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-7-plus',
    name: 'Apple iPhone 7 Plus 32GB Silver',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 540,
    priceDiscount: 500,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-7-plus/silver/00.webp',
      'img/phones/apple-iphone-7-plus/silver/01.webp',
      'img/phones/apple-iphone-7-plus/silver/02.webp',
      'img/phones/apple-iphone-7-plus/silver/03.webp',
      'img/phones/apple-iphone-7-plus/silver/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.5' IPS",
    resolution: '1920x1080',
    processor: 'Apple A10',
    ram: '3GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-8-64gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-8',
    name: 'Apple iPhone 8 64GB Gold',
    capacityAvailable: ['64GB'],
    capacity: '64GB',
    priceRegular: 600,
    priceDiscount: 550,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-8/gold/00.webp',
      'img/phones/apple-iphone-8/gold/01.webp',
      'img/phones/apple-iphone-8/gold/02.webp',
      'img/phones/apple-iphone-8/gold/03.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A11 Bionic',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-8-64gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-8',
    name: 'Apple iPhone 8 64GB Silver',
    capacityAvailable: ['64GB'],
    capacity: '64GB',
    priceRegular: 600,
    priceDiscount: 550,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-8/silver/00.webp',
      'img/phones/apple-iphone-8/silver/01.webp',
      'img/phones/apple-iphone-8/silver/02.webp',
      'img/phones/apple-iphone-8/silver/03.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A11 Bionic',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-8-64gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-8',
    name: 'Apple iPhone 8 64GB Space Gray',
    capacityAvailable: ['64GB'],
    capacity: '64GB',
    priceRegular: 600,
    priceDiscount: 550,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-8/spacegray/00.webp',
      'img/phones/apple-iphone-8/spacegray/01.webp',
      'img/phones/apple-iphone-8/spacegray/02.webp',
      'img/phones/apple-iphone-8/spacegray/03.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A11 Bionic',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-128gb-coral',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 128GB Coral',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '128GB',
    priceRegular: 880,
    priceDiscount: 815,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'coral',
    images: [
      'img/phones/apple-iphone-xr/coral/00.webp',
      'img/phones/apple-iphone-xr/coral/01.webp',
      'img/phones/apple-iphone-xr/coral/02.webp',
      'img/phones/apple-iphone-xr/coral/03.webp',
      'img/phones/apple-iphone-xr/coral/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-128gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 128GB Red',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '128GB',
    priceRegular: 880,
    priceDiscount: 815,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-xr/red/00.webp',
      'img/phones/apple-iphone-xr/red/01.webp',
      'img/phones/apple-iphone-xr/red/02.webp',
      'img/phones/apple-iphone-xr/red/03.webp',
      'img/phones/apple-iphone-xr/red/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-128gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 128GB White',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '128GB',
    priceRegular: 880,
    priceDiscount: 815,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-xr/white/00.webp',
      'img/phones/apple-iphone-xr/white/01.webp',
      'img/phones/apple-iphone-xr/white/02.webp',
      'img/phones/apple-iphone-xr/white/03.webp',
      'img/phones/apple-iphone-xr/white/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-128gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 128GB Yellow',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '128GB',
    priceRegular: 880,
    priceDiscount: 815,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-xr/yellow/00.webp',
      'img/phones/apple-iphone-xr/yellow/01.webp',
      'img/phones/apple-iphone-xr/yellow/02.webp',
      'img/phones/apple-iphone-xr/yellow/03.webp',
      'img/phones/apple-iphone-xr/yellow/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-64gb-coral',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 64GB Coral',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '64GB',
    priceRegular: 712,
    priceDiscount: 670,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'coral',
    images: [
      'img/phones/apple-iphone-xr/coral/00.webp',
      'img/phones/apple-iphone-xr/coral/01.webp',
      'img/phones/apple-iphone-xr/coral/02.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-64gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 64GB Red',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '64GB',
    priceRegular: 712,
    priceDiscount: 670,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-xr/red/00.webp',
      'img/phones/apple-iphone-xr/red/01.webp',
      'img/phones/apple-iphone-xr/red/02.webp',
      'img/phones/apple-iphone-xr/red/03.webp',
      'img/phones/apple-iphone-xr/red/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-64gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 64GB White',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '64GB',
    priceRegular: 712,
    priceDiscount: 670,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-xr/white/00.webp',
      'img/phones/apple-iphone-xr/white/01.webp',
      'img/phones/apple-iphone-xr/white/02.webp',
      'img/phones/apple-iphone-xr/white/03.webp',
      'img/phones/apple-iphone-xr/white/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xr-64gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-xr',
    name: 'Apple iPhone XR 64GB Yellow',
    capacityAvailable: ['64GB', '128GB'],
    capacity: '64GB',
    priceRegular: 712,
    priceDiscount: 670,
    colorsAvailable: ['white', 'yellow', 'red', 'coral'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-xr/yellow/00.webp',
      'img/phones/apple-iphone-xr/yellow/01.webp',
      'img/phones/apple-iphone-xr/yellow/02.webp',
      'img/phones/apple-iphone-xr/yellow/03.webp',
      'img/phones/apple-iphone-xr/yellow/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792х828',
    processor: 'Apple A12 Bionic',
    ram: '3GB',
    camera: '12 Mp + 7 MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-256gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-xs',
    name: 'Apple iPhone XS 256GB Gold',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '256GB',
    priceRegular: 960,
    priceDiscount: 900,
    colorsAvailable: ['spacegray', 'gold'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-xs/gold/00.webp',
      'img/phones/apple-iphone-xs/gold/01.webp',
      'img/phones/apple-iphone-xs/gold/02.webp',
      'img/phones/apple-iphone-xs/gold/03.webp',
      'img/phones/apple-iphone-xs/gold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-256gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-xs',
    name: 'Apple iPhone XS 256GB Spacegray',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '256GB',
    priceRegular: 960,
    priceDiscount: 900,
    colorsAvailable: ['spacegray', 'gold'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-xs/spacegray/00.webp',
      'img/phones/apple-iphone-xs/spacegray/01.webp',
      'img/phones/apple-iphone-xs/spacegray/02.webp',
      'img/phones/apple-iphone-xs/spacegray/03.webp',
      'img/phones/apple-iphone-xs/spacegray/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-64gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-xs',
    name: 'Apple iPhone XS 64GB Gold',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '64GB',
    priceRegular: 760,
    priceDiscount: 720,
    colorsAvailable: ['spacegray', 'gold'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-xs/gold/00.webp',
      'img/phones/apple-iphone-xs/gold/01.webp',
      'img/phones/apple-iphone-xs/gold/02.webp',
      'img/phones/apple-iphone-xs/gold/03.webp',
      'img/phones/apple-iphone-xs/gold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-64gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-xs',
    name: 'Apple iPhone XS 64GB Spacegray',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '64GB',
    priceRegular: 760,
    priceDiscount: 720,
    colorsAvailable: ['spacegray', 'gold'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-xs/spacegray/00.webp',
      'img/phones/apple-iphone-xs/spacegray/01.webp',
      'img/phones/apple-iphone-xs/spacegray/02.webp',
      'img/phones/apple-iphone-xs/spacegray/03.webp',
      'img/phones/apple-iphone-xs/spacegray/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "5.8' OLED",
    resolution: '2436х1125',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-max-256gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-xs-max',
    name: 'Apple iPhone XS Max 256GB Gold',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1080,
    priceDiscount: 1000,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-xs-max/gold/00.webp',
      'img/phones/apple-iphone-xs-max/gold/01.webp',
      'img/phones/apple-iphone-xs-max/gold/02.webp',
      'img/phones/apple-iphone-xs-max/gold/03.webp',
      'img/phones/apple-iphone-xs-max/gold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED (Super Retina HD)",
    resolution: '2688х1242',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 7MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-max-256gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-xs-max',
    name: 'Apple iPhone XS Max 256GB Silver',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1080,
    priceDiscount: 1000,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-xs-max/silver/00.webp',
      'img/phones/apple-iphone-xs-max/silver/01.webp',
      'img/phones/apple-iphone-xs-max/silver/02.webp',
      'img/phones/apple-iphone-xs-max/silver/03.webp',
      'img/phones/apple-iphone-xs-max/silver/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED (Super Retina HD)",
    resolution: '2688х1242',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 7MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-max-256gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-xs-max',
    name: 'Apple iPhone XS Max 256GB Spacegray',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1080,
    priceDiscount: 1000,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-xs-max/spacegray/00.webp',
      'img/phones/apple-iphone-xs-max/spacegray/01.webp',
      'img/phones/apple-iphone-xs-max/spacegray/02.webp',
      'img/phones/apple-iphone-xs-max/spacegray/03.webp',
      'img/phones/apple-iphone-xs-max/spacegray/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED (Super Retina HD)",
    resolution: '2688х1242',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 7MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-max-64gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-xs-max',
    name: 'Apple iPhone XS Max 64GB Gold',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '64GB',
    priceRegular: 960,
    priceDiscount: 900,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-xs-max/gold/00.webp',
      'img/phones/apple-iphone-xs-max/gold/01.webp',
      'img/phones/apple-iphone-xs-max/gold/02.webp',
      'img/phones/apple-iphone-xs-max/gold/03.webp',
      'img/phones/apple-iphone-xs-max/gold/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED (Super Retina HD)",
    resolution: '2688х1242',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 7MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-max-64gb-silver',
    category: 'phones',
    namespaceId: 'apple-iphone-xs-max',
    name: 'Apple iPhone XS Max 64GB Silver',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '64GB',
    priceRegular: 960,
    priceDiscount: 900,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'silver',
    images: [
      'img/phones/apple-iphone-xs-max/silver/00.webp',
      'img/phones/apple-iphone-xs-max/silver/01.webp',
      'img/phones/apple-iphone-xs-max/silver/02.webp',
      'img/phones/apple-iphone-xs-max/silver/03.webp',
      'img/phones/apple-iphone-xs-max/silver/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED (Super Retina HD)",
    resolution: '2688х1242',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 7MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },

  {
    id: 'apple-iphone-xs-max-64gb-spacegray',
    category: 'phones',
    namespaceId: 'apple-iphone-xs-max',
    name: 'Apple iPhone XS Max 64GB Spacegray',
    capacityAvailable: ['64GB', '256GB'],
    capacity: '64GB',
    priceRegular: 960,
    priceDiscount: 900,
    colorsAvailable: ['spacegray', 'gold', 'silver'],
    color: 'spacegray',
    images: [
      'img/phones/apple-iphone-xs-max/spacegray/00.webp',
      'img/phones/apple-iphone-xs-max/spacegray/01.webp',
      'img/phones/apple-iphone-xs-max/spacegray/02.webp',
      'img/phones/apple-iphone-xs-max/spacegray/03.webp',
      'img/phones/apple-iphone-xs-max/spacegray/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.5' OLED (Super Retina HD)",
    resolution: '2688х1242',
    processor: 'Apple A12 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 7MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-14-128gb-midnight',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 128GB Midnight',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '128GB',
    priceRegular: 1056,
    priceDiscount: 980,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'midnight',
    images: [
      'img/phones/apple-iphone-14/midnight/00.webp',
      'img/phones/apple-iphone-14/midnight/01.webp',
      'img/phones/apple-iphone-14/midnight/02.webp',
      'img/phones/apple-iphone-14/midnight/03.webp',
      'img/phones/apple-iphone-14/midnight/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-256gb-midnight',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 256GB Midnight',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1200,
    priceDiscount: 1160,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'midnight',
    images: [
      'img/phones/apple-iphone-14/midnight/00.webp',
      'img/phones/apple-iphone-14/midnight/01.webp',
      'img/phones/apple-iphone-14/midnight/02.webp',
      'img/phones/apple-iphone-14/midnight/03.webp',
      'img/phones/apple-iphone-14/midnight/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-512gb-midnight',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 512GB Midnight',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 1466,
    priceDiscount: 1378,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'midnight',
    images: [
      'img/phones/apple-iphone-14/midnight/00.webp',
      'img/phones/apple-iphone-14/midnight/01.webp',
      'img/phones/apple-iphone-14/midnight/02.webp',
      'img/phones/apple-iphone-14/midnight/03.webp',
      'img/phones/apple-iphone-14/midnight/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-128gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 128GB Yellow',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '128GB',
    priceRegular: 1056,
    priceDiscount: 980,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-14/yellow/00.webp',
      'img/phones/apple-iphone-14/yellow/01.webp',
      'img/phones/apple-iphone-14/yellow/02.webp',
      'img/phones/apple-iphone-14/yellow/03.webp',
      'img/phones/apple-iphone-14/yellow/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-256gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 256GB Yellow',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1200,
    priceDiscount: 1160,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-14/yellow/00.webp',
      'img/phones/apple-iphone-14/yellow/01.webp',
      'img/phones/apple-iphone-14/yellow/02.webp',
      'img/phones/apple-iphone-14/yellow/03.webp',
      'img/phones/apple-iphone-14/yellow/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-512gb-yellow',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 512GB Yellow',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 1466,
    priceDiscount: 1378,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'yellow',
    images: [
      'img/phones/apple-iphone-14/yellow/00.webp',
      'img/phones/apple-iphone-14/yellow/01.webp',
      'img/phones/apple-iphone-14/yellow/02.webp',
      'img/phones/apple-iphone-14/yellow/03.webp',
      'img/phones/apple-iphone-14/yellow/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-128gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 128GB Purple',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '128GB',
    priceRegular: 1056,
    priceDiscount: 980,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-14/purple/00.webp',
      'img/phones/apple-iphone-14/purple/01.webp',
      'img/phones/apple-iphone-14/purple/02.webp',
      'img/phones/apple-iphone-14/purple/03.webp',
      'img/phones/apple-iphone-14/purple/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-256gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 256GB Purple',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '256GB',
    priceRegular: 1256,
    priceDiscount: 1180,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-14/purple/00.webp',
      'img/phones/apple-iphone-14/purple/01.webp',
      'img/phones/apple-iphone-14/purple/02.webp',
      'img/phones/apple-iphone-14/purple/03.webp',
      'img/phones/apple-iphone-14/purple/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-512gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-14',
    name: 'Apple iPhone 14 512GB Purple',
    capacityAvailable: ['128GB', '256GB', '512GB'],
    capacity: '512GB',
    priceRegular: 1600,
    priceDiscount: 1450,
    colorsAvailable: ['midnight', 'yellow', 'purple'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-14/purple/00.webp',
      'img/phones/apple-iphone-14/purple/01.webp',
      'img/phones/apple-iphone-14/purple/02.webp',
      'img/phones/apple-iphone-14/purple/03.webp',
      'img/phones/apple-iphone-14/purple/04.webp',
    ],
    description: [
      {
        title: 'Wonderfull',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-128gb-spaceblack',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 128GB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '128GB',
    priceRegular: 1056,
    priceDiscount: 980,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'spaceblack',
    images: [
      'img/phones/apple-iphone-14-pro/spaceblack/00.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/01.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/02.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/03.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-256gb-spaceblack',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 256GB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '256GB',
    priceRegular: 1200,
    priceDiscount: 1160,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'spaceblack',
    images: [
      'img/phones/apple-iphone-14-pro/spaceblack/00.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/01.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/02.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/03.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-512gb-spaceblack',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 512GB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '512GB',
    priceRegular: 1466,
    priceDiscount: 1378,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'spaceblack',
    images: [
      'img/phones/apple-iphone-14-pro/spaceblack/00.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/01.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/02.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/03.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-1tb-spaceblack',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 1TB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '1TB',
    priceRegular: 1740,
    priceDiscount: 1520,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'spaceblack',
    images: [
      'img/phones/apple-iphone-14-pro/spaceblack/00.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/01.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/02.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/03.webp',
      'img/phones/apple-iphone-14-pro/spaceblack/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP + 12Mp',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-12-64gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 64GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-12/black/00.webp',
      'img/phones/apple-iphone-12/black/01.webp',
      'img/phones/apple-iphone-12/black/02.webp',
      'img/phones/apple-iphone-12/black/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-128gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 128GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-12/black/00.webp',
      'img/phones/apple-iphone-12/black/01.webp',
      'img/phones/apple-iphone-12/black/02.webp',
      'img/phones/apple-iphone-12/black/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-256gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 256GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1180,
    priceDiscount: 1100,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-12/black/00.webp',
      'img/phones/apple-iphone-12/black/01.webp',
      'img/phones/apple-iphone-12/black/02.webp',
      'img/phones/apple-iphone-12/black/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-64gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 64GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-12/purple/00.webp',
      'img/phones/apple-iphone-12/purple/01.webp',
      'img/phones/apple-iphone-12/purple/02.webp',
      'img/phones/apple-iphone-12/purple/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-128gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 128GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-12/purple/00.webp',
      'img/phones/apple-iphone-12/purple/01.webp',
      'img/phones/apple-iphone-12/purple/02.webp',
      'img/phones/apple-iphone-12/purple/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-256gb-purple',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 256GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1180,
    priceDiscount: 1100,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-12/purple/00.webp',
      'img/phones/apple-iphone-12/purple/01.webp',
      'img/phones/apple-iphone-12/purple/02.webp',
      'img/phones/apple-iphone-12/purple/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-64gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 64GB Red',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-12/red/00.webp',
      'img/phones/apple-iphone-12/red/01.webp',
      'img/phones/apple-iphone-12/red/02.webp',
      'img/phones/apple-iphone-12/red/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-128gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 128GB Red',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-12/red/00.webp',
      'img/phones/apple-iphone-12/red/01.webp',
      'img/phones/apple-iphone-12/red/02.webp',
      'img/phones/apple-iphone-12/red/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-256gb-red',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 256GB Red',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1180,
    priceDiscount: 1100,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'red',
    images: [
      'img/phones/apple-iphone-12/red/00.webp',
      'img/phones/apple-iphone-12/red/01.webp',
      'img/phones/apple-iphone-12/red/02.webp',
      'img/phones/apple-iphone-12/red/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-64gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 64GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-12/white/00.webp',
      'img/phones/apple-iphone-12/white/01.webp',
      'img/phones/apple-iphone-12/white/02.webp',
      'img/phones/apple-iphone-12/white/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-128gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 128GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-12/white/00.webp',
      'img/phones/apple-iphone-12/white/01.webp',
      'img/phones/apple-iphone-12/white/02.webp',
      'img/phones/apple-iphone-12/white/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-12-256gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-12',
    name: 'Apple iPhone 12 256GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1180,
    priceDiscount: 1100,
    colorsAvailable: ['black', 'white', 'purple', 'red'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-12/white/00.webp',
      'img/phones/apple-iphone-12/white/01.webp',
      'img/phones/apple-iphone-12/white/02.webp',
      'img/phones/apple-iphone-12/white/03.webp',
    ],
    description: [
      {
        title: 'Blast past fast.',
        text: [
          '5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.',
        ],
      },
      {
        title: 'A14 Bionic chip. The only thing even close was our last chip.',
        text: [
          'A14 Bionic is the first 5-nanometer chip in the industry, with advanced components literally atoms wide. Forty percent more transistors rev up speeds while increasing efficiency for great battery life. And a new ISP powers Dolby Vision recording — something no pro movie camera, let alone any other phone, can do.',
        ],
      },
      {
        title: 'Night mode comes to all your cameras.',
        text: [
          'Low light is now a highlight. From dimly lit restaurants to moonlit beaches, the new Night mode delivers natural low-light shots — automatically.',
        ],
      },
    ],
    screen: "6.1' OLED",
    resolution: '2532x1170',
    processor: 'Apple A14 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-iphone-13-mini-64gb-midnight',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 64GB Midnight',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'midnight',
    images: [
      'img/phones/apple-iphone-13-mini/midnight/00.webp',
      'img/phones/apple-iphone-13-mini/midnight/01.webp',
      'img/phones/apple-iphone-13-mini/midnight/02.webp',
      'img/phones/apple-iphone-13-mini/midnight/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-128gb-midnight',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 128GB Midnight',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'midnight',
    images: [
      'img/phones/apple-iphone-13-mini/midnight/00.webp',
      'img/phones/apple-iphone-13-mini/midnight/01.webp',
      'img/phones/apple-iphone-13-mini/midnight/02.webp',
      'img/phones/apple-iphone-13-mini/midnight/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-256gb-midnight',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 256GB Midnight',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1180,
    priceDiscount: 1100,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'midnight',
    images: [
      'img/phones/apple-iphone-13-mini/midnight/00.webp',
      'img/phones/apple-iphone-13-mini/midnight/01.webp',
      'img/phones/apple-iphone-13-mini/midnight/02.webp',
      'img/phones/apple-iphone-13-mini/midnight/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-64gb-pink',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 64GB Pink',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'pink',
    images: [
      'img/phones/apple-iphone-13-mini/pink/00.webp',
      'img/phones/apple-iphone-13-mini/pink/01.webp',
      'img/phones/apple-iphone-13-mini/pink/02.webp',
      'img/phones/apple-iphone-13-mini/pink/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-128gb-pink',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 128GB Pink',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'pink',
    images: [
      'img/phones/apple-iphone-13-mini/pink/00.webp',
      'img/phones/apple-iphone-13-mini/pink/01.webp',
      'img/phones/apple-iphone-13-mini/pink/02.webp',
      'img/phones/apple-iphone-13-mini/pink/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-256gb-pink',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 256GB Pink',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 1180,
    priceDiscount: 1100,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'pink',
    images: [
      'img/phones/apple-iphone-13-mini/pink/00.webp',
      'img/phones/apple-iphone-13-mini/pink/01.webp',
      'img/phones/apple-iphone-13-mini/pink/02.webp',
      'img/phones/apple-iphone-13-mini/pink/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-64gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 64GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-13-mini/white/00.webp',
      'img/phones/apple-iphone-13-mini/white/01.webp',
      'img/phones/apple-iphone-13-mini/white/02.webp',
      'img/phones/apple-iphone-13-mini/white/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-128gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 128GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-13-mini/white/00.webp',
      'img/phones/apple-iphone-13-mini/white/01.webp',
      'img/phones/apple-iphone-13-mini/white/02.webp',
      'img/phones/apple-iphone-13-mini/white/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-256gb-white',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 256GB White',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 999,
    priceDiscount: 949,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'white',
    images: [
      'img/phones/apple-iphone-13-mini/white/00.webp',
      'img/phones/apple-iphone-13-mini/white/01.webp',
      'img/phones/apple-iphone-13-mini/white/02.webp',
      'img/phones/apple-iphone-13-mini/white/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-64gb-blue',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 64GB Blue',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '64GB',
    priceRegular: 880,
    priceDiscount: 800,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'blue',
    images: [
      'img/phones/apple-iphone-13-mini/blue/00.webp',
      'img/phones/apple-iphone-13-mini/blue/01.webp',
      'img/phones/apple-iphone-13-mini/blue/02.webp',
      'img/phones/apple-iphone-13-mini/blue/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-128gb-blue',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 128GB Blue',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 980,
    priceDiscount: 900,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'blue',
    images: [
      'img/phones/apple-iphone-13-mini/blue/00.webp',
      'img/phones/apple-iphone-13-mini/blue/01.webp',
      'img/phones/apple-iphone-13-mini/blue/02.webp',
      'img/phones/apple-iphone-13-mini/blue/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-mini-256gb-blue',
    category: 'phones',
    namespaceId: 'apple-iphone-13-mini',
    name: 'Apple iPhone 13 Mini 256GB Blue',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '256GB',
    priceRegular: 999,
    priceDiscount: 949,
    colorsAvailable: ['midnight', 'white', 'blue', 'pink'],
    color: 'blue',
    images: [
      'img/phones/apple-iphone-13-mini/blue/00.webp',
      'img/phones/apple-iphone-13-mini/blue/01.webp',
      'img/phones/apple-iphone-13-mini/blue/02.webp',
      'img/phones/apple-iphone-13-mini/blue/03.webp',
    ],
    description: [
      {
        title: 'Your new superpower.',
        text: [
          'A15 Bionic, the fastest chip ever in a smartphone. Super Retina XDR display with ProMotion. Durable Ceramic Shield with 4x better drop performance. New Night mode on all cameras. It’s the ultimate iPhone, powered by the ultimate chip.',
        ],
      },
      {
        title: 'A15 Bionic chip. Super power. Mini sized.',
        text: [
          'The A15 Bionic chip is the fastest chip ever in a smartphone. It powers everything from photography to gaming. And the incredible Machine Learning accelerators allow you to experience augmented reality like never before.',
        ],
      },
      {
        title: 'Amazing Camera. No Pro Required.',
        text: [
          'iPhone 13 Mini takes stunning photos and videos with its advanced dual-camera system, with a new Night mode on all cameras. And Photographic Styles personalizes your photos in the moment for a beautiful look.',
        ],
      },
    ],
    screen: "5.4' Super Retina XDR",
    resolution: '2532x1170',
    processor: 'Apple A15 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp',
    zoom: 'Optical, 2x; Digital, 5x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-128gb-sierrablue',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 128GB Sierra Blue',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '128GB',
    priceRegular: 1286,
    priceDiscount: 1260,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'sierrablue',
    images: [
      'img/phones/apple-iphone-13-pro-max/sierrablue/00.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/01.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/02.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-256gb-sierrablue',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 256GB Sierra Blue',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '256GB',
    priceRegular: 1399,
    priceDiscount: 1379,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'sierrablue',
    images: [
      'img/phones/apple-iphone-13-pro-max/sierrablue/00.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/01.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/02.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-512gb-sierrablue',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 512GB Sierra Blue',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '512GB',
    priceRegular: 1426,
    priceDiscount: 1371,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'sierrablue',
    images: [
      'img/phones/apple-iphone-13-pro-max/sierrablue/00.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/01.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/02.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-1tb-sierrablue',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 1TB Sierra Blue',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '1TB',
    priceRegular: 1700,
    priceDiscount: 1540,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'sierrablue',
    images: [
      'img/phones/apple-iphone-13-pro-max/sierrablue/00.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/01.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/02.webp',
      'img/phones/apple-iphone-13-pro-max/sierrablue/03.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP + 12Mp',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-128gb-graphite',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 128GB Graphite',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '128GB',
    priceRegular: 1286,
    priceDiscount: 1260,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'graphite',
    images: [
      'img/phones/apple-iphone-13-pro-max/graphite/00.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/01.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/02.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-256gb-graphite',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 256GB Graphite',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '256GB',
    priceRegular: 1399,
    priceDiscount: 1379,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'graphite',
    images: [
      'img/phones/apple-iphone-13-pro-max/graphite/00.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/01.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/02.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-512gb-graphite',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 512GB Graphite',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '512GB',
    priceRegular: 1426,
    priceDiscount: 1371,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'graphite',
    images: [
      'img/phones/apple-iphone-13-pro-max/graphite/00.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/01.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/02.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-1tb-graphite',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 1TB Graphite',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '1TB',
    priceRegular: 1700,
    priceDiscount: 1540,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'graphite',
    images: [
      'img/phones/apple-iphone-13-pro-max/graphite/00.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/01.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/02.webp',
      'img/phones/apple-iphone-13-pro-max/graphite/03.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP + 12Mp',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-128gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 128GB Gold',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '128GB',
    priceRegular: 1286,
    priceDiscount: 1260,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-13-pro-max/gold/00.webp',
      'img/phones/apple-iphone-13-pro-max/gold/01.webp',
      'img/phones/apple-iphone-13-pro-max/gold/02.webp',
      'img/phones/apple-iphone-13-pro-max/gold/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-256gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 256GB Gold',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '256GB',
    priceRegular: 1399,
    priceDiscount: 1379,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-13-pro-max/gold/00.webp',
      'img/phones/apple-iphone-13-pro-max/gold/01.webp',
      'img/phones/apple-iphone-13-pro-max/gold/02.webp',
      'img/phones/apple-iphone-13-pro-max/gold/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-512gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 512GB Gold',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '512GB',
    priceRegular: 1426,
    priceDiscount: 1371,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-13-pro-max/gold/00.webp',
      'img/phones/apple-iphone-13-pro-max/gold/01.webp',
      'img/phones/apple-iphone-13-pro-max/gold/02.webp',
      'img/phones/apple-iphone-13-pro-max/gold/03.webp',
    ],
    description: [
      {
        title: 'The Ultimate Pro Camera System',
        text: [
          "Introducing the first pro camera system that's also an iPhone — delivering 3x optical zoom, macro photography, Night mode portraits, and a new ProRes format for the highest-quality video ever in a smartphone. Get ready to shoot like a pro.",
        ],
      },
      {
        title: 'Cinematic Mode',
        text: [
          'Film like a pro with exclusive access to the depth-of-field effect of Cinema mode, now on both the Wide and Telephoto cameras. Add focus transitions for a creative look, and easily switch between cameras to capture more of the moment.',
        ],
      },
      {
        title: 'A15 Bionic',
        text: [
          'A15 Bionic is the fastest chip ever in a smartphone. It powers incredible experiences in photography, video, gaming, and more — all while delivering great battery life. And it enables the most advanced machine learning capabilities in any smartphone for next-level experiences.',
        ],
      },
      {
        title: 'ProMotion',
        text: [
          'ProMotion technology automatically adjusts the display to the movement on your screen, for more fluid scrolling, greater responsiveness, and smoother motion — and a battery that lasts all day.',
        ],
      },
    ],
    screen: "6.7' Super Retina XDR display",
    resolution: '2778x1284',
    processor: 'Apple A15 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12 Mp',
    zoom: 'Optical, 3x; Digital, up to 15x',
    cell: ['GSM', 'CDMA', 'HSPA', 'EVDO', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-13-pro-max-1tb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-13-pro-max',
    name: 'Apple iPhone 13 Pro Max 1TB Gold',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '1TB',
    priceRegular: 1700,
    priceDiscount: 1540,
    colorsAvailable: ['graphite', 'gold', 'sierrablue'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-13-pro-max/gold/00.webp',
      'img/phones/apple-iphone-13-pro-max/gold/01.webp',
      'img/phones/apple-iphone-13-pro-max/gold/02.webp',
      'img/phones/apple-iphone-13-pro-max/gold/03.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP + 12Mp',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-128gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 128GB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '128GB',
    priceRegular: 1056,
    priceDiscount: 980,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-14-pro/gold/00.webp',
      'img/phones/apple-iphone-14-pro/gold/01.webp',
      'img/phones/apple-iphone-14-pro/gold/02.webp',
      'img/phones/apple-iphone-14-pro/gold/03.webp',
      'img/phones/apple-iphone-14-pro/gold/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-256gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 256GB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '256GB',
    priceRegular: 1200,
    priceDiscount: 1160,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-14-pro/gold/00.webp',
      'img/phones/apple-iphone-14-pro/gold/01.webp',
      'img/phones/apple-iphone-14-pro/gold/02.webp',
      'img/phones/apple-iphone-14-pro/gold/03.webp',
      'img/phones/apple-iphone-14-pro/gold/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-512gb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 512GB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '512GB',
    priceRegular: 1466,
    priceDiscount: 1378,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-14-pro/gold/00.webp',
      'img/phones/apple-iphone-14-pro/gold/01.webp',
      'img/phones/apple-iphone-14-pro/gold/02.webp',
      'img/phones/apple-iphone-14-pro/gold/03.webp',
      'img/phones/apple-iphone-14-pro/gold/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
  {
    id: 'apple-iphone-14-pro-1tb-gold',
    category: 'phones',
    namespaceId: 'apple-iphone-14-pro',
    name: 'Apple iPhone 14 Pro 1TB Space Black',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB'],
    capacity: '1TB',
    priceRegular: 1740,
    priceDiscount: 1520,
    colorsAvailable: ['spaceblack', 'gold'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-14-pro/gold/00.webp',
      'img/phones/apple-iphone-14-pro/gold/01.webp',
      'img/phones/apple-iphone-14-pro/gold/02.webp',
      'img/phones/apple-iphone-14-pro/gold/03.webp',
      'img/phones/apple-iphone-14-pro/gold/04.webp',
    ],
    description: [
      {
        title: 'And then was a Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' OLED (Super Retina XDR)",
    resolution: '2556x1179',
    processor: 'Apple A16 Bionic',
    ram: '6GB',
    camera: '48 Mp + 12 Mp + 12MP + 12Mp',
    zoom: 'Digital 5x, Optical 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE', '5G'],
  },
];

function PageCatalog() {
  const [quantityPerPage, setQuantityPerPage] = useState<SelectOptions | string>('4');
  const [contentPage, setContentPage] = useState<Phone[]>([]);
  const [buttonsNumber, setButtonsNumber] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const useEffectExecuted = useRef(false);

  useEffect(() => {
    setPageNumber(1);
  }, [quantityPerPage]);

  useEffect(() => {
    setButtonsNumber([]);

    if (!useEffectExecuted.current) {
      useEffectExecuted.current = true;
      return;
    }

    const tryToChangeToNumber = Number(quantityPerPage);
    if (!Number.isNaN(tryToChangeToNumber)) {
      const possiblePerPage = Math.ceil(data.length / Number(quantityPerPage));

      const newArr = [];
      let cont = 0;

      for (let i = 0; i < possiblePerPage; i += 1) {
        newArr.push(data.slice(cont, Number(quantityPerPage) + cont));
        cont += Number(quantityPerPage);

        setButtonsNumber(state => [...state, i + 1]);
      }

      setContentPage(newArr[pageNumber - 1]);
    } else {
      setContentPage(data);
    }
  }, [quantityPerPage, pageNumber]);

  return (
    <StyledPageCatalog className="page-catalog">
      <div className="top-section">
        <h1 className="top-section__title">Mobile Phones</h1>
        <h2 className="top-section__subtitle">95 models</h2>
      </div>
      <div className="select">
        <div className="select__wrapper">
          <h1 className="select__label">Sort By</h1>
          <select className="select__box select__box--selected">
            <option>Newest</option>
            <option>Alphabetically</option>
            <option>Cheapest</option>
          </select>
        </div>
        <div className="select__wrapper">
          <h1 className="select__label">Items on page</h1>

          <SelectItensPerPage
            quantityPerPage={quantityPerPage}
            setQuantityPerPage={setQuantityPerPage}
          />
        </div>
      </div>
      <div className="list">
        {contentPage && contentPage.map(item => <ProductCard phone={item} />)}
      </div>

      <div className="pagination">
        <button
          type="button"
          className={`pagination__button pagination__button--isarrow ${pageNumber === 1 || quantityPerPage === 'all' ? 'pagination__button--hidden' : ''}`}
          onClick={() => setPageNumber(state => state - 1)}
        >
          &lt;
        </button>

        {buttonsNumber.map(number => (
          <button
            key={number}
            type="button"
            className={`pagination__button ${pageNumber === number ? 'pagination__button--filled' : ''}`}
            onClick={() => setPageNumber(number)}
          >
            {number}
          </button>
        ))}

        <button
          type="button"
          className={`pagination__button pagination__button--isarrow ${pageNumber === buttonsNumber.length || quantityPerPage === 'all' ? 'pagination__button--hidden' : ''}`}
          onClick={() => setPageNumber(state => state + 1)}
        >
          &gt;
        </button>
      </div>
    </StyledPageCatalog>
  );
}

export default PageCatalog;
