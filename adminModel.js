import mongoose from "mongoose";
const AdminSchema=mongoose.Schema(
    {
        students:[{
                    name:{
                    type:String,
                    required:true,
                    },
                    rollno:{
                        type:String,
                        required:true
                    }
                    
                }],
            
            
                teachers:[{
                    name:{
                        type:String,
                        required:true
                    },
                    id:{
                        type:String,
                        required:true
                    }
                }],
            
                library:[{
                    book:{
                        type:String,
                        required:true
                    },
                    authorname:{
                        type:String,
                        required:true
                    }
                }],
          
                attendance:[{
                    students:{
                        total:{
                            type:String,
                            required:true
                        }
                    }
                       
                    
                },
                {
                    teachers:{
                        total:{
                            type:String,
                            required:true
                        }
                    }
                       
                    
                },
                {
                    staffs:{
                        total:{
                            type:String,
                            required:true
                        }
                    }
                       
                    
                }
        ],
                
                   
    
timetable:[
    {
    monday:[
        {
            subject:{
                type:String,
                required:true
            }
        },
        {
            Teacher:{
                type:String,
                required:true
            }
        },
        {
            Schedule:{
                type:String,
                required:true
            }

    }
],

    Tuesday:[
        {
            subject:{
                type:String,
                required:true
            }
        },
        {
            Teacher:{
                type:String,
                required:true
            }
        },
        {
            Schedule:{
                type:String,
                required:true
            }

    }
],


    wednesday:[
        {
            subject:{
                type:String,
                required:true
            }
        },
        {
            Teacher:{
                type:String,
                required:true
            }
        },
        {
            Schedule:{
                type:String,
                required:true
            }

    }
],


    thursday:[
        {
            subject:{
                type:String,
                required:true
            }
        },
        {
            Teacher:{
                type:String,
                required:true
            }
        },
        {
            Schedule:{
                type:String,
                required:true
            }

    }
],


    friday:[
        {
            subject:{
                type:String,
                required:true
            }
        },
        {
            Teacher:{
                type:String,
                required:true
            }
        },
        {
            Schedule:{
                type:String,
                required:true
            }

    }
],


    saturday:[
        {
            subject:{
                type:String,
                required:true
            }
        },
        {
            Teacher:{
                type:String,
                required:true
            }
        },
        {
            Schedule:{
                type:String,
                required:true
            }

    }
]

}
]
     }
    
            
            
    
        
    
    )
    const studentsSchema=mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        },
    rollno:{
         type:String,
        required:true,
     },
                     })

var Students = mongoose.model('Students', studentsSchema);
studentsSchema.plugin(Students);
const Admin=mongoose.model("Admin",AdminSchema);
export default Admin;