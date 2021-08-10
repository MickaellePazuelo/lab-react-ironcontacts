import React, { Component } from "react";
import contacts from "../contacts.json"


export class Contact extends Component {
    state = {
        contacts: contacts.slice(0,5)

    };

    addRandomContact = () => {
      const randomContact = 
      contacts[Math.floor(Math.random() * contacts.length)]
      const copy = [...this.state.contacts];

      copy.push(randomContact);
      
      // this.state.contacts.push(randomContact);
      this.setState({
        contacts: copy,
      });
      
    };

    sortByName = () => {
      const copy = [...this.state.contacts];
      copy.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if(nameA > nameB) {
          return 1;
        }
        return 0;
      });

      
      this.setState({
        contacts: copy,
      });

    };

    sortByPopularity = () => {
      this.state.contacts.sort (function (a, b) {
        popularityA = a.popularity
        popularityB = b.popularity
        return a.popularity-b.popularity 

    }

  render() {
    return (
     <div> 
       <button onClick={this.addRandomContact}>Create</button>
       <button onClick={this.sortByName}>Sort by Name</button>
       <button onClick={this.sortByPopularity}>Sort by Pop</button>
      <div>
        <table className="Contact">
        <tr>
             <td>Picture</td>
             <td>Name</td>
             <td>Popularity</td>
           </tr>
         {this.state.contacts.map((contact)=>{

return(<div>
            <tr key={contact.id}>
             <td>
               <img style={{
                 height: 80,
                 width: 80,
               }}
                src={contact.pictureUrl} 
                alt="" />
             </td>
             <td>{contact.name}</td>
             <td>{contact.popularity}</td>
           </tr>
           </div>)
         })}
        </table>
         </div>
         </div>
       
    );
  }
}

export default Contact;
