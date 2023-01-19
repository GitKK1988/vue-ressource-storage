import { createApp } from 'vue'
import App from './App.vue'

import BaseButton from './components/Ui/BaseButton.vue'
import BaseCard from './components/Ui/BaseCard.vue'
import BaseLink from './components/Ui/BaseLink.vue'
import DeleteButton from './components/Ui/DeleteButton.vue'
import BaseDialog from './components/Ui/BaseDialog.vue'

import './assets/main.css'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseLink', BaseLink)
app.component('DeleteButton', DeleteButton)
app.component('BaseDialog', BaseDialog)

app.mount('#app')
