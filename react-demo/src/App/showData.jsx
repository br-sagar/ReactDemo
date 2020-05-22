import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom'
class ShowData extends Component {
    render() {
        const willAccept = (proposal) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (proposal === "Yes") {
                        return resolve("Resolved")
                    }
                    else {
                        return reject("Rejected")
                    }
                }, 3000)
            })
        }

        class Test {
            constructor(name, surname) {
                this.name = name
                this.surname = surname
                console.log(`${this.name} ${this.surname}`)
            }
        }
        class Child extends Test {
            constructor() {
                super('sagar', 'vishwakarma')
            }
        }
        let c = new Child()
        console.log(c.surname)

        let name = "sagar", surname = "vishwakarma"
        const obj = (name, surname) => {
            return {
                name,
                surname,
                isSenior() { return 20 > 20 }
            }
        }
        let status = "Marital Status"
        let p = {
            name,
            surname,
            isSenior() {
                return this.surname.toLocaleUpperCase()
            },
            [status]: "Single"
        }

        const arr = [
            {
                id: 1,
                name: 'sagar'
            },
            {
                id: 2,
                name: 'meter'
            },
            {
                id: 3,
                name: 'smith'
            },
            {
                id: 1,
                name: 'sagar'
            },
        ]

        console.log(arr.reduce((curr, accc) => {
            let a = [];
            if (curr !== accc) {
                a.push(curr)
            }
            return a
        }))
        console.log(arr.reduce((i, t) => { return i + t.id }, 0))
        const { name: n, surname: s } = p
        console.log(`${n} ${s}  ${p.isSenior()} ${p['Marital Status']} `)

        const fetchApiRequest = (url) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    var http = new XMLHttpRequest();
                    http.open("GET", url);
                    http.send();
                    http.responseType = "json"
                    http.onload = () => {
                        var data = http.response
                        if (data !== null) {
                            return resolve(data)
                        }
                        else {
                            return reject(data)
                        }
                    }
                }, 3000);
            })
        }

        willAccept("Yes").then(res => console.log(res)).catch(err => console.log(err))
        fetchApiRequest("https://jsonplaceholder.typicode.com/users").then(res => console.log(res)).catch(err => console.log(err))
        return (
            <div>
                <h4>Show Data</h4>
            </div>
        );
    }
}

export class ShowChild extends Component {
    render() {
        return (
            <div>sdshjgj</div>
        )
    }
}

export default ShowData;



