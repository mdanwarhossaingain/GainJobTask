class ApiFeatures{
    constructor(query,queryStr){
        this.query =query;
        this.queryStr =queryStr;
    }

     search(){
        const keyword =this.queryStr.keyword ?{

            name:{
                $regex:this.queryStr.keyword,
                $options:"i"
            },
        }:{};

        this.query = this.query.find({...keyword});

        return this;
    }

     filter(){

        const queryCopy = {...this.queryStr} ;

         //Removing some fields for Tags 
        const removeFields =["keyword"];

        removeFields.forEach((key)=>delete queryCopy[key])

        //Filter For Price 

        //console.log(queryCopy)
       
        let queryStr =JSON.stringify(queryCopy);
        queryStr =queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=> `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));

         //console.log(queryStr)

        return this;
    }

     





};

module.exports =ApiFeatures