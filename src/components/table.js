import React from "react";
import TableRow from "./tablerow";

const options = [
    {value: "0", type: "None"},
    {value: "1", type: "Normal"},
    {value: "2", type: "Fire"},
    {value: "3", type: "Water"},
    {value: "4", type: "Electric"},
    {value: "5", type: "Grass"},
    {value: "6", type: "Ice"},
    {value: "7", type: "Fighting"},
    {value: "8", type: "Poison"},
    {value: "9", type: "Ground"},
    {value: "10", type: "Flying"},
    {value: "11", type: "Psychic"},
    {value: "12", type: "Bug"},
    {value: "13", type: "Rock"},
    {value: "14", type: "Ghost"},
    {value: "15", type: "Dragon"},
    {value: "16", type: "Dark"},
    {value: "17", type: "Steel"},
    {value: "18", type: "Fairy"}
  ]

class Table extends React.Component {


    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12 col-md-12 fs-4">
            <table className="table table-dark table-hover mt-5">
                <thead>
                    <tr>
                    <th scope="col"> <span className="d-block d-lg-none">P</span><span className="d-none d-lg-block">Pokemon Type/s</span></th>
                    <th scope="col"><span className="d-block d-lg-none">W</span><span className="d-none d-lg-block">Weakness</span></th>
                    <th scope="col"><span className="d-block d-lg-none">R</span><span className="d-none d-lg-block">Resistance</span></th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow options={options} slot={"0"} type1={this.props.state.slot0_type1} type2={this.props.state.slot0_type2} handleChange={this.props.handleChange}/>
                    <TableRow options={options} slot={"1"} type1={this.props.state.slot1_type1} type2={this.props.state.slot1_type2} handleChange={this.props.handleChange}/>
                    <TableRow options={options} slot={"2"} type1={this.props.state.slot2_type1} type2={this.props.state.slot2_type2} handleChange={this.props.handleChange}/>
                    <TableRow options={options} slot={"3"} type1={this.props.state.slot3_type1} type2={this.props.state.slot3_type2} handleChange={this.props.handleChange}/>
                    <TableRow options={options} slot={"4"} type1={this.props.state.slot4_type1} type2={this.props.state.slot4_type2} handleChange={this.props.handleChange}/>
                    <TableRow options={options} slot={"5"} type1={this.props.state.slot5_type1} type2={this.props.state.slot5_type2} handleChange={this.props.handleChange}/>
                </tbody>
            </table>
            </div>
            {/* Buttons */}
            <div className="row text-end m-0 p-0">
                <div className="col-12 col-lg-8 offset-lg-2">
                        <button type="button" onClick={this.props.reset} className="btn btn-dark btn-lg">Reset</button>
                </div>
            </div>
            </div>

        );
    }
};

export default Table;