    import React from 'react';
    import Header from './Header';
    import Subject from './Subject';
    import AddSubjectForm from './AddSubjectForm'
    import './App.css';
    import ReactDOM from 'react-dom';
    import CheckBox from './CheckBox';


    class App extends React.Component {

        state = {
        subjects: [
         {
            subject: "Math",
            isComplete: false,
            id: 1
        },
        {
            subject: "History",
            isComplete: false,
            id: 2
        },
        {
            subject: "Sport",
            isComplete: false,
            id: 3
        }
        ]
        };



    //subject id couter
        prevSubjectId = 3;

        handleCompleteChange = (index, event) => {
           this.setState( prevState => ({
                   isComplete: !prevState.subjects[index].isComplete

           }));
        }

        
        handleAddSubject = (subject) => {
            this.setState( prevState => {
                return{
                     subjects: [
                    ...prevState.subjects,
                    {
                        subject,
                        isComplete: false,
                        id: this.prevSubjectId += 1
                    }
                ]   
                };
            });
        }
        
        handleRemoveSubject = (id) => {
            this.setState( prevState => {
                return{                       
                    subjects: prevState.subjects.filter( p => p.id !== id)
                };
            });
        }

        render(){
         return(
            <div className="TasksList">
                <Header title="Tasks List" subjects={this.state.subjects}/>

                {/*Subject list*/}
                {this.state.subjects.map( ( subject, index) =>
                <Subject
                subject={subject.subject}
                isComplete={subject.isComplete}
                id={subject.id}
                key={subject.id.toString()}
                index={index}    
                changeComplete={this.handleCompleteChange}
                removeSubject={this.handleRemoveSubject}
            />
         )}

            <AddSubjectForm addSubject={this.handleAddSubject}/>

    </div>
    );   
    }
    }


    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

    export default App;


