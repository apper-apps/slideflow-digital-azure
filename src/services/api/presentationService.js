import slidesData from '@/services/mockData/slides.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const presentationService = {
  async getAllSlides() {
    await delay(200)
    try {
      return [...slidesData]
    } catch (error) {
      throw new Error('Failed to load presentation slides')
    }
  },

  async getSlideById(id) {
    await delay(150)
    try {
      const slide = slidesData.find(slide => slide.Id === parseInt(id))
      if (!slide) {
        throw new Error(`Slide with Id ${id} not found`)
      }
      return { ...slide }
    } catch (error) {
      throw new Error(`Failed to load slide: ${error.message}`)
    }
  },

  async getSlideByIndex(index) {
    await delay(150)
    try {
      if (index < 0 || index >= slidesData.length) {
        throw new Error(`Invalid slide index: ${index}`)
      }
      return { ...slidesData[index] }
    } catch (error) {
      throw new Error(`Failed to load slide: ${error.message}`)
    }
  },

  async getTotalSlides() {
    await delay(100)
    return slidesData.length
  },

  async validateSlideIndex(index) {
    return index >= 0 && index < slidesData.length
  }
}