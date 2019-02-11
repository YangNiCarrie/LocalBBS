import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios';

import { Menu, Icon } from 'antd';

import { Living } from '../Living/Living';
import { Studying } from '../Studying/Studying';
import { Trading } from '../Trading/Trading';
import { Foods } from '../Foods/Foods';
import { Traveling } from '../Traveling/Traveling';

import './sideBar.less'
import SubMenu from 'antd/lib/menu/SubMenu';
import { ClickParam } from 'antd/lib/menu';
import { MainContent } from '../MainContent/MainContent';

export interface SideBarProps
{
    className?: string;
}

enum TabType
{
    Living = 'Living',
    Studying = 'Studying',
    Trading = 'Trading',
    Foods = 'Foods',
    Traveling = 'Traveling'
}

@observer
export class SideBar extends React.Component<SideBarProps>
{
    @observable
    private openedKey: TabType = TabType.Living;

    public render()
    {
        return(
            <div className="SideBar">
                <div className="menu">
                <Menu
                    onClick={this.onClick}
                    defaultSelectedKeys={['Living']}
                    defaultOpenKeys={['Living']}
                    onSelect={ this.onClick }
                    mode="inline"
                >
                    <Menu.Item key="Living" >
                        <span><Icon type="home" />Living</span>
                    </Menu.Item>
                    <Menu.Item key="Studying">
                        <span><Icon type="book" />Studying</span>
                    </Menu.Item>
                    <Menu.Item key="Trading">
                        <span><Icon type="swap" />Trading</span>
                    </Menu.Item>
                    <Menu.Item key="Foods">
                        <span><Icon type="smile" />Foods</span>
                    </Menu.Item>
                    <Menu.Item key="Traveling">
                        <span><Icon type="car" />Traveling</span>
                    </Menu.Item>
                </Menu>
                </div>
                <MainContent isOpened={ this.openedKey === TabType.Living }>
                    <Living />
                </MainContent>
                <MainContent isOpened={ this.openedKey === TabType.Studying }>
                    <Studying />
                </MainContent>
                <MainContent isOpened={ this.openedKey === TabType.Trading }>
                    <Trading />
                </MainContent>
                <MainContent isOpened={ this.openedKey === TabType.Foods }>
                    <Foods />
                </MainContent>
                <MainContent isOpened={ this.openedKey === TabType.Traveling }>
                    <Traveling />
                </MainContent>

            </div>
        );
    }

    @action
    private onClick = (e: ClickParam) =>
    {
        switch (e.key)
        {
            case 'Living':
                this.openedKey = TabType.Living;

            case 'Studying':
                this.openedKey = TabType.Studying;

            case 'Trading':
                this.openedKey = TabType.Trading;

            case 'Foods':
                this.openedKey = TabType.Foods;

            case 'Traveling':
                this.openedKey = TabType.Traveling;
        }
    }
}