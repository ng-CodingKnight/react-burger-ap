import React, { Fragment, Component} from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDraw : false
    }

    sideDrawCloseHandler = () => {
        this.setState({ showSideDraw : false})
    }

    openDrawerHandler = () => {
        this.setState({ showSideDraw : true})
    }

    render() {
        return (
            <Fragment>
                <Toolbar openDraw={this.openDrawerHandler}/>
                <SideDrawer open={this.state.showSideDraw} closed={this.sideDrawCloseHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout;