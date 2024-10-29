export const GetData = async(urls:string[]) =>{

    try{


        const promises:any[] = [];

        urls.forEach((url:string, index:number)=>{
            
            promises[index] = fetch(url,{
                method:'GET',
                
            
            })           
        
        });

        const response = await Promise.all(promises);
        return await Promise.all(response.map(res=>{

         
            return res.json();
        }))
    
        
    
    } catch (error) {  
        
        throw error;
    }
    
}