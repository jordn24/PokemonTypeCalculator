import React from 'react';

const typeNames = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
"Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", 
"Dragon", "Dark", "Steel", "Fairy"];
const chart = [ 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //None
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], //Normal
    [1, 0.5, 2, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5], //Fire
    [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1], //Water
    [1, 1, 1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1], //Electric
    [1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 1], //Grass
    [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1], //Ice
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2], //Fighting
    [1, 1, 1, 1, 0.5, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5], //Poison
    [1, 1, 2, 0, 2, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1], //Ground
    [1, 1, 1, 2, 0.5, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1], //Flying
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1], //Psychic
    [1, 2, 1, 1, 0.5, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 1], //Bug
    [0.5, 0.5, 2, 1, 2, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1], //Rock
    [0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1], //Ghost
    [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2], //Dragon
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2], //Dark
    [0.5, 2, 1, 1, 0.5, 0.5, 2, 0, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5], //Steel
    [1, 1, 1, 1, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 1, 1, 0, 0.5, 2, 1] //Fairy
];

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.allWeaknesses = this.allWeaknesses.bind(this);
    }

    allResistances(){
        var result = []
        var slots = [[this.props.state.slot0_type1, this.props.state.slot0_type2], [this.props.state.slot1_type1,
            this.props.state.slot1_type2], [this.props.state.slot2_type1, this.props.state.slot2_type2], [this.props.state.slot3_type1,
            this.props.state.slot3_type2], [this.props.state.slot4_type1, this.props.state.slot4_type2], [this.props.state.slot5_type1,
            this.props.state.slot5_type2]]
        
        for(var i = 0; i < slots.length; i++){
            for(var j = 0; j < chart.length; j++){
                if(chart[slots[i][0]][j] * chart[slots[i][1]][j] < 1){
                    result.push(j)
                }
            }
        }
        return result.filter((value, index) => result.indexOf(value) === index);
    }

    allWeaknesses(){
        var result = []
        var slots = [[this.props.state.slot0_type1, this.props.state.slot0_type2], [this.props.state.slot1_type1,
            this.props.state.slot1_type2], [this.props.state.slot2_type1, this.props.state.slot2_type2], [this.props.state.slot3_type1,
            this.props.state.slot3_type2], [this.props.state.slot4_type1, this.props.state.slot4_type2], [this.props.state.slot5_type1,
            this.props.state.slot5_type2]]
        
        for(var i = 0; i < slots.length; i++){
            for(var j = 0; j < chart.length; j++){
                if(chart[slots[i][0]][j] * chart[slots[i][1]][j] >= 2){
                    result.push(j)
                }
            }
        }
        return result.filter((value, index) => result.indexOf(value) === index);
    }

    getUnresisted(num){
        var types = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        var result = []
        var resultNum = []

        this.allResistances().forEach((resistance) => {
            types[resistance] = 0;
        })

        for(var i = 0; i < types.length; i++){
            if( types[i] == 1){
                result.push(typeNames[i])
                resultNum.push(i)
            }
        }
        if(num){
            return resultNum
        } else {
            return result
        }
    }

    getWeaknesses(){
        var types = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        var result = []

        this.allWeaknesses().forEach((weakness) => {
            types[weakness] = 0;
        })

        for(var i = 0; i < types.length; i++){
            if( types[i] == 0){
                result.push(typeNames[i])
            }
        }

        return result
    }

    getObsoletePokemon(){
        var results = [];
        var counts = {};
        
        var slots = [this.props.state.slot0_type1, this.props.state.slot0_type2, this.props.state.slot1_type1,
            this.props.state.slot1_type2, this.props.state.slot2_type1, this.props.state.slot2_type2, this.props.state.slot3_type1,
            this.props.state.slot3_type2, this.props.state.slot4_type1, this.props.state.slot4_type2, this.props.state.slot5_type1,
            this.props.state.slot5_type2]

        slots.forEach((x) => {
            counts[x] = (counts[x] || 0) + 1;
        });

        var keys = Object.keys( counts );
        for(var i = 1; i < Object.keys(counts).length; i++){
            if(counts[keys[i]] > 1){
                for(var j = 0; j < counts[keys[i]];j++){
                    console.log(i)
                    results.push(typeNames[keys[i]-1])
                }
            }
        }

        return results
    }

    render() {
        var weaknessList = this.getWeaknesses()
        var resistanceList = this.getUnresisted()
        var obsoletePokemon = this.getObsoletePokemon()
        var rating = 36 - weaknessList.length - resistanceList.length - obsoletePokemon.length;
        var ratingText;

        if(rating < 10)
            ratingText = "Awful";
        if(rating >= 10 && rating < 15)
            ratingText = "Very Bad";
        if(rating >= 15 && rating < 20)
            ratingText = "Okay";
        if(rating >= 20 && rating < 25)
            ratingText = "Good";
        if(rating >= 25 && rating < 28)
            ratingText = "Very Good";
        if(rating >= 28)
            ratingText = "Exceptional";


        return (
        <div className="row">
            <div className="col fw-bold fs-2">
                <div>Unresisted:
                    {resistanceList.map((r,index) => (
                        <span key={index} className="text-dark"> {r} </span>
                    ))}    
                </div>
                <div>Weaknesses:
                    {weaknessList.map((w,index) => (
                        <span key={index} className="text-dark"> {w} </span>
                    ))}    
                </div>
                <div>Duplicate Types: 
                    {obsoletePokemon.map((o,index) => (
                        <span key={index} className="text-dark"> {o} </span>
                    ))} 
                </div>
                <div>Rating: <span className="text-dark">{ratingText}</span></div>
            </div>
        </div>
        );
    }
};

export default Results;