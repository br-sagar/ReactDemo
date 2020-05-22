import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { FormControlLabel, ButtonGroup } from '@material-ui/core';

class ArrayDemo extends Component {
    state = {
        skills: ["Android", "VueJS"],
        textVal: "",
        checkedA: true,
        mapItem: false
    }


    componentDidMount() {

        for (let i = 0; i < 10; i++) {
            console.log(i)
            setTimeout(() => { console.log(i) }, 1000)

        }

    }
    handleChangeText = (e) => {
        this.setState({ textVal: e.target.value })
    }

    handleChange = (e) => {
        this.setState({
            checkedA: e.target.checked
        })
    }


    insertNewItem = () => {
        const items = this.state.skills
        if (this.state.textVal === '') return false
        items.push(this.state.textVal)
        this.setState({ skills: items, textVal: '' })
    }

    popItem = () => {
        const items = this.state.skills
        items.pop();
        this.setState({ skills: items, textVal: '' })
    }

    deleteItem = () => {
        const items = this.state.skills
        this.setState({ skills: items.filter(item => item !== this.state.textVal) })
    }

    mapItemTocard = _ => {
        this.setState({ mapItem: !this.state.mapItem })
    }


    render() {
        const { skills, checkedA } = this.state
        const items = checkedA === true ? skills.sort((a, b) => a > b ? 1 : -1) : skills;
        return (
            <React.Fragment>
                <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc' }}>
                    <div>
                        <FormControlLabel
                            label="Sort In Ascending Order"
                            control={<Switch
                                checked={this.state.checkedA}
                                onChange={this.handleChange}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />}>
                        </FormControlLabel>
                    </div>
                    <ul>
                        {items.map(item => <li key={items.findIndex(p => p === item)}>{item}</li>)}
                    </ul>
                    <div>
                        <TextField id="arrayItem" label="Enter Skills" variant="outlined" size="small" className="mb-1" color="primary" value={this.state.textVal} onChange={this.handleChangeText}></TextField><br />
                        <ButtonGroup color="primary" variant="outlined" aria-label="outlined primary button group">
                            <Button onClick={this.insertNewItem}>Add</Button>
                            <Button onClick={this.deleteItem}>Delete</Button>
                            <Button onClick={this.popItem}>Pop</Button>
                            <Button onClick={this.mapItemTocard}>Map Items</Button>
                        </ButtonGroup>
                    </div>

                    {this.state.mapItem === true ? <div > {items.map(item => <DisplayItems key={item} item={item} />)}</div> : null}
                </Container>
            </React.Fragment>
        );
    }
}

export function DisplayItems(props) {
    return (
        <Chip
            avatar={<Avatar>{props.item.substring(0, 1)}</Avatar>}
            label={props.item}
            clickable
            color="default"
            deleteIcon={<DoneIcon />}
            className="m-2"
        />
    )
}
export default ArrayDemo;