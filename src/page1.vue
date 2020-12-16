<template>
  <page id="app">


    <onekit-text>xxx</onekit-text>

  </page>
</template>

<script>
  import OnekitPage from '../toutiao2vue/OnekitPage';
  import tt from '../toutiao2vue/tt';
  export default OnekitPage(null, {

    data: {
      tempFilePath: '',
      origintempFilePath: ''
    },

    test() {
      tt.chooseVideo()
    },

    eFile_change(e) {
      const file = e.target.files[0]
      console.log(file)
      //
      // var zip = new JSZip();
      // zip.file(" Hello.txt", "Hello World\n" ); // zip.file(file.name, file); // zip.generateAsync({ type: "blob" }) // .then(function(content) { // // see FileSaver.js // saveAs(content, "demo.onekit" ); // }); // tt.uploadFile({ // url: 'http://192.168.146.1:3000/file_upload' , // name: 'file' , // filePath: file.name, // formData: { // 'user' : 'test' // }, // success: (res)=> {
      // console.log('上传成功', res)
      // }
      // })

    },

    onLoad: function () {
      tt.chooseImage({
        success: res => {
          console.log(res)
        },
        fail: err => {
          console.log(err)
        }
      })
    }


  });
</script>

<style>

</style>