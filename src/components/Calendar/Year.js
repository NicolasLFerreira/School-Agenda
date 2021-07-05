import React, {Component} from "react"
import Month from "./Month"

class Year extends Component{
    constructor(){
        super()

        var month = []
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var size = [1,-2,1,0,1,0,1,1,0,1,0,1]

        for(var currentMonth = 0; currentMonth <= 11; currentMonth++){
            month.push(<Month id={months[currentMonth]} size={size[currentMonth]}/>)
            month.push(<div><br></br><br></br><br></br></div>)
        }

        this.state = {
            months: month,
            toRender: 0
        }
    }

    changeMonth = (index) => {
        this.setState(() => {
            return{
                toRender: index
            }
        })
    }

    render(){
        return(
            this.state.months
        )
    }
}

export default Year