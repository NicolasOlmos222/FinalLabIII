<template>
  <div class="video-background">
    <video autoplay muted loop :src="videoSrc" class="fill-width">
      Your browser does not support HTML5 video.
    </video>
    <!-- Aquí puedes colocar el contenido que se superpondrá sobre el video -->
    <div class="formularioDeInicio">
      <div class="formularioContenedor">
        <form @submit.prevent="submitForm" class="loginForm">
          <input type="text" placeholder="Usuario ID" v-model="username" class="inputForm" required/>
          <input type="password" placeholder="Contraseña" v-model="password" class="inputForm"/>
          <button type="submit" class="botonForm">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore';

export default {
  name: 'VideoBackground',
  data() {
    return {
      videoSrc: require('@/assets/videos/CRIPTOPROJECT.mp4'), // Ruta al video
      username: '',
      password: ''
    };
  },
  methods: {
      submitForm(){
      const userStore = useUserStore();
      userStore.setUser(this.username);
      this.$emit('mostrar-m');
      //alert(userStore.usuarioID);
    }
  },
};
</script>

<style scoped>
.video-background {
  position: relative;
  width: 100%;
  height: 90vh; 
  overflow: hidden;
}

.fill-width {
  /*Style video de fondo */
  width: 53%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.formularioDeInicio {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.formularioContenedor {
  text-align: center;
  color: white;
}

.loginForm {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputForm {
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

.botonForm {
  margin-top: 10px;
  background: #a50060;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
/*
.formularioDeInicio {
  
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}*/
</style>
