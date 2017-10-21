const style = `
  background-color: black;
  color: white;
  font-size: 15px;

`

const message = `
                                 
  Are you a technical manager    
  who appreciates attention to   
  detail?                        
                                 
  Do you need someone who can    
  get the job done right?        
                                 
  I'd love to discuss your       
  requirements with you          
  personally. You can reach me   
  directly at:                   
                                 
  E: monarch@zeroprojects.ca     
  C: 647-766-0000                
                                 
  Monarch Wadia                  
  Principal Developer            
  Zero Projects                  
                                 `;

function printConsoleMessage() {
  console.log("%c" + message, style);
}

export default printConsoleMessage; 