import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import 'normalize.css';
import './../styles/index.less';


class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default connect()(Main);