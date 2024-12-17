import * as React from 'react';
// import styles from './HelloWorld.module.scss';
import type { IHelloWorldProps } from './IHelloWorldProps';
import ChildClass from './SampleClass';
export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
  

    return (
    <>
    <p> I am learning spfx</p>
    <h1> Hello world!!!</h1>
    <ChildClass/>
    </>
    );
  }
}
