module.exports = (eleventyConfig) =>{
  eleventyConfig.addPassthroughCopy({"public":"/"});
  return{
    dir:{
      input:'src'
    }
  }
}