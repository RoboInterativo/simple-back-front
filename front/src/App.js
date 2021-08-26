import React from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';


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
        let content=
        <div></div>;
        if (this.state.loaded) {
           if (this.state.result) {
        content=<div>

        {this.state.result.students.map(option => (
          <List key={option.id} value={option.name}>
               <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <ImageIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary={option.name}  />
               </ListItem>




        </List>
        ))}
        </div>
      };
    };
        return (
    <div>
        {debug_info}
        {content}
      <form  noValidate autoComplete="off">
      <TextField   onChange={this.TextFieldChange} id="standard-basic" label="Standard" />

     </form>
     </div>
);


};
}

export default App;
