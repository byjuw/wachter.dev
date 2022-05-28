// File Julien.json typing animation
let julienJson = document.querySelector('.julien-json')
const content = julienJson.innerHTML
julienJson.innerHTML = ''
let position = 0,
  tag = null,
  tagContent = '',
  tagOpen = false,
  writingTag = false,
  typeSpeed = 90,
  tempTypeSpeed = 0

const type = () => {
  const char = content[position]

  if (writingTag) {
    tagContent += char
  }

  // Writing html tag. Dont temp speed.
  // We don't need the closing tag part, it will be added automatically.
  if (char === "<") {
    tempTypeSpeed = 0
    tagOpen = !tagOpen
    if (tagOpen) {
      tagContent = char
    }
    writingTag = true
  }

  // Write in the current html tag.
  if (!writingTag && tagOpen) {
    tag.innerHTML += char
  }

  // Write in the parent.
  if (!writingTag && !tagOpen) {
    tempTypeSpeed = (Math.random() * typeSpeed) + 50
    julienJson.innerHTML += char
  }

  // End of html tag. Tempo speed.
  // Create a working span to get the Element from the tag content.
  if (writingTag && char === ">") {
    tempTypeSpeed = (Math.random() * typeSpeed) + 50
    writingTag = false
    if (tagOpen) {
      const newSpan = document.createElement("span")
      newSpan.innerHTML = tagContent
      tag = newSpan.firstChild
      julienJson.appendChild(tag)
    }
  }

  // Start presentation animation based on the content position.
  if (position === 150) {
    // Portrait animation
    tempTypeSpeed = 3000
    document.querySelector('.portrait-animate').classList.add('start')
  } else if (position === 240) {
    tempTypeSpeed = 2000
    // Name animation
    document.querySelector('.text-animate.name').classList.add('start')
  } else if (position === 331) {
    // Profession animation
    document.querySelector('.text-animate.profession').classList.add('start')
  }

  position++

  if (position < content.length) {
    setTimeout(type, tempTypeSpeed)
  }
}

setTimeout(type, 1000)
