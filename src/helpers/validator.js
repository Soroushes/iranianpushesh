import * as yup from 'yup' ;
let schema = yup.object().shape({
    date: yup.date().required(),
    distance: yup.number().required().min(0).max(29),
    time: yup.date().required(),
    price : yup.string().required()
});
const validator = (date , time , price , distance)=>(
    schema.isValid({date , time , price , distance})
        .then((valid)=>{
            return valid
        })
)
export default validator ;