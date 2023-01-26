import * as yup from 'yup' ;
let schema = yup.object().shape({
    date: yup.date().required(),
    distance: yup.number().required().min(0).max(29),
    time: yup.date().required(),
    price : yup.number().required().min(100000000) ,
    description : yup.string().required()
});
const validator = (date , time , price , distance , description)=>(
    schema.isValid({date , time , price , distance , description})
        .then((valid)=>{
            return valid
        })
)
export default validator ;