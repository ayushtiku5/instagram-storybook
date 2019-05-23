import React from 'react';

import { storiesOf } from '@storybook/react';
import {users,profilePics,defaultPic} from '../index'
import Button from '../components/Button';
import Image from '../components/Image';
import InputField from '../components/InputField';
import Profile from '../components/Profile';
import Form from '../components/Form';


storiesOf('Components|Button', module)
  .addDecorator(storyFn => <div style={{height: '50px', width: '70px'}}>{storyFn()}</div>)
  .add('Normal button', () => (
      <Button content = "click" type = "button"  />
    
  ))
  .add('Form button', () => (
      <Button content = "submit" type = "submit"  />
    
  ));

storiesOf('Components|Image',module)
  .add('Square image', () => (
    <Image isRounded={false} url="https://pbs.twimg.com/profile_images/612008607152877572/OzTVFN9K_400x400.jpg" alt="profile picture" />
  ))
  .add('Round image', () => (
    <Image isRounded={true} url="https://pbs.twimg.com/profile_images/612008607152877572/OzTVFN9K_400x400.jpg" alt="profile picture" />
  ));

storiesOf('Components|Input Field',module)
  .addDecorator(storyFn => <div style = {{height: '50px', width: '200px'}}>{storyFn()}</div>)
  .add('Text field', () => (
    
      <InputField label="username"/>
    
  ))
  .add('Password field', () => (
      <InputField label="password"/>
    
  ));

storiesOf('Components|Profile',module)
  .add('Profile', () => (
    <Profile user={users[0].username} profilePic={profilePics[users[0].username]} defaultPic={defaultPic}/>
  ))
  .add('different user',() => (
    <Profile user={users[1].username} profilePic={profilePics[users[1].username]} defaultPic={defaultPic}/>
  ))
  .add('No profile picture',() => (
    <Profile user={users[3].username} defaultPic={defaultPic}/>
  ));
 
storiesOf('Components|Form',module)
  .addDecorator(storyFn => <div style={{height: '315px', width: '350px', border: '1px solid', backgroundColor: 'white'}}>{storyFn()}</div>)
  .add('Login form',() => (
      <Form credentials={['username','password']} submitContent="Login" />
    
  ))
  .add('Different fields', () => (
      <Form credentials={['email']} submitContent="Login" />
    
  ))
  .add('With error message',() => (
      <Form credentials={['username','password']} submitContent="Login" errorMessage="User not found" />
    
  ));