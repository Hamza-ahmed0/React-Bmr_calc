import React, { Component } from 'react'

class BMR extends Component {
   constructor() {
       super();
       this.state = {
           gender: '',
           weight :'',
           heightFeet :'',
           heightInche :'',
           age :'',
           activity:'',
           bmr:'',
           error: '',
           errorm: '',
           active: '',
       }
   }



   handleageChange=(event) => {
       this.setState({age : event.target.value})
   }
   handlegenderChange=(event) => {
    this.setState({gender : event.target.value})
}
handleweightChange=(event) => {
    this.setState({weight : event.target.value})
}
handleheightFeetChange=(event) => {
    this.setState({heightFeet : event.target.value})
}
handleheightIncheChange=(event) => {
    this.setState({heightInche : event.target.value})
}
handleactivityChange=(event) => {
    this.setState({activity : event.target.value})
}

BmrCalc() {
    let age = this.state.age;
    let weight = this.state.weight;
    let heightInFeet = this.state.heightFeet;
    let heightIninch = this.state.heightInche;
    let gender = this.state.gender;


    if(age === '' || weight === '' || heightInFeet === '' || heightIninch === '' || gender === ''){
       this.setState({error : 'All Field Are Required'});
       return;
    }
    this.setState({error : ''});
    let bmrCalcu = '';
    let height = ((heightInFeet * 30.48) + (heightIninch * 2.54));
    let weightKg = (weight / 2.205);


    if(gender == 2){
        bmrCalcu =  66.5 + ( 13.75 * weightKg) + ( 5.003 * height) - (6.755 * age)
    }else if (gender == 1){
        bmrCalcu = 655 + ( 9.563 * weightKg ) + ( 1.850 * height) - ( 4.676 * age)

    }
    this.setState({bmr : bmrCalcu});

}


activityCacl () {
    let activity = this.state.activity;
    let BMR = this.state.bmr;


    let activCalc = BMR * activity;
    this.setState({active: activCalc});
    if(BMR === '') {
        this.setState({errorm : "FIRST CALCULATE BMR"});
        return;
    }
    this.setState({errorm : ''});
    
    
}





    render() {

       let error;
       if (this.state.error){
           error = <div className="error">{this.state.error}</div>
       }
       let errormsg;
       if (this.state.errorm){
           errormsg = <div className="error">{this.state.errorm}</div>
       }
       let CALCULATION;
       if (this.state.bmr){
           CALCULATION = <div className="result">{this.state.bmr}</div>
       }
       let resultactiv;
       if (this.state.active){
           resultactiv = <div className="result">{this.state.active}</div>
       }




        return (
            <div>
                <div id="bmrcalc">
                <div className="form">
                    <h2>BMR &amp; Daily Calorie Calculator</h2>
                    <div className="inputwrap">
                        <label className="label">Gender</label><label>
                            <input type="radio" className="genderF" checked={this.state.gender === "1"} onChange={this.handlegenderChange} name="gender" value="1" />Female</label><label>
                            <input type="radio" className="genderM" checked={this.state.gender === "2"} onChange={this.handlegenderChange} name="gender" value="2" />Male</label>
                    </div>
                    <div className="inputwrap">
                        <label className="label">Weight in Pounds</label>
                        <input type="number" value={this.state.weight} onChange={this.handleweightChange} name="weight" className="weight" min="0" max="999" />
                    </div>
                    <div className="inputwrap">
                        <label className="label">Height in feet and inches</label>
                        <input type="number" value={this.state.heightFeet} onChange={this.handleheightFeetChange} name="heightFeet" className="heightFeet" min="0" max="8" />
                        <input type="number" value={this.state.heigjhtInche} onChange={this.handleheightIncheChange} name="heightInches" className="heightInches" min="0" max="11" />
                    </div>
                    <div className="inputwrap">
                        <label className="label">Age in years</label>
                        <input type="number" value={this.state.age} onChange={this.handleageChange} className="age" name="age" min="0" max="120" />
                    </div>
                    {error}
                    <button type="button" onClick={ () => this.BmrCalc()}>Calculate BMR</button>
                    {CALCULATION}
                    <div className="workout">
                        {errormsg}
                        <div className="inputwrap">
                            <label className="label">Workout in a Week</label>
                            <select className="activity" value={this.state.activity} onChange={this.handleactivityChange} name="activity">
                                <option value="">Select your Activity</option>
                                <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
                                <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                                <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                                <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                                <option value="1.9">Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</option>
                            </select>
                        </div>
                        <button type="button" onClick={() => this.activityCacl()}>Calculate Calories</button>
                        {resultactiv}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
 

export default BMR;