import React, { useState } from "react";
import EditContact from "../components/ContactInfo/EditContact";
import NewContact from "../components/ContactInfo/NewContact";

export default function InputContato(){
    
    const [isEditing, setIsEditing] = useState<boolean>(false);
    
    return(
        <>
            {isEditing ? <EditContact/> : <NewContact/>}
        </>
    );
}