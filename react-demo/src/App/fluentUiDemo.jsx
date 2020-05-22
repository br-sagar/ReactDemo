import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Slider, Label, Stack, MaskedTextField, DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets, ChoiceGroup, Dropdown, Toggle, DefaultButton, MessageBar, MessageBarType, MessageBarButton } from '@fluentui/react'
import { TextField } from '@fluentui/react/lib/TextField';
import { createTheme, Customizations, IDropdownOption, PrimaryButton, initializeIcons, IStackTokens } from '@fluentui/react'


const options: IChoiceGroupOption[] = [
    { key: "male", text: "Male" },
    { key: "female", text: "Female" },
    { key: "other", text: "Other" }
]




const tokens: IStackTokens = {
    childrenGap: 20,
    padding: 10
}

const topskills: IDropdownOption[] = [
    { key: "java", text: "Core Java" },
    { key: "advance-java", text: "Advanced Java" },
    { key: "js", text: "JavaScript" },
    { key: "cs", text: "C# .NET" },
    { key: "html", text: "HTML5" },
    { key: "cc", text: "Cloud Computing" },
    { key: "reactjs", text: "React Js" },
    { key: "angular", text: "Angular Js" },
]

const DateStrings: IDatePickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],

    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',
    isRequiredErrorMessage: 'Field is required.',
    invalidInputErrorMessage: 'Invalid date format.',
}

const myTheme = createTheme({
    palette: {
        themePrimary: '#35299e',
        themeLighterAlt: '#f4f4fb',
        themeLighter: '#d6d3ef',
        themeLight: '#b5b0e2',
        themeTertiary: '#766dc5',
        themeSecondary: '#463baa',
        themeDarkAlt: '#30258e',
        themeDark: '#281f78',
        themeDarker: '#1e1759',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#595959',
        neutralSecondary: '#373737',
        neutralPrimaryAlt: '#2f2f2f',
        neutralPrimary: '#000000',
        neutralDark: '#151515',
        black: '#0b0b0b',
        white: '#ffffff',
    }
});

