import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './../css/status.scss';

export default class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.selectedStatus ? this.props.selectedStatus : null,
            open: false,
            options: ['todo', 'in-progress', 'done']
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleChange(event) {
        this.setState({status: event.target.value});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleOpen() {
        this.setState({open: true});
    }

    showOptions() {
        return (
            <Select
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value={this.state.status}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'status',
                    id: 'demo-controlled-open-select',
                  }}
                >
                {
                    this.state.options.map((option, index) => {
                        return <MenuItem key={index} value={option}>{option}</MenuItem>
                    })
                }
            </Select>
        )
    }

    render() {
        return (
            <form autoComplete="off">
              <FormControl>
                <InputLabel htmlFor="demo-controlled-open-select">select status</InputLabel>
                {
                    this.showOptions()
                }
              </FormControl>
            </form>
        );
    }
}