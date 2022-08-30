import React from 'react';
import './Modal.css'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';*/

export default function Modal ({open, children, onClose}) {
    if(!open) return null
  return (
    <div>
        <button onClick={onClose}>X</button>
        {children}
        
    </div>
  )
}
