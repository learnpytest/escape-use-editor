const imageUrl = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // 粗體、斜體、底線和刪節線
  [{
    'header': [1, 2, 3, 4, 5, 6, false]
  }], // 標題
  [{
    'list': 'ordered'
  }, {
    'list': 'bullet'
  }], // 清單
  [{
    'script': 'sub'
  }, {
    'script': 'super'
  }], // 上標、下標
  [{
    'indent': '-1'
  }, {
    'indent': '+1'
  }], // 縮排
  [{
    'size': ['small', false, 'large', 'huge']
  }], // 文字大小
  [{
    'color': []
  }, {
    'background': []
  }], // 顏色
  [{
    'font': []
  }], // 字體
  [{
    'align': []
  }], // 文字方向
  ['clean'],
  // 清除文字格是];
  ['link', 'image'], // 插入圖片
]
const options = {
  debug: 'info',
  modules: {
    imageResize: {
      displaySize: true
    },
    toolbar: {
      container: toolbarOptions,
      // 插入圖片連結
      handlers: {
        image: imageHandler,
      }
    },
    // 插入圖片連結改成選擇圖片檔案上傳
    imageUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              imageUrl
            );
          }, 300);
        });
      }
    }
  },
  placeholder: '寫下產品描述',
  theme: 'snow'
};

// 插入圖片連結
function imageHandler() {
  const range = this.quill.getSelection();
  const value = prompt('please copy paste the image url here.');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}

Quill.register('modules/imageUploader', ImageUploader);
const editor = new Quill('#description', options)