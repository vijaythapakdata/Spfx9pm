import * as React from 'react';
import styles from './FluentuiControls.module.scss';
import type { IFluentuiControlsProps } from './IFluentuiControlsProps';
import {  Checkbox, ChoiceGroup, ComboBox, Dropdown, Label, PrimaryButton, Rating, RatingSize, SearchBox, Slider, SpinButton, Stack, TextField, Toggle } from '@fluentui/react';
const stackTokens={childrenGap:10}

export default class FluentuiControls extends React.Component<IFluentuiControlsProps, {}> {
  public render(): React.ReactElement<IFluentuiControlsProps> {
    

    return (
     <>
     <p> Fluent UI Controls</p>
     <hr/>
     <button className={styles.button}> Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
     <PrimaryButton text='Save' iconProps={{iconName:'save'}}/>&nbsp;&nbsp;&nbsp;&nbsp;
     <PrimaryButton text='Edit' iconProps={{iconName:'edit'}}/>
     <hr/>
     <form>
      <SearchBox placeholder='search here....'/>
      <br/>
      <Label required>Full Name</Label>
      <TextField type='text' placeholder='Vijay thapak' iconProps={{iconName:'people'}}/>
      <Label>Email</Label>
      <TextField type='email' placeholder='vijaythapak2001@gmail.com' iconProps={{iconName:'mail'}}
      styles={{
        icon:{color:"blue"},
        root:{marginTop:10}
      }}/>
      <Label>Password</Label>
      <TextField type='password' canRevealPassword/>
      <Label> Upload File</Label>
      <TextField type='file'/>
      <Label>Address</Label>
      <TextField rows={5} multiline/>
      <Label>Salary</Label>
      <TextField prefix='$'/>
      <Label> Department</Label>
      <Dropdown placeholder='--select--'
      options={[
        {key:'IT',text:'IT'},
        {key:'HR',text:'HR'}
      ]}
      multiSelect
      />

<Label> Department</Label>
      <ComboBox placeholder='--select--'
      options={[
        {key:'IT',text:'IT'},
        {key:'HR',text:'HR'}
      ]}
    
      allowFreeInput
      autoComplete='on'
      />
      <Label>Gender</Label>
      <ChoiceGroup options={[
        {key:'Male',text:'Male'},
        {key:'Female',text:'Female'}
      ]}/>
      <Label>Qualification</Label>
      <Stack tokens={stackTokens}>
      <Checkbox label='PHD'/>
      <Checkbox label='Post Graduation'/>
      <Checkbox label='Graduation'/>
      </Stack>
      <Label>Toggle</Label>
      <Toggle onText='ON'offText='OFF' defaultChecked/>
      <Toggle onText='ON'offText='OFF' disabled/>
      <Label>Ratings</Label>
      <Rating
      max={5}
      defaultRating={2}
      size={RatingSize.Large}
      />
      <Label>Slider</Label>
      <Slider min={1} max={100}/>
      <Label>Spin button</Label>
      <SpinButton min={0} max={100} step={5}/>
      {/* <Checkbox title='PHD'/> */}
     </form>
     </>
    );
  }
}
