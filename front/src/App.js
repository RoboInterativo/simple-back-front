import React from 'react';
import TextField from '@material-ui/core/TextField';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
            text:'',
            result: [],
            loaded: false


    };

    // this.setwindows2_filters = this.setwindows2_filters.bind(this);

     this.TextFieldChange=this.TextFieldChange.bind(this);
    }
    TextFieldChange(e) {
          let text = e.target.value;
          this.setState({text: text});


      }




componentDidMount() {
  fetch("api")
        .then(response => {
          if (response.status > 400) {
            return this.setState(() => {
              return { placeholder: "Something went wrong!" };
            });
          }
          return response.json();
        })
        .then(result => {
          this.setState(() => {
            return {
              result,
              loaded: true
            };
          });
        });
 }
    render() {



 // };
        let debug_info=JSON.stringify (this.state)

        return (
        <div>
        {debug_info}
      <form  noValidate autoComplete="off">
      <TextField   onChange={this.TextFieldChange} id="standard-basic" label="Standard" />

     </form>
     </div>
);


};
}

export default App;
