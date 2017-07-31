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
export default {
    props:['richContent','richIndex'],
    data() {
      return {
        editorOption: {
          placeholder: this.richContent.placeHolder,
       
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