class FluentUiDemo extends Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            sname: '',
            gender: '',
            skills: [],
            phone: '',
            dob: '',
            maritalStatus: '',
            user: [],
            listofusers: [],
            red: 0,
            green: 0,
            blue: 0

        }
    }

    handleDatePicker = (date: Date | null | undefined) => {
        var dob = new Date();
        dob = date
        this.setState({ dob: dob.getDate() + '/' + (dob.getMonth() + 1) + '/' + dob.getFullYear() })
    }

    handleGender = (e, option) => {
        this.setState({ gender: option.text })
    }

    handleSkills = (e, items) => {
        const skill = this.state.skills;
        skill.push(items.text)
        this.setState({ skills: skill }, console.log(skill))
    }

    handleMaritalStatus = (e, isChecked) => {
        this.setState({ maritalStatus: isChecked })
    }
    handleTextBox = (e) => {
        var val = e.target.value
        this.setState({ [e.target.name]: val })
    }

    handleRegister = () => {
        const { fname, sname, gender, phone, dob, skills, maritalStatus } = this.state
        const user = this.state.user
        user.push({
            "id": user.length + 1, "data": [
                { "fname": fname },
                { "sname": sname },
                { "phone": phone.trim('_') },
                { 'dob': dob },
                { "gender": gender },
                { 'maritalStatus': maritalStatus === "true" ? "Married" : "Single" },
                { 'skills': skills }
            ]
        })
        this.setState({ user: user }, console.log(user))
    }

    redSlider = (e) => {
        this.setState({ red: e })
    }
    greenSlider = (e) => {
        this.setState({ green: e })
    }
    blueSlider = (e) => {
        this.setState({ blue: e })
    }

    componentDidMount() {
        Customizations.applySettings({ theme: myTheme })
        fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
            .then(result => result.json())
            .then(response => {
                const option = this.state.listofusers
                response.map(item => {
                    option.push({ "key": item.id, "text": item.username })
                })
                this.setState({
                    listofusers: option
                })
            })
    }



    render() {
        initializeIcons()
        const controlClass = mergeStyleSets({
            control: {
                margin: '0 0 15px 0',
                maxWidth: '300px',
            },
        });

        return (
            <React.Fragment>
                <div className="row justify-content-center" style={{ backgroundColor: "#004578" }}>
                    <div id="inputDiv" className="m-2 col-lg-6 col-md-8 col-sm-8 col-11" style={{ textAlign: "center", backgroundColor: '#FFFFFF' }}>
                        <h5>TimeSheet</h5>
                        <MessageBar messageBarType={MessageBarType.success}
                            actions={
                                <div>
                                    <MessageBarButton ><NavLink to={{ pathname: '/showdata', state: { props: this.state.user } }}>show data</NavLink></MessageBarButton>
                                </div>
                            }>
                            Successfully Regisetered
                        </MessageBar>
                        <Stack verticalAlign tokens={tokens} wrap>
                            <Stack horizontal tokens={tokens}>
                                <Label required htmlFor="fname"> First Name </Label>
                                <TextField id="fname" name="fname" onChange={this.handleTextBox}></TextField>
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <Label required htmlFor="sname"> SurName</Label>
                                <TextField id="sname" name="sname" onChange={this.handleTextBox} ></TextField>
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <Label required htmlFor="phone">Phone Number</Label>
                                <MaskedTextField mask="(+91) 99999 99999" name="phone" onChange={this.handleTextBox}></MaskedTextField>
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <Label required> Date of Birth </Label>
                                <DatePicker
                                    placeholder="Date Of Birth"
                                    className={controlClass.control}
                                    firstDayOfWeek={DayOfWeek.Monday}
                                    highlightCurrentMonth={true}
                                    isRequired={true}
                                    strings={DateStrings}
                                    showGoToToday={false}
                                    name="dob"
                                    onSelectDate={this.handleDatePicker}
                                >
                                </DatePicker>
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <Label htmlFor="gender">Gender</Label>
                                <ChoiceGroup options={options} id="gender" name="gender" defaultChecked="true" onChange={this.handleGender}></ChoiceGroup>
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <Label>Top 5 Skills</Label>
                                <Dropdown
                                    multiSelect
                                    options={topskills}
                                    placeholder="Choose your top 5 Skills"
                                    name="skills"
                                    onChange={this.handleSkills}
                                />
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <Label>Marital Status</Label>
                                <Toggle onText="Married" offText="Single" name="marital" onChange={this.handleMaritalStatus} ></Toggle>
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <Label required>UserName</Label>
                                <Dropdown
                                    multiSelect
                                    options={this.state.listofusers}
                                    placeholder="Select username"
                                    defaultSelectedKeys={["1", "2"]}
                                ></Dropdown>
                            </Stack>
                            <Stack>
                                <MessageBar
                                    messageBarType={MessageBarType.warning}
                                    isMultiline={true}
                                    dismissButtonAriaLabel="Close"
                                    actions={
                                        <div>
                                            <MessageBarButton onClick={() => { alert("jhdfjdj") }}>Yes</MessageBarButton>
                                            <MessageBarButton>No</MessageBarButton>
                                        </div>
                                    }>
                                    This site will use your cookies for security purpose. Do you really want to continue with the site?
                                </MessageBar>
                            </Stack>
                            <Stack horizontal tokens={tokens}>
                                <PrimaryButton onClick={this.handleRegister} style={{ width: 50 }}>Register</PrimaryButton>
                                <DefaultButton onClick={this.handleRegister} style={{ width: 50 }}>Cancel</DefaultButton>
                            </Stack>
                            <Stack verticalAlign>
                                <Slider max={255} min={0} label="Red" onChange={this.redSlider}></Slider>
                                <Slider max={255} min={0} label="Green" onChange={this.greenSlider}></Slider>
                                <Slider max={255} min={0} label="Blue" onChange={this.blueSlider}></Slider>
                            </Stack>
                        </Stack>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    componentDidUpdate(props, state) {

        const { red, green, blue } = this.state
        if (state.red === red && state.green === green && state.blue === blue)
            return false;
        document.getElementById("inputDiv").style.backgroundColor = `rgb(${red} , ${green} , ${blue})`
    }
}

export default FluentUiDemo;