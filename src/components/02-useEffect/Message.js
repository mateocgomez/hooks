import React, { useEffect } from 'react';

const Message = () => {
        useEffect(() => {
            return () => {
                console.log('componente desmontado');
            }
        }, [])
    return (
        <>
         <h4>Hello World</h4>
        </>        
    );
}
 
export default Message;