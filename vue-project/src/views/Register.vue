<template>
  <div class="d-flex flex-column justify-content-center">
    <img src="https://webookyou.com/img/login/sonrisa_login.png" alt="sonrisa" class="img-fluid m-auto" style="height: 80px;width: 80px;">
  </div>
  <el-form
    ref="ruleFormRef"
    :model="formRegister"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    label-position="top"
  >
    <el-form-item label="Nombre" prop="name">
      <el-input v-model="formRegister.name">
        <template #prefix>
          <el-icon class="el-input__icon"><i class="fas fa-user"></i> </el-icon>
           </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Apellidos" prop="apellido">
      <el-input v-model="formRegister.apellido">
        <template #prefix>
          <el-icon class="el-input__icon"><i class="fas fa-user"></i></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Telefono" prop="telefono">
      <el-input type="numeric" v-model="formRegister.telefono">
        <template #prefix>
          <el-icon class="el-input__icon"><i class="fas fa-mobile-alt"></i></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input type="email" v-model="formRegister.email">
        <template #prefix>
          <el-icon class="el-input__icon"><i class="fa fa-envelope"></i></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Contraseña" prop="password">
      <el-input type="password"
                show-password
                placeholder="Escribe una contraseña"
                v-model="formRegister.password">
                <template #prefix>
                  <el-icon class="el-input__icon"><i class="fas fa-unlock-alt"></i></el-icon>
                </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Confirma tu contraseña" prop="password_confirmation">
      <el-input type="password"
                show-password
                placeholder="Confirma tu contraseña"
                v-model="formRegister.password_confirmation">
                <template #prefix>
                <el-icon class="el-input__icon"><i class="fas fa-unlock-alt"></i></el-icon>
              </template>
        </el-input>
    </el-form-item>
    <el-form-item prop="terms">
        <el-checkbox v-model="formRegister.terms">
          <span>Acepto los <el-link @click.prevent="showTermsConditions('terms')" type="warning">terminos</el-link> y <el-link @click.prevent="showTermsConditions('conditions')" type="warning">condiciones</el-link></span>
        </el-checkbox>
    </el-form-item>
    <el-form-item prop="promociones">
        <el-checkbox v-model="formRegister.promociones">
          <span>Deseo recibir promociones exclusivas</span>
        </el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="register(formRegister)"
      >Registrarse</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ElNotification } from 'element-plus'
import store from '../store';
export default {
  name: "Register",
  data: () => ({
    formRegister: {
      name: '',
      apellido: '',
      telefono: '',
      email: '',
      password: '',
      password_confirmation: '',
      terms: false,
      promociones: false,
    },
    rules:{
      name: [
        {
          required: true,
          message: 'Ingresa tu nombre',
          trigger: 'blur',
        },
        {
          min: 3,
          message: 'Minimo 3 caracteres',
          trigger: 'blur',
        },
      ],
      apellido: [
        {
          required: true,
          message: 'Ingresa tus apellidos',
          trigger: 'blur',
        },
        {
          min: 3,
          message: 'Minimo 3 caracteres',
          trigger: 'blur',
        },
      ],
      email: [
        {
          type: 'email',
          required: true,
          message: 'Ingresa un correo electronico valido',
          trigger: ['blur', 'change'],
        },
      ],
      password: [
        {
          required: true,
          min:8,
          message: 'Ingresa una contraseña',
          trigger: ['blur', 'change'],
        },
      ],
      password_confirmation: [
        {
          required: true,
          min:8,
          message: 'Ingresa nuevamente su contraseña',
          trigger: ['blur', 'change'],
        },
      ],
      telefono: [
        { required: true, message: 'Telefono es obligatorio' },
        { message: 'Telefono debe ser numero' },
        { min: 9 },
        { max: 11 },
      ],
      terms: [
        {
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
      promociones: [
        {
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
    },
  }),
  methods: {
    register(formEl) {
      this.$refs['ruleFormRef'].validate((valid) => {
        if (valid) {
          if (this.formRegister.password === this.formRegister.password_confirmation){
            store
              .dispatch('register', this.formRegister)
              .then((res) => {
                this.$router.push({
                  name: 'Home'
                })
              })
          }else{
            ElNotification({
              title: 'Datos invalidos',
              message: 'La contraseñas no concuerdan',
              type: 'warning',
            })
          }
        } else {
          ElNotification({
            title: 'Datos invalidos',
            message: 'Revisa los campos y vuelve a intentarlo',
            type: 'warning',
          })
          return false
        }
      })
    },
    resetForm(formName) {
      if (!formName) return
      this.$refs['ruleFormRef'].resetFields()
    },
    showTermsConditions(type){
      window.open("https://webookyou.com/terminos/terminos_y_condiciones.pdf", "_blank")
    }
  }
}
</script>

<style scoped>

</style>
