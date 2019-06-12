import React, {Component} from 'react';
import { toggleAvail } from '../actions/DayAction'
import { connect } from 'react-redux'
import Day from '../components/Day' 

class CalendarView extends Component {

    generateWeek = (curDate) => {
        return 
    }

    render() {

        return (
            <div id="calendarBody">
                {/*rename the state below */}
                <Day id="first" times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
            </div>
        );
    }
}

CalendarView.propTypes = {};

const mapStateToProps = (state) => {
    return {
        times: state
    }
}


export default connect(mapStateToProps)(CalendarView)
