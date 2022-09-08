<template>
  <div>
    <div class="container pt-5 text-center">
      <div class="row">
        <div class="card" style="width: 25rem;">
          <div class="card-body">
            <div class="mb-3">
              <el-date-picker
                  v-model="date"
                  type="datetime"
                  accept="image/jpeg,image/png,image/jpg"
                  placeholder="Select date and time"
              />
            </div>
            <div class="mb-3">
              <input type="file"
                     @change="handleImage"
                     ref="imageFile"
                     class="form-control">
            </div>
            <div class="mb-3">
              <el-button type="primary" @click.prevent="savePhoto">Guardar</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5 mt-5">
      <div class="row">
        <div class="col-3" v-for="img in images">
          <div class="card" style="width: 18rem;">
            <img :src="`https://gallery.com.br`+img.image" class="card-img-top" alt="...">
            <div class="card-body">
              <span class="card-title">Fecha: {{ img.uploaded_at }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ElNotification } from 'element-plus';
import { useStore } from "vuex";
import store from "../store";
import { computed } from "vue";
import axiosClient from "../axios";
import {ElMessage} from "element-plus";
import moment from 'moment'
export default {
  data: () => ({
    date: moment().format('YYYY-MM-DD HH:mm:ss'),
    image: '',
    url: '',
    images: []
  }),
  methods: {
    savePhoto(){
      if (this.checkInputs()){
        const formData = new FormData
        formData.append('image', this.image);
        formData.append('uploaded_at', this.date);
        axiosClient.post('/images/upload', formData , {
          headers: {"Content-Type": "multipart/form-data"}
        })
            .then(res => {
              ElMessage({
                message: 'Guardado.',
                type: 'success',
              })
              this.image = '';
              this.url = '';
              this.$refs.imageFile.value = null;
              this.getImages()
            })
            .catch(err => {
              this.image = '';
              this.url = '';
              this.$refs.imageFile.value = null;
              console.log(err)
              ElMessage({
                showClose: true,
                message: 'Oops, Datos invalidos.',
                type: 'error',
              })
            })
      }else{
        alert('asd')
      }
    },
    getImages(){
      axiosClient.get('/get/images')
          .then(res => {
            this.images = res.data.images;
          })
          .catch(err => {
            ElMessage({
              showClose: true,
              message: 'Oops, algo salio mal.',
              type: 'error',
            })
          })
    },
    handleImage(e){
      this.image = ''
      const i = e.target.files[0];
      if (i.type === 'image/jpeg' || i.type === 'image/png' || i.type === 'image/jpg'){
        this.image = i;
        this.url = URL.createObjectURL(i)
      }else{
        this.image = '';
        this.url = '';
        this.$refs.imageFile.value = null;
        ElMessage({
          showClose: true,
          message: 'Oops, imagen no valida.',
          type: 'error',
        })
      }
    },
    checkInputs(){
      return !!(this.image && this.date);

    }
  },
  mounted() {
    this.getImages();
  }
}
</script>
