<template>
  <div>
    <component
      v-for="(block, index) in parsedBlocks"
      :key="index"
      :is="block.type === 'markdown' ? 'div' : block.component"
      v-bind="block.props"
      v-html="block.type === 'markdown' ? block.content : undefined"
      class="prose max-w-none"
    />
  </div>
</template>

<script setup>
import { marked } from 'marked'
import VideoPlayer from '@/components/VideoPlayer.vue'

const props = defineProps({
  markdown: { type: String, required: true }
})

const parsedBlocks = computed(() => {
  const regex = /\{\{([A-Z_]+):\s*"([^"]+)"\}\}/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = regex.exec(props.markdown)) !== null) {
    const [full, name, value] = match

    // Add normal markdown chunk before the tag
    if (match.index > lastIndex) {
      const mdChunk = props.markdown.slice(lastIndex, match.index)
      parts.push({
        type: 'markdown',
        content: marked.parse(mdChunk)
      })
    }

    // Add component block
    if (name === 'VIDEO_PLAYER') {
      parts.push({
        type: 'component',
        component: VideoPlayer,
        props: { src: value }
      })
    }

    lastIndex = match.index + full.length
  }

  // Add any remaining markdown
  if (lastIndex < props.markdown.length) {
    const mdChunk = props.markdown.slice(lastIndex)
    parts.push({
      type: 'markdown',
      content: marked.parse(mdChunk)
    })
  }

  return parts
})
</script>
