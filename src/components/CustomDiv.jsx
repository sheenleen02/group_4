import React from 'react';  
import { myData } from '../data';  

const CustomDiv = () => {  
    return (  
        <div className="custom-div flex flex-col lg:flex-row justify-between p-5 space-y-5 lg:space-y-0 lg:space-x-5">  
            {  
                myData.map((data, id) => {  
                    const { title, icon: Icon, content, footer } = data; // Use 'Icon' for a better convention  
                    return (  
                        <div key={id} className=" custom-item hover:bg-black hover:text-gray-700 bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center text-center space-y-3">  
                            <Icon className="icon text-4xl text-gray-700" />  
                            <p className="text-xl font-semibold">{title}</p>  
                            <p className="text-gray-600">{content}</p>  
                            <p className="text-sm text-gray-500">{footer}</p>  
                        </div>  
                    )  
                })  
            }  
        </div>  
    );  
};  

export default CustomDiv;

