import './App.css';
import './custom.scss'
import NavBar from './components/navbar';
import Table from './components/table';
import Results from './components/results';
import {Helmet} from "react-helmet";
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
        {
            slot0_type1: "0",
            slot0_type2: "0",
            slot1_type1: "0",
            slot1_type2: "0",
            slot2_type1: "0",
            slot2_type2: "0",
            slot3_type1: "0",
            slot3_type2: "0",
            slot4_type1: "0",
            slot4_type2: "0",
            slot5_type1: "0",
            slot5_type2: "0",

        }

      this.handleTableChange = this.handleTableChange.bind(this);
      this.reset = this.reset.bind(this);
  }

  handleTableChange(event) {
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    });
  }

  reset(event){
    this.setState(
        {
            slot0_type1: "0",
            slot0_type2: "0",
            slot1_type1: "0",
            slot1_type2: "0",
            slot2_type1: "0",
            slot2_type2: "0",
            slot3_type1: "0",
            slot3_type2: "0",
            slot4_type1: "0",
            slot4_type2: "0",
            slot5_type1: "0",
            slot5_type2: "0"
        });
}

  render(){
      return (
      <div className="custom-container h-100 w-100">
        {/* Header */}
        <div className="container-fluid border-top border-dark border-5 bg-danger p-4">
          <div className="row justify-content-center">
            <div className="col-4">
            <NavBar />
            </div>
          </div>
        {/* Table */}
          <Table state={this.state} handleChange={this.handleTableChange} reset={this.reset}/>
        </div>

        {/* Results */}
        <div className="container-fluid border-top border-dark border-5 p-4 bg-light h-50 text-danger">
          <Results state={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
                                                     