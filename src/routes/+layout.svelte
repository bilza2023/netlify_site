<script>
// import {is_login} from "$lib/stores/appStore.js";
// let isLogin =false;
// is_login.subscribe( (p)=> isLogin=p);

import { SvelteToast } from '@zerodevx/svelte-toast'
import './styles.css';
import { BASE_URL } from '$lib/js/config.js';

</script>
<SvelteToast />

<slot></slot>