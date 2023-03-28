export default function Input({name,id,label,type="text", required}){
 if(type=="textarea"){
  return(
    <div className="input">
      <label className="input__label text" htmlFor={id}>{label} {required ? '*':''}</label>
      <textarea className="input__input" name={name} id={id} rows="2"></textarea>
    </div>
  )
 }
 else{
  return(
    <div className="input">
      <label className="input__label text" htmlFor={id}>{label} {required ? '*':''}</label>
      <input className="input__input" id={id} name={name} type={type} />
    </div>)
 }
}