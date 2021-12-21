import React from 'react';
import { AppLayout } from 'components';
import { SubTitle } from 'styles/common';

const Profile = () => {
  return (
    <AppLayout>
      <SubTitle size={24}>프로필</SubTitle>
      <div>
        프로필 내용 입니다...
      </div>
    </AppLayout>
  )
}

export default Profile;