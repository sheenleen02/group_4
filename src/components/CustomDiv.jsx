import React from 'react';  
import { myData } from '../data';  

const CustomDiv = () => {  
    return (  
        <div className="custom-div flex justify-between p-5">  
            {  
                myData.map((data, id) => {  
                    const { title, icon: Icon, content, footer } = data; // Use 'Icon' for a better convention  
                    return (  
                    
                         <div key={id} className="custom-item ">  
                            <div className=''>
                            <Icon className="icon" /> 
                            <p>{title}</p>  
                            <p>{content}</p>  
                            <p>{footer}</p>  
                            </div>
                        </div>  
                    
                    )  
                })  
            }  
        </div>  
    );  
};  

export default CustomDiv;