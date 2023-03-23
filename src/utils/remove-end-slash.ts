const clearSlug = (slug:string)=>{
  if(slug.charAt(slug.length-1) === "/"){
    return slug.slice(0,-1)
  }
  return slug
}

export {clearSlug}