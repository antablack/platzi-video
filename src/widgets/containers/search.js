import React, { Component } from "react";
import Search from "../components/search";
import { connect } from "react-redux";
import * as actions from "../../actions"
class SearchContainer extends Component {
    state = {
        value: "Luis Fonsi"
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(actions.searchAsyncEntities(this.input.value))
    }
    setRef = (element) => {
        this.input = element;
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    render() {
        return <Search
            setRef={this.setRef}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.value} />
    }

}

export default connect()(SearchContainer);
