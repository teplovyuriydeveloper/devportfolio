<template>
  <div class="w-full flex justify-center my-6">
    <iframe
      v-if="isClient && isYouTube"
      :src="youTubeEmbedUrl"
      class="w-full max-w-3xl aspect-video rounded-xl shadow-lg"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>

    <video
      v-else-if="isClient && src"
      :src="resolvedSrc"
      controls
      class="rounded-xl shadow-lg max-w-3xl w-full bg-black"
      preload="metadata"
    >
      Your browser does not support the video tag.
    </video>

    <div v-else class="text-gray-400 italic text-center">
      Loading video player...
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  src: { type: String, required: true }
})

const isClient = ref(false)
onMounted(() => (isClient.value = true))

const isYouTube = computed(() =>
  /youtu\.?be/.test(props.src)
)

const youTubeEmbedUrl = computed(() => {
  if (!isYouTube.value) return ''
  const idMatch = props.src.match(
    /(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/
  )
  const id = idMatch ? idMatch[1] : ''
  return `https://www.youtube.com/embed/${id}`
})

const resolvedSrc = computed(() => {
  if (!props.src) return ''
  if (props.src.startsWith('/')) {
    return `${useRuntimeConfig().public?.baseURL || ''}${props.src}`
  }
  return props.src
})
</script>

<style scoped>
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
