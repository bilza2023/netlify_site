<script>
// import {is_login} from "$lib/stores/appStore.js";
// let isLogin =false;
// is_login.subscribe( (p)=> isLogin=p);

import { SvelteToast } from '@zerodevx/svelte-toast'
import './styles.css';

</script>
<SvelteToast />

<slot></slot>