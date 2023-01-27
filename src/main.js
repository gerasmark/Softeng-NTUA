import { createApp} from 'vue'
import LoginPage from '../frontend/components/LoginPage.vue'
import App from '../frontend/components/App.vue'
import router from '../frontend/router/index.ts'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
const app= createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');

