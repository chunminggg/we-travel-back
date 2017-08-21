<style>

</style>
<template>
  <div>

    <quill-editor ref="richContent" :options="editorOption" v-model="content" @change="richTextChange">
    </quill-editor>
    <image-upload class="product" @send-image="getImageArray" :uploadList="imageArray"></image-upload>

  </div>
</template>
<script>
import quillEditor from 'vue-quill-editor'
import imageUpload from './richImageUpload'

import { ImageImport } from '../modules/ImageImport.js'
import { ImageResize } from '../modules/ImageResize.js'
// quillEditor.register('modules/imageImport', ImageImport)
// quillEditor.register('modules/imageResize', ImageResize)

export default {
  props: ['richContent', 'richIndex'],
  components: {
    imageUpload,
  },
  data() {
    return {
      editorOption: {
        placeholder: this.richContent.placeHolder,
        imageImport: true,
        imageResize: {
          displaySize: true
        },


      },
      content: this.richContent.content,
      imageArray: [],

    }
  },
  watch: {
    richContent(newVal, oldVal) {
      this.content = newVal.content
    }
  },
  methods: {
    richTextChange(editor, html, text) {
      this.$emit('send-text', { 'content': this.content, 'index': this.richIndex })
    },
    getImageArray(data) {
      let vm = this
       let value = data
       let myLength = this.$refs.richContent.quill.getLength()
       this.$refs.richContent.quill.insertEmbed(myLength,'image',value)
            
    },
    imgClick() {

    },
  },
  computed: {
    editor() {
      return this.$refs.firstEditor.quill
    },

  },
  mounted() {

  }
}
</script>

