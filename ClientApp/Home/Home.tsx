import * as React from 'react';

import { SideBar } from '../SideBar/SideBar';
import './home.less';

export class HomePage extends React.Component
{
    public render()
    {
        return(
			<>
				<h1 className="header">Welcome</h1>
				<SideBar />
			</>
        );
	}
};
