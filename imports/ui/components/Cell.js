import React from 'react'
import { toggleAvail } from "../actions/DayAction";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleAvail(this.props.id);
        console.log(this.props.id,this.props.availability);
    };

    render() {
        return (
            <div>
            <Button variant='outline-primary' onClick={this.handleClick}
            style={{background: this.props.availability ? '#1CCAD8' : '#E2E2E2'}}>
            {this.props.id}
            </Button>
        </div>
        )
    }
}

export default connect(null,{ toggleAvail })(Cell)