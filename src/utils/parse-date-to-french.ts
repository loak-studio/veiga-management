const parseDateToFrench = (date:string)=>{
  const dateToParse = new Date(date)
  return dateToParse.toLocaleDateString('fr', { day: "2-digit", month: 'long', year: "numeric" })
}

export {parseDateToFrench}