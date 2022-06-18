# display 的 inline-block 、inline 、block 属性

inline-block 是 inline 和 block 的一个混合产物。

inline-block 元素既会拥有 block 的宽度高度特性，又会拥有 inline 的同行特性。



 articleContent: function(){
        let data = this.find(this.articleList, this.$route.params.articleDynamicRoute).target.content;
        if (data) {
          let reg = /<img.*?data-id="(.*?)".*?\/?>/gi;
          this.imgElementsStr = data.match(reg);
          console.log(this.imgElementsStr);
          return data;
        }
        return '';
      },
    },

          replaceBaseIndex(data, reg){
        let i = 0;
        let str = '';
        data = data.replace(reg, function(){
          str = this.imgElementsStr[i];
          console.log(i);
          console.log(str);
          i++;
          return str;
        })
        console.log(1);
        return data;
      }
    },