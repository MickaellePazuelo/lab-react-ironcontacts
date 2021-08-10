import React, { Component } from "react";
import contacts from "../contacts.json"


export class Contact extends Component {
    state = {
        contacts: contacts.slice(0,5)

    }
  render() {
    return (
     
      <div>
        <table className="Contact">
        <tr>
             <td>Picture</td>
             <td>Name</td>
             <td>Popularity</td>
           </tr>
         {this.state.contacts.map((contact)=>{

return(<div>
            <tr>
             <td>
               <img src={contact.pictureUrl} alt="" />
             </td>
             <td>{contact.name}</td>
             <td>{contact.popularity}</td>
           </tr>
           </div>)
         })}
        </table>
         </div>
       
    );
  }
}

export default Contact;
