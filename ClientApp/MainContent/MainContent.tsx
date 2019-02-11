import * as React from 'react';
import './mainContent.less';

export interface MainContentProps
{
    isOpened: boolean;
}

export class MainContent extends React.Component<MainContentProps>
{
   public render()
   {
       return(
            <div style={ { display: `${ this.props.isOpened ? 'inline-block' : 'none' }` } } className="MainContent">
                { this.props.children }
            </div>
       );
   }
}