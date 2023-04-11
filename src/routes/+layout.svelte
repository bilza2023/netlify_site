<script>
import { SvelteToast } from '@zerodevx/svelte-toast'
import './styles.css';
import { BASE_URL } from '$lib/js/config.js';

let isLogin = false;

</script>
<SvelteToast />

<slot  {isLogin}  ></slot>