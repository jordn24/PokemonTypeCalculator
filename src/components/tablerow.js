import React from 'react';
import Weakness from './weakness';
import Resistance from './resistance';

class TableRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                    <tr>
                    <td className="text-dark">
                        <select value={this.props.type1} name={`slot` + this.props.slot + `_type1`} className="form-select" aria-label=".form-select-sm example" onChange={this.props.handleChange}>
                            {this.props.options.map((type, index) => (
                                <option key={index} value={type.value}>{type.type}</option>
                            ))}
                        </select>
                        <select value={this.props.type2} name={`slot` + this.props.slot + `_type2`} className="form-select" aria-label=".form-select-sm example" onChange={this.props.handleChange}>
                            {this.props.options.map((type, index) => (
                                <option key={index} value={type.value}>{type.type}</option>
                            ))}
                        </select>
                    </td>
                    <Weakness type1={this.props.type1} type2={this.props.type2} />
                    <Resistance type1={this.props.type1} type2={this.props.type2}/>
                    </tr>
        );
    }
};

export default TableRow;