<style>

</style>
<template>
  <div>
  
     <quill-editor ref="richContent"
                    :options="editorOption"
                    v-model="content"
                    @change="richTextChange"
                      >
        </quill-editor>
  </div>
</template>
<script>
import quillEditor from 'vue-quill-editor'
import { ImageImport } from '../modules/ImageImport.js'
import { ImageResize } from '../modules/ImageResize.js'
  // quillEditor.register('modules/imageImport', ImageImport)
  // quillEditor.register('modules/imageResize', ImageResize)
export default {
    props:['richContent','richIndex'],
    data() {
      return {
        editorOption: {
          placeholder: this.richContent.placeHolder,
          imageImport: true,
            imageResize: {
              displaySize: true
            }
       
        },
        content:this.richContent.content,
      }
    },
    watch:{
        richContent(newVal,oldVal){
            this.content = newVal.content
        }
    },
    methods: {
      richTextChange(editor, html, text){
         this.$emit('send-text',{'content':this.content,'index':this.richIndex})
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

