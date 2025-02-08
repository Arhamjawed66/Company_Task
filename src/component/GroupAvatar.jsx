import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/avatar_img/img1.jpg" />
      <Avatar alt="Travis Howard" src="/avatar_img/img2.jpg" />
      <Avatar alt="Cindy Baker" src="/avatar_img/img3.jpg" />
      <Avatar alt="Agnes Walker" src="/avatar_img/img1.jpg" />
      <Avatar alt="Trevor Henderson" src="/avatar_img/img2.jpg" />
    </AvatarGroup>
  );
}
