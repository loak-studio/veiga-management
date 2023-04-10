const videos = document.querySelectorAll('.video__iframe')

if(videos){
  videos.forEach(video=>{
    const startVideo = ()=>{
      const attributes = Array.from(video.attributes)
      const iframe = document.createElement('iframe')
      attributes.forEach(attribute=>{
        iframe.setAttribute(attribute.name, attribute.value)
      })
      video.replaceWith(iframe)
    }
    const button = video.querySelector('.video__play-button')
    video.addEventListener('click',startVideo)
    button.addEventListener('click',startVideo)
  })
}