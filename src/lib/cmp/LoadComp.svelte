<script>
export let size = "medium";

const sizes = {
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
};
</script>

<div class={`spinner ${sizes[size]}`}>
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>

<style>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.double-bounce1,
.double-bounce2 {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  background-color: #3498db;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  animation-delay: -1s;
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
