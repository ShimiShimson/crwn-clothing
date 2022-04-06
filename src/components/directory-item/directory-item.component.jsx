import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';


const DirectoryItem = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(linkUrl);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
