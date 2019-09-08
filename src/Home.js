import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 5 }
    }

    handleCountChange = count => {
        this.setState({ count })
    }

    render() {

        return (
            <div>
                <div style={{ width: '150px' }}>
                    一级
                </div>
                <div style={{ width: '220px' }}>
                    二级
                </div>
                <div>
                    三级，不定大小
                </div>
            </div >
        )
    }
}


export default withRouter(Home);