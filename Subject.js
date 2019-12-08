import React, { PureComponent } from 'react';
import CheckBox from './CheckBox';


 class Subject extends PureComponent{
     render() { 
            const {
            subject,
            id,
            isComplete,
            index,
            removeSubject,
            changeSubject
            } = this.props;
         
           return(
            <div className="subject">
                <span className="subject-subject">
                { subject }
                <button className="remove-subject" onClick={() => removeSubject(id)}>✖</button>
                </span>
                <CheckBox 
                isComplete={subject.isComplete}
                index={index}
                //changeComplete={changeComplete}
                />
            </div>
        );
     }
   
    }
    
    export default Subject;