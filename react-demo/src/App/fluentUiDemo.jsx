import React, { Component } from 'react';
import { Label, Stack, MaskedTextField, DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets, IChoiceGroup, ChoiceGroupOption, ChoiceGroup, Dropdown, Toggle, DefaultButton } from '@fluentui/react'
import { TextField } from '@fluentui/react/lib/TextField';
import { DropdownMenuItemType, IDropdownStyles, IDropdownOption, PrimaryButton, initializeIcons } from '@fluentui/react'

const options: IChoiceGroupOption[] = [
    { key: "male", text: "Male" },
    { key: "female", text: "Female" },
    { key: "other", text: "Other" }
]

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
            user: []
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
                    <div className="col-lg-6 col-md-8 col-sm-8 col-11" style={{ textAlign: "center", backgroundColor: '#F2F2F2' }}>
                        <h5>TimeSheet</h5>
                        <Stack verticalAlign gap="10" wrap>
                            <Stack horizontal gap="20" padding={10}>
                                <Label required htmlFor="fname"> First Name </Label>
                                <TextField id="fname" name="fname" onChange={this.handleTextBox}></TextField>
                            </Stack>
                            <Stack horizontal gap={20} padding={10}>
                                <Label required htmlFor="sname"> SurName</Label>
                                <TextField id="sname" name="sname" onChange={this.handleTextBox} ></TextField>
                            </Stack>
                            <Stack horizontal gap={20} padding={10}>
                                <Label required htmlFor="phone">Phone Number</Label>
                                <MaskedTextField mask="(+91) 99999 99999" name="phone" onChange={this.handleTextBox}></MaskedTextField>
                            </Stack>
                            <Stack horizontal gap={20} padding={10}>
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
                            <Stack horizontal gap={20} padding={10}>
                                <Label htmlFor="gender">Gender</Label>
                                <ChoiceGroup options={options} id="gender" name="gender" defaultChecked="true" onChange={this.handleGender}></ChoiceGroup>
                            </Stack>
                            <Stack horizontal gap={20} padding={10}>
                                <Label>Top 5 Skills</Label>
                                <Dropdown
                                    multiSelect
                                    options={topskills}
                                    placeholder="Choose your top 5 Skills"
                                    name="skills"
                                    onChange={this.handleSkills}
                                />
                            </Stack>
                            <Stack horizontal gap={20} padding={10}>
                                <Label>Marital Status</Label>
                                <Toggle onText="Married" offText="Single" name="marital" onChange={this.handleMaritalStatus} ></Toggle>
                            </Stack>
                            <Stack horizontal gap={20} padding={10}>
                                <PrimaryButton onClick={this.handleRegister} style={{ width: 50 }}>Register</PrimaryButton>
                                <DefaultButton onClick={this.handleRegister} style={{ width: 50 }}>Cancel</DefaultButton>
                            </Stack>
                        </Stack>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FluentUiDemo;